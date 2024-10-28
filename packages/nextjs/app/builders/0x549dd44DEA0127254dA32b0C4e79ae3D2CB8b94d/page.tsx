import Image from "next/image";
import { NextPage } from "next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SuperiorProfile: NextPage = () => {
  const socialLinks = [
    {
      href: "https://github.com/Superior212",
      label: "Github",
      icon: <FaGithub size={24} />,
    },
    {
      href: "https://x.com/Samsonaderonmu",
      label: "Twitter",
      icon: <FaXTwitter size={24} />,
    },
    {
      href: "https://www.linkedin.com/in/samsonaderonmu",
      label: "LinkedIn",
      icon: <FaLinkedin size={24} />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-base-200 to-base-300">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image src="/superior.jpeg" width={96} height={96} alt="Builder Avatar" />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Samson Aderonmu</h2>
          <p className="text-sm mt-2">
            Passionate blockchain developer and Web3 enthusiast. Building the decentralized future, one smart contract
            at a time.
          </p>
          <div className="card-actions justify-center mt-4">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-square"
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

export default SuperiorProfile;
