import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const contactLinks = [
  {
    link: "mailto:michael.esenwa@yahoo.com",
    image: <MdEmail size={24} />,
  },
  {
    link: "https://twitter.com/kcmikee",
    image: <FaXTwitter size={24} />,
  },
  {
    link: "https://www.linkedin.com/in/kachukwu-michael-esenwa/",
    image: <FaLinkedin size={24} />,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-3">
      {contactLinks.map((_, i) => (
        <a key={i} href={_.link} target="_blank">
          {_.image}
        </a>
      ))}
    </div>
  );
};

export default Socials;
