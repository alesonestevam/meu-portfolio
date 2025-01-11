"use client";

import Image from "next/image";
import Link from "next/link";

interface PortifolioObject {
  id: string;
  type: string;
  title: string;
  text: string;
  image: string;
  route: string;
}

interface CardPortifolioComponentProps {
  portifolioObject: PortifolioObject
}

export default function CardPortifolioComponent(
  {
    portifolioObject
  }: Readonly<CardPortifolioComponentProps>) {

  return (
    <div className="flex flex-col mdd:flex-row justify-between text-white pt-6 pb-6 pl-0 pr-6 md:pt-12 md:pb-12 md:pr-12 md:pl-0">
      <div className="flex flex-col items-start space-y-2 w-[110px] md:w-[36px]">
        <span className="text-[20px] text-white mb-4">{portifolioObject.id}</span>
          {
            portifolioObject.type === 'GRÁFICO/UI' ?
            <div className="flex flex-row mdd:flex-col lg:flex-row">
              <h2 className="text-[16px] lg:text-[20px] text-white">
                GRÁFICO
              </h2>
              <h2 className="text-[16px] lg:text-[20px] text-white">
                /UI
              </h2>
            </div>
            :
            <h2 className="text-[16px] lg:text-[20px] text-white">
              {portifolioObject.type}
            </h2>
          }
      </div>

      <div className="flex items-start justify-center cursor-pointer my-6 md:my-0 md:mx-12 transition-transform duration-300 hover:scale-105">
        <Link href={`/${portifolioObject.route}`}>
          <Image
            src={portifolioObject.image}
            width={391}
            height={256}
            alt={portifolioObject.title}
            title={portifolioObject.title}
            priority
            className="rounded-lg w-full max-w-xs md:max-w-md"
          />
        </Link>
      </div>

      <div className="flex flex-col space-y-4 mdd:max-w-lg justify-center md:mt-4">
        <h3 className="text-[20px] font-semibold uppercase">
          {portifolioObject.title}
        </h3>
        <p className="text-[14px] text-white">
          {portifolioObject.text}
        </p>
        <a href={`/${portifolioObject.route}`} className="flex items-center text-sm font-semibold text-white underline hover:text-gray-400 justify-end">
          Saiba mais
          <Image
            src={`images/arrow_outward-2.svg`}
            width={24}
            height={24}
            alt="Seta para cima"
            title="Seta para cima"
            priority
            className="text-lg font-bold text-white ml-2"
          />
        </a>
      </div>
    </div>
  )
}