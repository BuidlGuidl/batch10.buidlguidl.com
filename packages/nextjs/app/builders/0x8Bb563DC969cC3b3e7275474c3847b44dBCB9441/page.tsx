import React from "react";
import Image from "next/image";
import { NextPage } from "next";

const MichaelEsenwa: NextPage = () => {
  const contactLink = [
    {
      link: "https://wa.me/2347081293274?text=Hello Michael",
      image: "https://img.shields.io/badge/WHATSAPP-%2325D366.svg?&style=for-the-badge&logo=whatsapp&logoColor=white",
      title: "Whatsapp",
    },
    {
      link: "mailto:michael.esenwa@yahoo.com",
      image: "https://img.shields.io/badge/email me-%23D14836.svg?&style=for-the-badge&logo=gmail&logoColor=white",
      title: "Email",
    },
    {
      link: "https://twitter.com/kcmikee",
      image: "https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white",
      title: "Twitter",
    },
    {
      link: "https://www.linkedin.com/in/kachukwu-michael-esenwa/",
      image: "https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white",
      title: "LinkedIn",
    },
  ];
  return (
    <div className="flex flex-col items-center h-[80vh] pt-20 md:pt-0 md:justify-center bg-gradient-to-br from-gray-800 to-base-300">
      <div className="flex justify-between w-11/12 p-4 border border-gray-600 rounded-md md:p-8 md:w-9/12">
        <div className="">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold lg:text-4xl text-start">Hi there, I am Kachukwu Michael Esenwa </h1>
            <div className="h-[100px] w-[100px] lg:w-[300px] lg:h-[300px] shrink-0 !overflow-hidden rounded-full relative lg:hidden">
              <Image fill src="https://avatars.githubusercontent.com/u/42065630?v=4" alt="avatar" />
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
            <h4 className="">Address: 0x8Bb563DC969cC3b3e7275474c3847b44dBCB9441</h4>
            <h4 className="mt-8">📫 How to reach me:</h4>
            <div className="flex items-center gap-3">
              {contactLink.map((_, i) => (
                <>
                  <a key={i} href={_.link} target="_blank">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt={_.title} src={_.image} />
                  </a>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="h-[100px] w-[100px] lg:w-[300px] lg:h-[300px] shrink-0 !overflow-hidden rounded-full relative hidden lg:block">
          <Image fill src="https://avatars.githubusercontent.com/u/42065630?v=4" alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default MichaelEsenwa;
