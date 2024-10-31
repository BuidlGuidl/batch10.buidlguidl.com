"use client";

import React from "react";
import Link from "next/link";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

interface Props {
  children: React.ReactNode;
  className?: string;
}

interface StarknetReact {
  connectedAddress: string;
  isAllowListed: boolean;
  isCheckedIn: boolean;
  userContractAddress: string;
  isLoading: boolean;
}

// Alert Components
const Alert = ({ children, className = "" }: Props) => (
  <div className={`rounded-lg border p-4 mt-6 max-w-md mx-auto ${className}`}>{children}</div>
);

const AlertTitle = ({ children }: Props) => (
  <h5 className="mb-1 font-medium leading-none tracking-tight">{children}</h5>
);

const AlertDescription = ({ children }: Props) => <div className="text-sm opacity-70">{children}</div>;

// Card Components
const Card = ({ children, className = "" }: Props) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm mt-6 max-w-md mx-auto ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }: Props) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>
);

const CardTitle = ({ children }: Props) => (
  <h3 className="text-xl font-semibold leading-none tracking-tight">{children}</h3>
);

const CardContent = ({ children, className = "" }: Props) => <div className={`p-6 pt-0 ${className}`}>{children}</div>;

// Status Component
const StatusSection = ({
  connectedAddress,
  isAllowListed,
  isCheckedIn,
  userContractAddress,
  isLoading,
}: StarknetReact) => {
  if (isLoading) {
    return (
      <Card>
        <CardContent>
          <div className="flex items-center justify-center py-6">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-gray-900"></div>
              <p className="text-sm text-muted">Checking your status...</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!connectedAddress) {
    return (
      <Alert className="border-blue-200">
        <AlertTitle>Connect Your Wallet</AlertTitle>
        <AlertDescription>Please connect your wallet to view your Batch 10 status</AlertDescription>
      </Alert>
    );
  }

  if (!isAllowListed) {
    return (
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>Your Status</CardTitle>
            <span className="rounded-full px-2 py-1 text-sm font-medium bg-red-100 text-red-800">Not a Member</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm opacity-70">You are not currently a member of Batch 10</p>
        </CardContent>
      </Card>
    );
  }

  if (!isCheckedIn) {
    return (
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>Your Status</CardTitle>
            <span className="rounded-full px-2 py-1 text-sm font-medium bg-yellow-100 text-yellow-800">
              Ready to Check In
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm opacity-70">You are a Batch 10 member! Deploy your contract to check in</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Your Status</CardTitle>
          <span className="rounded-full px-2 py-1 text-sm font-medium bg-green-100 text-green-800">Checked In</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm opacity-70">
          Active with contract: {userContractAddress?.slice(0, 6)}...{userContractAddress?.slice(-4)}
        </p>
      </CardContent>
    </Card>
  );
};

const Home = () => {
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
          <div>
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

            <StatusSection
              connectedAddress={connectedAddress!}
              isAllowListed={isAllowListed!}
              isCheckedIn={isCheckedIn as boolean}
              userContractAddress={userContractAddress!}
              isLoading={isLoading!}
            />
          </div>
        )}
      </div>

      <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
        <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
          <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
            <BugAntIcon className="h-8 w-8 fill-secondary" />
            <p>
              Tinker with your smart contract using the{" "}
              <Link href="/debug" className="link">
                Debug Contracts
              </Link>{" "}
              tab.
            </p>
          </div>
          <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
            <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
            <p>
              Explore your local transactions with the{" "}
              <Link href="/blockexplorer" className="link">
                Block Explorer
              </Link>{" "}
              tab.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
