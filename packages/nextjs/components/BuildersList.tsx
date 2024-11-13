"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

type Builder = {
  address: string;
  hasPersonalPage: boolean;
};

export default function Page({ builderProfiles }: { builderProfiles: string[] }) {
  const [builders, setBuilders] = useState([] as Builder[]);
  const [isLoading, setIsLoading] = useState(true);
  const elementRef = useRef(null);

  const { data: events } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 126461494n,
  });

  useEffect(() => {
    if (elementRef.current) {
      setIsLoading(false);
    }
  }, []);

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
          if (address)
            return {
              address,
              // Check if the builder has a personal page
              hasPersonalPage: !!builderProfiles.find(bp => bp === address),
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
  }, [events, builderProfiles]);

  return (
    <div>
      <div className="flex items-center flex-col flex-grow pt-10" ref={elementRef}>
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-4xl font-bold">Builders</span>
          </h1>
        </div>
        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="overflow-x-auto">
              {isLoading ? (
                <span className="animate-pulse text-xl">Loading builder pages</span>
              ) : (
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
                              Builder Page
                            </Link>
                          ) : (
                            <>Not available</>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
