"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const [counter, setCounter] = useState<number | undefined>();

  const {
    data,
    error,
    isLoading: contractLoading,
  } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  useEffect(() => {
    if (data !== undefined) {
      setCounter(Number(data));
    }
  }, [data]);

  const renderContent = () => {
    if (error) {
      return (
        <div className="p-4 rounded-lg bg-red-100 text-red-700" role="alert">
          <p>Error fetching contract data: {error.message}</p>
        </div>
      );
    }

    return (
      <p className="text-lg flex gap-2 justify-center">
        <span className="font-bold">Checked in builders count:</span>
        <span>{counter !== undefined ? counter : "0"}</span>
      </p>
    );
  };

  if (contractLoading) {
    return (
      <div className="w-full h-full mt-20 animate-pulse">
        <div className="mb-6 flex items-center">
          <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
          <div>
            <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
            <div className="h-6 bg-gray-200 rounded w-48"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-200 rounded-lg h-96"></div>

          <div>
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="space-y-2 mb-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="h-4 bg-gray-200 rounded w-full"></div>
              ))}
            </div>

            <div className="flex items-center mb-4">
              <div className="h-8 bg-gray-200 rounded w-24 mr-4"></div>
              <div className="h-8 bg-gray-200 rounded-full w-8"></div>
              <div className="h-6 bg-gray-200 rounded w-8 mx-4"></div>
              <div className="h-8 bg-gray-200 rounded-full w-8"></div>
            </div>

            <div className="flex space-x-4 mb-6">
              <div className="h-10 bg-gray-200 rounded w-2/3"></div>
              <div className="h-10 bg-gray-200 rounded w-1/3"></div>
            </div>

            <div>
              <div className="h-6 bg-gray-200 rounded w-24 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Batch 10</span>
          </h1>
          <p className="text-center text-lg">Get started by taking a look at your batch GitHub repository.</p>
          {renderContent()}
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
