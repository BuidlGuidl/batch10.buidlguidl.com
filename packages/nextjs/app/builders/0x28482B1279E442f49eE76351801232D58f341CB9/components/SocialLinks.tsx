import Link from "next/link";

const SocialLinks: React.FC = () => {
  const platforms = [
    { name: "GitHub", url: "https://github.com/Belloabraham121", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/iteoluwakisi-bello/", icon: "linkedin" },
    { name: "Twitter", url: "https://x.com/BAbraham_92/", icon: "twitter" },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {platforms.map(platform => (
        <Link
          key={platform.name}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block text-lg"
        >
          <span className="relative z-10 block px-3 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-3 py-2 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">
              <i className={`fab fa-${platform.icon} mr-2`}></i>
              {platform.name}
            </span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
