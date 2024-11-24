"use client";

import Image from "next/image";
import Link from "next/link";
import "../styles/LandingPage.css";
import ShootingStars from "./builders/0x28482B1279E442f49eE76351801232D58f341CB9/components/ShootingStars";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { StarsBackground } from "~~/components/StarsBg";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

interface Props {
  children: React.ReactNode;
  className?: string;
}

interface BatchUserStatus {
  connectedAddress: string;
  isAllowListed: boolean;
  isCheckedIn: boolean;
  isLoading: boolean;
}

const images = [
  "/bello/bello.jpg",
  "/dvm0x742/avatar.jpg",
  "/lukmansImages/lukmansAvater.jpeg",
  "/michaelNwachukwu-images/michael-nwachukwu.png",
  "https://avatars.githubusercontent.com/u/42065630?v=5",
  "/0x26BfbD8ED2B302ec2c2B6f063C4caF7abcB062e0-avatar.jpg",
  "/avatar.webp",
  "/emarc-pixels.jpg",
  "/superior.jpeg",
  "/cherry/cherrypfp.png",
  "https://avatars.githubusercontent.com/u/141290516?v=3",
];

const Alert = ({ children, className = "" }: Props) => (
  <div className={`rounded-lg border p-4 mt-6 max-w-md mx-auto ${className}`}>{children}</div>
);

const AlertTitle = ({ children, className }: Props) => (
  <h5 className={`mb-1 font-medium leading-none tracking-tight ${className}`}>{children}</h5>
);

const AlertDescription = ({ children, className }: Props) => (
  <div className={`text-sm opacity-70 ${className}`}>{children}</div>
);

const Card = ({ children, className = "" }: Props) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm mt-6 max-w-xl mx-auto ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }: Props) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className }: Props) => (
  <h3 className={`text-xl font-semibold leading-none tracking-tight ${className}`}>{children}</h3>
);

const CardContent = ({ children, className = "" }: Props) => <div className={`p-6 pt-0 ${className}`}>{children}</div>;

const StatusSection = ({ connectedAddress, isAllowListed, isCheckedIn, isLoading }: BatchUserStatus) => {
  if (isLoading) {
    return (
      <Card>
        <CardContent>
          <div className="flex items-center justify-center py-6">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 border-b-2 border-gray-900 rounded-full animate-spin"></div>
              <p className="text-sm !text-white dark:text-white">Checking your status...</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!connectedAddress) {
    return (
      <Alert className="border-blue-200">
        <AlertTitle className="!text-white dark:!text-white">Connect Your Wallet</AlertTitle>
        <AlertDescription className="!text-white dark:text-white">
          Please connect your wallet to view your Batch 10 status
        </AlertDescription>
      </Alert>
    );
  }

  if (!isAllowListed) {
    return (
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="!text-white dark:!text-white">Your Status</CardTitle>
            <span className="px-2 py-1 text-sm font-medium !text-red-800 bg-red-100 rounded-full">Not a Member</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm opacity-70 !text-white dark:!text-white">You are not currently a member of Batch 10</p>
        </CardContent>
      </Card>
    );
  }

  if (!isCheckedIn) {
    return (
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="!text-white dark:!text-white">Your Status</CardTitle>
            <span className="px-2 py-1 text-sm font-medium text-yellow-800 bg-yellow-100 rounded-full">
              Ready to Check In
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm opacity-70 !text-white dark:!text-white">
            You are a Batch 10 member! Deploy your contract to check in
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-9/12 md:w-[446px]">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="!text-white dark:!text-white">Your Status</CardTitle>
          <span className="px-2 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">Checked In</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-left opacity-70 !text-white dark:!text-white">
          Active with wallet address: <Address address={connectedAddress} />
        </div>
      </CardContent>
    </Card>
  );
};

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
    <div className="relative flex flex-col items-center flex-grow min-h-screen overflow-hidden bg">
      <ShootingStars />
      <StarsBackground />
      <div className="banner">
        <div className="slider" style={{ "--quantity": 11 } as React.CSSProperties}>
          {images.map((image, index) => (
            <div key={index} className="item" style={{ "--position": index + 1 } as React.CSSProperties}>
              <Image src={image} alt={`builder ${index + 1}`} width={300} height={300} />
            </div>
          ))}
        </div>
        <div className="content">
          <h1 data-content="BATCH 10" className="BuidlGuidl">
            BATCH 10
          </h1>
          <div className="author">
            <h2 className="!text-white dark:text-white">Buidl Guidl</h2>
          </div>
          <div className="model"></div>
        </div>
      </div>
      <div className="!h-max banner">
        <div className="flex-grow w-screen z-[9999]">
          {error ? (
            <div className="p-4 !text-red-700 bg-red-100 rounded-lg" role="alert">
              <p>Error fetching contract data: {error.message}</p>
            </div>
          ) : (
            <div className="relative">
              <div className="flex justify-center gap-2 mb-4 text-lg">
                <span className="font-bold !text-white dark:text-white">Checked in builders count:</span>
                {counterLoading ? (
                  <span className="animate-pulse">
                    <div className="w-12 h-6 bg-gray-200 rounded"></div>
                  </span>
                ) : (
                  <span className="!text-white dark:text-white">
                    {checkedInCounter !== undefined ? Number(checkedInCounter) : "0"}
                  </span>
                )}
              </div>

              <StatusSection
                connectedAddress={connectedAddress as string}
                isAllowListed={isAllowListed as boolean}
                isCheckedIn={isCheckedIn as boolean}
                isLoading={isLoading as boolean}
              />
            </div>
          )}
        </div>
        <div className="flex-grow w-screen !px-8 !py-12 mt-16 z-[9999]">
          <div className="flex flex-col items-center justify-center gap-12 sm:flex-row">
            <div className="flex flex-col items-center max-w-xs px-10 py-10 text-center bg-base-100 rounded-3xl">
              <BugAntIcon className="w-8 h-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col items-center max-w-xs px-10 py-10 text-center bg-base-100 rounded-3xl">
              <MagnifyingGlassIcon className="w-8 h-8 fill-secondary" />
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
    </div>
  );
};

export default Home;
