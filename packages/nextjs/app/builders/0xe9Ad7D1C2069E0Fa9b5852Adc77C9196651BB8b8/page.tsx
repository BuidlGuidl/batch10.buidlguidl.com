"use client";

import Image from "next/image";
import Socials from "./components/Socials";
import type { NextPage } from "next";
import { useEnsAvatar, useEnsName } from "wagmi";
import { Address } from "~~/components/scaffold-eth";

const builderAddress = "0xe9Ad7D1C2069E0Fa9b5852Adc77C9196651BB8b8";

const KrvvsProfile: NextPage = () => {
  const { data: fetchedEns } = useEnsName({
    address: builderAddress,
    chainId: 1,
  });

  const { data: fetchedEnsAvatar } = useEnsAvatar({
    name: fetchedEns ? fetchedEns : "",
    chainId: 1,
  });

  return (
    <div className="flex justify-center">
      <div className="w-[800px] min-w-[200px] max-w-[800px] p-[30px] m-[50px] bg-base-200 shadow-2xl rounded-2xl flex flex-col gap-6 items-center">
        <div className="avatar">
          <div className="w-40 rounded-full">
            <Image
              src={fetchedEnsAvatar || "https://avatars.githubusercontent.com/u/141290516?v=4"}
              alt="Builder's Avatar"
              height={100}
              width={100}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="card-title">{fetchedEns}</div>
          <Socials />
        </div>

        <div className="text-center max-w-[400px] mt-[8px]">
          <p>Hello World!</p>
          <p>
            I am a builder who enjoys learning and creating value, with a strong interest in bringing blockchain
            technologies to life.
          </p>
        </div>
        <div className="flex items-center mt-8">
          <Address address={builderAddress} format="short" size="xs" onlyEnsOrAddress={true} />
        </div>
      </div>
    </div>
  );
};

export default KrvvsProfile;
