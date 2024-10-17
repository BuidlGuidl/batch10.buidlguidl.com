import React from "react";
import Image from "next/image";
import type { NextPage } from "next";

const MichaelNwachukwuProfile: NextPage = () => {
  return (
    <main className="flex max-h-screen justify-center items-center h-full w-full pt-16">
      <div className="flex flex-col items-center gap-2 max-w-xl">
        <Image
          src="/michael-nwachukwu.png"
          alt="0x5defa248834d4b6112a0Ad3854AA22913e01BD83"
          width={140}
          height={140}
          className="rounded-full"
        />
        <h1 className="text-4xl font-bold">Michael Nwachukwu</h1>
        <p className="text-lg font-medium">Fullstack Engineer | Smart contract Developer | Technical Writer</p>
        <p className="text-center">
          I love building things and sharing my knowledge on HashNode. I am currently broadening my knowledge by
          participating in the Speed Run Ethereum BuidlGuidl program, building cool stuff with other smart developers
          and learning along the way.
        </p>
        <div className="inline-flex items-center gap-4">
          <a
            href="https://github.com/Michael-Nwachukwu"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-md rounded-full"
          >
            <Image src={"/github.svg"} alt="github" width={20} height={20} />
          </a>
          <a
            href="https://www.instagram.com/bldn.work/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-md rounded-full"
          >
            <Image src={"/instagram.svg"} alt="instagram logo" width={20} height={20} />
          </a>

          <a
            href="https://twitter.com/__MrNwachukwu"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-md rounded-full"
          >
            <Image src={"/x.svg"} alt="x/twitter logo" width={20} height={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/nwachukwu-michael-b6b8261a2/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-md rounded-full"
          >
            <Image src={"/linkedin.svg"} alt="linkedin" width={20} height={20} />
          </a>
        </div>
      </div>
    </main>
  );
};

export default MichaelNwachukwuProfile;
