import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

const Socials: React.FC = () => {
  const socialPlatforms = [
    { name: "github", url: "https://github.com/krvvs", icon: <FaGithub size={24} /> },
    { name: "twitter", url: "https://x.com/xkrvsx", icon: <FaXTwitter size={24} /> },
  ];

  return (
    <div className="flex flex-row gap-4">
      {socialPlatforms.map(social => (
        <Link key={social.name} href={social.url} target="_blank">
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
