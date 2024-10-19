"use client";

import { useState } from "react";
import type { NextPage } from "next";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

type Builder = {
  name: string;
  profileHref: string;
  addressOrEns: string;
};

const Home: NextPage = () => {
  const [builders] = useState([] as Builder[]);

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
                    <tr key={id}>
                      <th>{id}</th>
                      <td>
                        <a href={builder.profileHref}>{builder.name}</a>
                      </td>
                      <td>{builder.addressOrEns}</td>
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

export default Home;
