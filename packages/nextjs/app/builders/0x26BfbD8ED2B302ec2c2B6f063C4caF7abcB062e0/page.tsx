import Image from "next/image";
import type { NextPage } from "next";
import { FaDiscord, FaGithub, FaTelegram } from "react-icons/fa";

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
              I studied computer science at university and started working in web development. After gaining experience,
              I transitioned into freelancing. Now, I’m diving into web3 and smart contract development, which I’m
              really passionate about.
            </p>
            <p>Address: 0x26BfbD8ED2B302ec2c2B6f063C4caF7abcB062e0</p>
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
        </div>
      </div>
    </div>
  );
};

export default PeterProfile;
