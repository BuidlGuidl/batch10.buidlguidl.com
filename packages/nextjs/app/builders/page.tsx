"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BUILDERS } from "./constants";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

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

      // Filter out duplicate addresses
      const filteredAddresses: string[] = [];
      events.forEach(event => {
        const address = event.args.builder;
        if (!address) return;
        if (!filteredAddresses.find(addr => address === addr)) filteredAddresses.push(address);
      });

      const builders = await Promise.all(
        filteredAddresses.map(async address => {
          // Check if the builder has a personal page
          const resp = await fetch(`builders/${address}`);
          if (address)
            return {
              address,
              name: BUILDERS[address.toLowerCase()],
              hasPersonalPage: resp.status === 200,
            };
        }),
      );
      setBuilders(
        builders
          .filter(builder => !!builder)
          // Sort by personal apge availability
          .sort((a, b) => +(b.hasPersonalPage === true) - +(a.hasPersonalPage === true)),
      );
    };

    fetchBuilders().catch(console.error);
  }, [events]);

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-4xl font-bold">Builders</span>
          </h1>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>ENS or Address</th>
                    <th>Builder Page</th>
                  </tr>
                </thead>
                <tbody>
                  {builders.map((builder, id) => (
                    <tr key={id} className="items-center">
                      <th>{id + 1}</th>
                      <td className="text-lg">
                        <Address address={builder.address} />
                      </td>
                      <td className="text-lg">
                        {builder.hasPersonalPage ? (
                          <Link className="underline" href={`/builders/${builder.address}`}>
                            {builder.name ? `${builder.name}'s Builder Page` : "Builder Page"}
                          </Link>
                        ) : (
                          <>Not available</>
                        )}
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
