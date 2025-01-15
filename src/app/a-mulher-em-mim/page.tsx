"use client";

import WorksTitleComponent from "@/components/portifolio/WorksTitle";
import { FooterButtons } from "@/components/ui/FooterButtons";
import { FooterScrollTopTopButton } from "@/components/ui/FooterScrollToTopButton";
import Image from "next/image";

export default function MIDRPage() {
  return (
    <div className="px-10 lg:px-20 mt-[40px]">
      <WorksTitleComponent title="Livro: Britney Spears -" subtitle={"The Woman In Me"} />
      <div className="flex justify-center mt-[24px] mb-[46px]">
        <Image
          src={"images/portifolio/britney/britney-1.svg"}
          width={468}
          height={263}
          alt={"britney-1"}
          title={"britney-1"}
          />
      </div>
      <div className="text-center mb-[38px]">
        <p>Britney spears divulgou a arte de seu livro de memórias, intitulado &quot;The Woman In Me&quot; (a mulher em mim, em </p>
        <p>tradução), em seu instagram como modo de divulgação. decidi colocar meu olhar técnico sobre a arte e repensa-la em </p>
        <p>como eu a faria. o presente trabalho não tem como intuito criticar a arte original, apenas reimagina-la com outro</p>
        <p>contexto.</p>
      </div>
      <div className="flex flex-col justify-center mt-[24px] mb-[46px]">
        <div className="flex justify-center">
          <Image
            src={"images/portifolio/britney/britney-2.svg"}
            width={972}
            height={717}
            alt={"britney-2"}
            title={"britney-2"}
            />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-between w-[579px]">
            <h1 className="text-[18px] font-bold">Original</h1>
            <h1 className="text-[18px] font-bold">Repensada</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-[24px] mb-[46px]">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            <h1 className="text-[18px] font-bold">Versão Brasileira</h1>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={"images/portifolio/britney/britney-3.svg"}
            width={714}
            height={920}
            alt={"britney-3"}
            title={"britney-3"}
            />
        </div>
      </div>
      <div className="text-center mb-[38px]">
        <p>Pensando em possíveis promoções ao redor do livro, <b className="text-lime-200">a identidade visual sugerida se desdobra em alguns produtos</b></p>
        <p>ou brindes, pensando na exclusividade do consumidor em primeiro grau, ou seja, aquele que comprará o livro em</p>
        <p>pré-venda ou lançamento, ou mesmo para fã-clubes e afins.</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-[24px] mb-[46px]">
        <Image
          src={"images/portifolio/britney/britney-4.svg"}
          width={960}
          height={1680}
          alt={"britney-4"}
          title={"britney-4"}
        />
          <Image
            src={"images/portifolio/britney/britney-5.svg"}
            width={960}
            height={904}
            alt={"britney-5"}
            title={"britney-5"}
            style={{marginTop: -10}}
          />
      </div>
      <FooterScrollTopTopButton />
      <FooterButtons />
    </div>
  )
}