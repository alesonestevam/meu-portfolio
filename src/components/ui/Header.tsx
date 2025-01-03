"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full h-[50px] bg-gray-950 flex items-center justify-between px-5 mt-2 md:px-20 pr-7">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="./images/logo-soft-lime.svg"
          width={20}
          height={40}
          alt="Logo soft lime"
          title="Logo soft lime"
          priority
          className="text-lg font-bold text-white cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-5">
        <button
          onClick={() => router.push("/sobre")}
          className="w-[83px] h-[50px] px-3 py-1 bg-gray-950 text-white hover:bg-lime-600 border border-lime-200 rounded-[12px]"
        >
          SOBRE
        </button>
        <button
          onClick={() => {
            router.push("/ux-ui-design");
            setIsMenuOpen(false);
          }}
          className="w-[142px] h-[50px] px-3 py-1 bg-gray-950 text-white hover:bg-lime-600 border border-lime-200 rounded-[12px]">
          UX/UI DESIGN
        </button>
        <button
          onClick={() => {
            router.push("/grafico");
            setIsMenuOpen(false);
          }}
          className="w-[99px] h-[50px] px-3 py-1 bg-gray-950 text-white hover:bg-lime-600 border border-lime-200 rounded-[12px]">
          GRÁFICO
        </button>
        <button
          onClick={() => router.push("/videos")}
          className="w-[88px] h-[50px] px-3 py-1 bg-gray-950 text-white hover:bg-lime-600 border border-lime-200 rounded-[12px]">
          VÍDEOS
        </button>
      </nav>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="#EDFF8C"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-[50px] right-0 bg-gray-950 w-full shadow-lg flex flex-col items-center space-y-2 py-5 z-50 md:hidden">
          <button
            onClick={() => {
              router.push("/sobre");
              setIsMenuOpen(false);
            }}
            className="text-white px-4 py-2 hover:bg-lime-600 w-full text-center"
          >
            SOBRE
          </button>
          <button
            onClick={() => {
              router.push("/ux-ui-design");
              setIsMenuOpen(false);
            }}
            className="text-white px-4 py-2 hover:bg-lime-600 w-full text-center">
            UX/UI DESIGN
          </button>
          <button
            onClick={() => {
              router.push("/grafico");
              setIsMenuOpen(false);
            }}
            className="text-white px-4 py-2 hover:bg-lime-600 w-full text-center">
            GRÁFICO
          </button>
          <button
            onClick={() => router.push("/videos")}
            className="text-white px-4 py-2 hover:bg-lime-600 w-full text-center">
            VÍDEOS
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
