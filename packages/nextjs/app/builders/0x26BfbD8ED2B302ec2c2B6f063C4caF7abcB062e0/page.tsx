import Image from "next/image";
import type { NextPage } from "next";
import { FaDiscord, FaGithub, FaTelegram } from "react-icons/fa";
import { Address } from "~~/components/scaffold-eth";

const PeterProfile: NextPage = () => {
  const socials = [
    {
      name: "Telegram",
      icon: <FaTelegram size={24} />,
      address: "https://telegram.me/pbkompasz",
    },
    {
      name: "Discord",
      icon: <FaDiscord size={24} />,
      address: "https://discordapp.com/users/kbence9208",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={24} />,
      address: "https://github.com/pbkompasz",
    },
  ];

  return (
    <div className="flex items-center justify-center h-full max-h-screen pt-16">
      <div className="card shadow-lg rounded-lg p-6 max-w-md">
        <Image
          src={"/0x26BfbD8ED2B302ec2c2B6f063C4caF7abcB062e0-avatar.jpg"}
          width={100}
          height={100}
          alt={"Profile"}
          className="rounded-full self-center"
        />
        <div className="px-6 py-4 flex flex-col items-center">
          <h2 className="font-bold text-xl mb-2 text-center">Peter Kompasz</h2>
          <div className="text-center">
            <p>Fullstack Developer</p>
            <p>
              Hello! I&apos;m Peter.
              <br />
              My journey into <span className="font-bold">web3</span> began with studying computer science at
              university, followed by a stint in web development.
              <br />
              Currently, I&apos;m transitioning into <span className="font-bold">web3</span> and{" "}
              <span className="font-bold">smart contract development</span>, which I&apos;m really{" "}
              <span className="font-bold">passionate</span> about
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            {socials.map((social, id) => (
              <a
                key={id}
                href={social.address}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-square"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <Address address="0x26BfbD8ED2B302ec2c2B6f063C4caF7abcB062e0" />
        </div>
      </div>
    </div>
  );
};

export default PeterProfile;
