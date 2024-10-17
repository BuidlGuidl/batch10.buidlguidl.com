import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";

const PersonalPages: NextPage = () => {
  return (
    <div className="min-h-screen bg-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <main className="max-w-4xl mx-auto">
        <header className="flex flex-col sm:flex-row items-center mb-12">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg mb-4 sm:mb-0 sm:mr-8">
            <Image src="/avater.jpeg" alt="Lukman" width={100} height={100} className="w-full h-full object-cover" />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold text-gray-900">Abdulyekeen Lukman</h1>
            <p className="text-xl text-gray-600 mt-2">Smart Contract Developer</p>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 border-b-2 border-blue-500 pb-2 mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            Hello! My name is Abdulyekeen Lukman, a passionate Smart Contract Developer with 2 years of experience
            writing smart contracts. I have a background in Electrical and Electronics Engineering, and my hands-on
            experience spans various blockchain platforms, including Ethereum and Starknet. I also have background in
            Cloud, AI and Bigdata. I am dedicated to writing clean, efficient code and constantly exploring new
            technologies to stay at the forefront of world of technologies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 border-b-2 border-blue-500 pb-2 mb-4">Connect</h2>
          <div className="flex flex-wrap gap-4">
            {[
              { name: "GitHub", url: "https://github.com/Lukman-01" },
              { name: "LinkedIn", url: "https://www.linkedin.com/in/lukman-abdulyekeen-75746323a/" },
              { name: "Twitter", url: "https://x.com/Icon_70" },
            ].map(platform => (
              <Link
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                {platform.name}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default PersonalPages;
