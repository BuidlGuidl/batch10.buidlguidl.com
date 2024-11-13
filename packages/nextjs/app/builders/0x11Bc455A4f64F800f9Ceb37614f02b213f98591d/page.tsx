import Image from "next/image";
import { backgroundPattern } from "./backgroundPattern";
import { NextPage } from "next";
import { FaDiscord, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Address } from "~~/components/scaffold-eth";

const socialLinks = [
  {
    href: "https://github.com/emarc99",
    label: "Github",
    icon: <FaGithub size={24} />,
  },
  {
    href: "https://x.com/emmanex94",
    label: "Twitter",
    icon: <FaXTwitter size={24} />,
  },
  {
    href: "https://www.linkedin.com/in/emmanuel-aroso-002783169/",
    label: "LinkedIn",
    icon: <FaLinkedin size={24} />,
  },
  {
    href: "https://discordapp.com/users/emarc99", // Can be your Discord username or server invite
    label: "Discord",
    icon: <FaDiscord size={24} />,
  },
  {
    href: "https://t.me/emarc99",
    label: "Telegram",
    icon: <FaTelegram size={24} />,
  },
];

const EmarcProfile: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full" style={backgroundPattern}>
      <div className="card w-128 bg-[#EE1530]/80 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <figure className="px-10 pt-10">
          <div className="avatar">
            <div className="w-24 rounded-full mb-5 transition-transform duration-300 hover:scale-105">
              <Image
                src="/emarc-pixels.jpg"
                width={100}
                height={100}
                alt="emarc's avatar"
                className="transition-transform duration-300"
              />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold  bg-clip-text ">Aroso Emmanuel</h2>
          <p className="text-sm mt-2 leading-relaxed max-w-md opacity-90 hover:opacity-100 transition-opacity duration-300">
            A researcher with computer engineering background, currently exploring the web3 space for new research
            opportunities and contributing to interesting projects.
          </p>
          <h2 className="fmt-2 leading-relaxed max-w-md opacity-90 hover:opacity-100 transition-opacity duration-300">
            <Address address="0x11Bc455A4f64F800f9Ceb37614f02b213f98591d" />
          </h2>
          <div className="card-actions justify-center mt-6 space-x-4">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-square hover:scale-110 transition-all duration-300 hover:bg-base-200"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmarcProfile;
