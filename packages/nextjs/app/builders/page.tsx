"use client";

import { useState } from "react";
import type { NextPage } from "next";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

type Builder = {
  name: string;
  address: `0x${string}`;
};

const Builders: NextPage = () => {
  const [builders] = useState([
    {
      name: "Abdulyekeen Lukman",
      address: "0x186a761645f2A264ad0A655Fb632Ca99150803A9",
    },
    {
      name: "Favvie Kenpachi",
      address: "0x21Be2291f91EA2A1d1EB65DbBea2dA8886Ad7a3E",
    },
    {
      name: "Bello Abraham",
      address: "0x28482B1279E442f49eE76351801232D58f341CB9",
    },
    {
      name: "Samson Aderonmu",
      address: "0x62CeF3Ca8b52a9C69a17236CA2c56Cdb7a383E8e",
    },
    {
      name: "Michael Ojekunle",
      address: "0x7429CbD5eD20736645723E972bE60B7F6BF5959c",
    },
  ] as Builder[]);

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
                      <td className="underline text-lg">
                        <a href={`/builders/${builder.address}`}>{builder.name}</a>
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
