"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  const {
    data: checkedInCounter,
    error: counterError,
    isLoading: counterLoading,
  } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  const {
    data: isAllowListed,
    error: allowListError,
    isLoading: allowListLoading,
  } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [connectedAddress],
  });

  const {
    data: userContractAddress,
    error: checkInError,
    isLoading: checkInLoading,
  } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [connectedAddress],
  });

  const error = counterError || allowListError || checkInError;
  const isLoading = counterLoading || allowListLoading || checkInLoading;
  const isCheckedIn = userContractAddress && userContractAddress !== "0x0000000000000000000000000000000000000000";

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Batch 10</span>
          </h1>
          <p className="text-center text-lg">Get started by taking a look at your batch GitHub repository.</p>

          {error ? (
            <div className="p-4 rounded-lg bg-red-100 text-red-700" role="alert">
              <p>Error fetching contract data: {error.message}</p>
            </div>
          ) : (
            <>
              <div className="text-lg flex gap-2 justify-center mb-4">
                <span className="font-bold">Checked in builders count:</span>
                {counterLoading ? (
                  <span className="animate-pulse">
                    <div className="h-6 bg-gray-200 rounded w-12"></div>
                  </span>
                ) : (
                  <span>{checkedInCounter !== undefined ? Number(checkedInCounter) : "0"}</span>
                )}
              </div>

              {connectedAddress && (
                <div className="mt-6 p-4 rounded-lg bg-base-200">
                  <h2 className="text-xl font-bold mb-3">Your Status</h2>
                  {isLoading ? (
                    <div className="space-y-2">
                      <div className="h-6 bg-gray-200 rounded w-48 animate-pulse" />
                      <div className="h-6 bg-gray-200 rounded w-36 animate-pulse" />
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${isAllowListed ? "bg-green-500" : "bg-red-500"}`} />
                        <span>
                          {isAllowListed ? "You are a member of Batch 10" : "You are not a member of Batch 10"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${isCheckedIn ? "bg-green-500" : "bg-yellow-500"}`} />
                        <span>
                          {isCheckedIn
                            ? `Checked in with contract: ${userContractAddress?.slice(
                                0,
                                6,
                              )}...${userContractAddress?.slice(-4)}`
                            : "Not checked in yet"}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
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
