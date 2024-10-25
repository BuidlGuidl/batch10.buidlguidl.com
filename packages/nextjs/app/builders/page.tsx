"use client";

import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useScaffoldEventHistory, useScaffoldReadContract } from "~~/hooks/scaffold-eth";

type Builder = {
  name: string;
  address: string;
  hasPersonalPage: boolean;
};

const Builders: NextPage = () => {
  const [builders, setBuilders] = useState([] as Builder[]);

  const { data: events } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 126461494n,
  });

  useEffect(() => {
    const fetchBuilders = async () => {
      if (!events) return;
      const builders = await Promise.all(
        events.map(async event => {
          const address = event.args.builder;
          // Check if the builder has a personal page
          const resp = await fetch(`builders/${address}`);
          if (address)
            return {
              address,
              name: "",
              hasPersonalPage: resp.status === 200,
            };
        }),
      );
      setBuilders(builders.filter(builder => !!builder));
    };

    fetchBuilders().catch(console.error);
  }, [events]);

  const { data: checkedInCounter } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });
  console.log(checkedInCounter);

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-4xl font-bold">Builders</span>
          </h1>
          <p className="text-lg flex gap-2 justify-center">
            <span className="font-bold">Checked in builders count: {Number(checkedInCounter)}</span>
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {builders.map((builder, id) => (
                    <tr key={id} className="items-center">
                      <th>{id + 1}</th>
                      <td className="text-lg">
                        {builder.hasPersonalPage ? (
                          <a className="underline" href={`/builders/${builder.address}`}>
                            {builder.name}
                          </a>
                        ) : (
                          <>{builder.name}(Coming soon)</>
                        )}
                      </td>
                      <td className="flex flex-nowrap items-center gap-1 content-center h-100">
                        <a
                          href={`https://optimistic.etherscan.io/address/${builder.address}`}
                          target="_blank"
                          className="underline"
                        >
                          {builder.address}
                        </a>
                        <FaExternalLinkAlt size="12" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Builders;
