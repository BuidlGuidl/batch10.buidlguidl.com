import Image from "next/image";
import Socials from "./components/Socials";
import { NextPage } from "next";
import { Address } from "~~/components/scaffold-eth";

const MichaelEsenwa: NextPage = () => {
  return (
    <div className="flex flex-col items-center h-[80vh] pt-20 md:pt-0 md:justify-center bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-base-300">
      <div className="flex justify-between w-11/12 p-4 border border-gray-200 rounded-lg shadow-sm dark:border-gray-600 md:p-8 md:w-9/12">
        <div className="">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold lg:text-4xl text-start dark:text-white">
              Hi there, I am Kachukwu Michael Esenwa{" "}
            </h1>
            <div className="h-[100px] w-[100px] lg:w-[300px] lg:h-[300px] shrink-0 !overflow-hidden rounded-full relative lg:hidden">
              <Image fill src="https://avatars.githubusercontent.com/u/42065630?v=5" alt="avatar" />
            </div>
          </div>
          <hr className="mt-2 border-gray-500" />
          <div className="flex justify-between">
            <h4 className="mt-5 text-base text-start">
              I am a Front End Developer with a strong emphasis on creating high-performance web applications. With over
              four years in the industry, my expertise lies in writing clean, efficient code and optimizing web pages
              for speed and scalability. 💻
            </h4>
          </div>

          <div className="mt-4">
            <div className="text-xs md:text-base">
              Address:{" "}
              <div className="block mt-1.5">
                <Address
                  onlyEnsOrAddress
                  address="0x8Bb563DC969cC3b3e7275474c3847b44dBCB9441"
                  format="short"
                  size="sm"
                />
              </div>
            </div>
            <h4 className="mt-8">📫 How to reach me:</h4>
            <Socials />
          </div>
        </div>
        <div className="h-[100px] w-[100px] lg:w-[300px] lg:h-[300px] shrink-0 !overflow-hidden rounded-full relative hidden lg:block">
          <Image fill src="https://avatars.githubusercontent.com/u/42065630?v=5" alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default MichaelEsenwa;
