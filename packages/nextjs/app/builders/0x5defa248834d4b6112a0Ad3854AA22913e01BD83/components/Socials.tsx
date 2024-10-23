import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  const links = [
    { href: "https://github.com/Michael-Nwachukwu", icon: <FaGithub /> },
    {
      href: "https://www.instagram.com/bldn.work/",
      icon: <FaInstagram />,
    },
    { href: "https://twitter.com/0xchef__", icon: <FaXTwitter /> },
    {
      href: "https://www.linkedin.com/in/nwachukwu-michael-b6b8261a2/",
      icon: <FaLinkedin />,
    },
  ];
  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-md rounded-full"
        >
          {link.icon}
        </Link>
      ))}
    </>
  );
};

export default Socials;
