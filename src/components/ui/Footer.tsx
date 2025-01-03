"use client"

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-guava-800 text-white py-6 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between">
            <div className="text-[14px] md:text-3xl font-bold mb-4">ENTRE EM CONTATO</div>
            <div className="flex md:hidden mb-4">
              <Image
                src={"/images/arrow_outward.svg"}
                width={24}
                height={24}
                alt="Ícone seta para cima"
                title="Ícone seta para cima"
                priority
                className="text-lg font-bold text-white cursor-pointer"
                onClick={() => console.log("clicado")}
              />
            </div>
            <div className="hidden md:flex mb-4">
              <Image
                src={"/images/arrow_outward.svg"}
                width={48}
                height={48}
                alt="Ícone seta para cima"
                title="Ícone seta para cima"
                priority
                className="text-lg font-bold text-white cursor-pointer"
                onClick={() => console.log("clicado")}
              />
            </div>
          </div>
          <hr className="border-gray-300 mb-6" />
          <div className="flex justify-between">
            <div className="text-[14px] md:text-3xl font-bold mb-4">VOCÊ PODE <br /> ME ENCONTRAR <br /> NAS SEGUINTES REDES</div>
            <div className="flex flex-col gap-1 md:gap-4 mr-12">
              <a href="mailto:alesondf@gmail.com" className="text-[14px] md:text-[20px] text-yellow-400 underline">
                EMAIL
              </a>
              <a
                href="https://www.linkedin.com/in/aleson-estevam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] md:text-[20px] text-yellow-400 underline"
              >
                LINKEDIN
              </a>
              <a
                href="https://bsky.app/profile/designerestevam.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] md:text-[20px] text-yellow-400 underline"
              >
                BLUESKY
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
