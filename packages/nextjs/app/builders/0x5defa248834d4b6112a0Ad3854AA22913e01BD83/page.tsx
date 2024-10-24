import Image from "next/image";
import Socials from "./components/Socials";
import type { NextPage } from "next";

const MichaelNwachukwuProfile: NextPage = () => {
  return (
    <main className="flex max-h-screen justify-center items-center h-full w-full pt-28">
      <div className="flex flex-col items-center gap-2 max-w-xl">
        <Image
          src="/michaelNwachukwu-images/michael-nwachukwu.png"
          alt="0x5defa248834d4b6112a0Ad3854AA22913e01BD83"
          width={140}
          height={140}
          className="rounded-full"
        />
        <h1 className="text-4xl font-bold">Michael Nwachukwu</h1>
        <p className="text-lg font-medium">Fullstack Engineer | Smart contract Developer | Technical Writer</p>
        <p className="text-center">
          With a background in Architecture, I’ve transitioned into developing web applications while also working as a
          technical writer. Currently, I’m deepening my expertise in web3 through the Speed Run Ethereum BuidlGuidl
          program, collaborating with talented developers to build innovative projects and continuously learning
          throughout the process.
        </p>
        <div className="inline-flex items-center gap-4">
          <Socials />
        </div>
      </div>
    </main>
  );
};

export default MichaelNwachukwuProfile;
