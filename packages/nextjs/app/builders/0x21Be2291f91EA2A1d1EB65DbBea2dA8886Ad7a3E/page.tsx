"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";

// import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Profile: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card shadow-xl rounded-lg p-6 ">
        <Image src={"/avatar.webp"} width={100} height={100} alt={"Profile"} className="rounded-full self-center" />
        <div className="px-6 py-4 flex flex-col items-center">
          <h2 className="font-bold text-xl mb-2 text-center">Favvie Kenpachi</h2>
          <div className="text-center">
            <p>Front-end Developer / Smart Contract Developer</p>
            <p>Address: 0x21Be2291f91EA2A1d1EB65DbBea2dA8886Ad7a3E</p>
          </div>
          <div className="flex justify-center space-x-4">
            <Link
              href="https://linkedin.com/in/favour-abangwu"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              LinkedIn
            </Link>
            <Link
              href="https://twitter.com/0xkenpachi_"
              className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500"
            >
              Twitter
            </Link>
            <Link
              href="https://github.com/Favvie"
              className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
