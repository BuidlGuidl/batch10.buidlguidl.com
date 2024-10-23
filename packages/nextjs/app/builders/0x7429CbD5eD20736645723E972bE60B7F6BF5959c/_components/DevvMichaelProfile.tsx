"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Code, Cpu, Globe } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { Address } from "~~/components/scaffold-eth";

const DevvMichaelProfile = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  }, []);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [handleScroll, handleMouseMove]);

  const parallaxLayers = [
    { icon: <Code size={48} />, speed: 0.05, initialPos: { x: "18%", y: "14%" } },
    { icon: <Cpu size={48} />, speed: 0.1, initialPos: { x: "80%", y: "50%" } },
    { icon: <Globe size={48} />, speed: 0.15, initialPos: { x: "34%", y: "78%" } },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-base-200 to-base-300">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        {parallaxLayers.map((layer, index) => (
          <div
            key={index}
            className="absolute text-primary dark:text-base-100 opacity-40"
            style={{
              left: layer.initialPos.x,
              top: layer.initialPos.y,
              transform: `translate(
                ${(mouseX - (typeof window !== "undefined" ? window.innerWidth : 0) / 2) * layer.speed * 0.01}px,
                ${
                  (mouseY - (typeof window !== "undefined" ? window.innerHeight : 0) / 2) * layer.speed * 0.01 -
                  scrollY * layer.speed
                }px
              )`,
              transition: "transform 0.3s ease-out",
            }}
          >
            {layer.icon}
          </div>
        ))}
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary dark:bg-base-100 opacity-30"
          style={{
            width: Math.random() * 20 + 10 + "px",
            height: Math.random() * 20 + 10 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            transform: `translateY(${scrollY * (Math.random() * 0.2 + 0.05)}px)`,
            transition: "transform 2s ease-out",
          }}
        />
      ))}

      {/* Main Content */}
      <article className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="bg-base-100/80 backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg w-full max-w-2xl">
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <Image src="/dvm0x742/avatar.jpg" width={100} height={100} alt="Profile" className="rounded-full" />
              <div>
                <h1 className="text-2xl font-bold text-base-content leading-tight">Michael Ojekunle</h1>
                <div className="text-secondary-content flex flex-col gap-1">
                  <span className="">Frontend Developer / Smart Contract Writer</span>
                  <Address address="0x7429CbD5eD20736645723E972bE60B7F6BF5959c" format="long" size="xs" />
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-2 space-y-4">
            <p className="text-sm text-base-content">
              Hey, I&apos;m Michael! I&apos;m a frontend dev, blockchain explorer, and lover of all things tech.
              I&apos;m all about building cool stuff, sharing what I learn, and helping others &ldquo;Code and
              Thrive.&rdquo; When I&apos;m not coding or writing, I&apos;m probably geeking out on finance, snapping
              photos of nature, or figuring out how to make life a little more awesome. Let&apos;s create something
              amazing together!
            </p>
          </div>
          <div className="px-6 py-4 flex justify-center space-x-4">
            <SocialLink href="https://linkedin.com/in/michael-ojekunle" icon={<LuLinkedin />} label="LinkedIn" />
            <SocialLink href="https://twitter.com/MichaelOjekunl2" icon={<FaXTwitter />} label="X (formerly Twitter)" />
            <SocialLink href="https://github.com/michojekunle" icon={<LuGithub />} label="GitHub" />
          </div>
        </div>
      </article>
    </div>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <Link
    href={href}
    className="inline-flex items-center justify-center w-10 h-10 rounded-full text-primary hover:text-secondary bg-secondary hover:bg-secondary-content focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300"
    aria-label={label}
  >
    {icon}
  </Link>
);

export default DevvMichaelProfile;
