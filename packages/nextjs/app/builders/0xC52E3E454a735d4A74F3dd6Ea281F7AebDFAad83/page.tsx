import Image from "next/image";
import ProfilePic from "./pfp.png";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const PersonalPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#333333] flex flex-col items-center justify-center">
      {/* Profile Picture */}
      <div className="mb-6">
        <Image
          src={ProfilePic}
          alt="Profile"
          width={128}
          height={128}
          className="rounded-full border-4 border-[#EAEAEA] shadow-lg"
        />
      </div>

      {/* Name */}
      <h1 className="text-4xl font-bold text-[#1A1A1A] mb-4">Cherry 🍒</h1>

      {/* Description */}
      <p className="text-lg text-[#4F4F4F] max-w-md text-center mb-8">
        I am currently pursuing a Bachelor&apos;s degree in Computer Science and I aspire to become a blockchain
        developer and build cool things. Nice to meet you! 🌟
      </p>

      {/* Social Media Links */}
      <div className="flex space-x-6 mb-8">
        <a
          href="https://github.com/aspiringLilCoder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#333333] hover:text-[#1A1A1A]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1A1A1A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        <a
          href="https://t.me/aspirecoder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#333333] hover:text-[#1A1A1A]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1A1A1A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </a>
        <a
          href="https://x.com/aspirecoder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#333333] hover:text-[#1A1A1A]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1A1A1A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </a>
      </div>
      <Address address="0xC52E3E454a735d4A74F3dd6Ea281F7AebDFAad83" />
    </div>
  );
};

export default PersonalPage;
