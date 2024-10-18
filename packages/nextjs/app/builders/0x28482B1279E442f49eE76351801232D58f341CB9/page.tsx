import Image from "next/image";
import ShootingStars from "./components/ShootingStars";
import SocialLinks from "./components/SocialLinks";
import type { NextPage } from "next";

const BelloAbraham: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 flex items-center justify-center p-4">
      <ShootingStars />

      <div className="bg-base-300 text-white p-6 rounded-3xl max-w-2xl mx-auto">
        <div className="rounded-2xl p-4 mb-4">
          <Image
            src="/avatar.jpg"
            alt="Bello abraham"
            width={160}
            height={160}
            className="rounded-xl w-40 h-40 mx-auto"
          />
        </div>
        <h2 className="text-2xl font-bold mb-1 text-center">Bello Abraham</h2>
        <p className="text-gray-400 mb-2 text-center">Smart Contract Developer | Data Scientist</p>
        <p className="text-sm text-gray-300 mb-4 text-center">
          I am a Web3 developer and data scientist passionate about creating decentralized solutions with blockchain
          technology, leveraging expertise in smart contracts, DeFi, and data analysis to drive impactful innovation.
        </p>
        <div className="flex justify-center">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default BelloAbraham;
