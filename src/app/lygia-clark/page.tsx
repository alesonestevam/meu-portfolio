"use client";

import WorksTitleComponent from "@/components/portifolio/WorksTitle";
import { FooterButtons } from "@/components/ui/FooterButtons";
import { FooterScrollTopTopButton } from "@/components/ui/FooterScrollToTopButton";
import Image from "next/image";

export default function LygiaCarkPage() {
  return (
    <div className="px-10 lg:px-20 mt-[40px]">
      <WorksTitleComponent title="Lygia Clark: Uma Experiência Viva" />
      <div className="flex justify-center mt-[91px] mb-[88px]">
        <Image
            src={'images/portifolio/lygia-clark/lygia-1.svg'}
            width={997}
            height={567}
            alt={"lygia-1"}
            title={"lygia-1"}
          />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
        <div className="flex flex-col col-span-2">
          <div className="w-full overflow-hidden mdd:flex mdd:justify-center">
            <Image
            src={'images/portifolio/lygia-clark/lygia-2.svg'}
            width={747}
            height={425}
            alt={"lygia-2"}
            title={"lygia-2"}
          />
          </div>
          <div className="mt-4 text-center lg:text-start xxl:text-center">
            <p>Além de peças gráficas para as redes sociais do TCU, foi criado também um padrão para <b className="font-bold text-lime-200">sinalização.</b></p>
            <p>Entrada, saída e descritivos durante a exposição foram dispostos a modo que o público consiga se</p>
            <p>locomover com facilidade e sem se desprender do universo proposto</p>
          </div>
        </div>
        <div className="flex flex-col col-span-1 mdd:ml-[-20px] xxl:ml-[-140px]">
          <div className="mb-4 text-center lg:text-start">
            <p>A exposição foi feita em parceria entre o Centro Cultural</p>
            <p>TCU e Instituto de Ensino Superior de Brasília (IESB). A</p>
            <p>ideia da identidade visual proposta leva em consideração</p>
            <p>3 camadas que estão presentes nas obras da artista: </p>
            <p><b className="font-bold text-lime-200">geometria, elegância e quebra de expectativa.</b></p>
            <br/>
            <p>A inspiração nas formas da série &quot;Bichos&quot; foi de grande</p>
            <p>relevância aqui. Pensamento simples mas que se</p>
            <p>modifique a cada visão ou demanda.</p>
          </div>
          <div className="w-full overflow-hidden sm:flex sm:justify-center xl:justify-start">
            <Image
              src={'images/portifolio/lygia-clark/lygia-3.svg'}
              width={257}
              height={412}
              alt={"lygia-3"}
              title={"lygia-3"}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[24px]">
        <Image
            src={'images/portifolio/lygia-clark/lygia-4.svg'}
            width={1280}
            height={720}
            alt={"lygia-4"}
            title={"lygia-4"}
          />
      </div>
      <div className="flex flex-row items-center justify-center mt-[-1px]">
        <div className="flex items-center justify-center bg-lime-200 w-[1280px]">
          <div className="p-8">
            <Image
              src={'images/portifolio/lygia-clark/lygia-5.svg'}
              width={333}
              height={500}
              alt={"lygia-5"}
              title={"lygia-5"}
            />
          </div>
          <div className="p-8">
            <Image
              src={'images/portifolio/lygia-clark/lygia-6.svg'}
              width={375}
              height={250}
              alt={"lygia-6"}
              title={"lygia-6"}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[-1px]">
        <div className="flex items-center justify-center bg-lime-200 w-[1280px]">
          <Image
            src={'images/portifolio/lygia-clark/lygia-7.svg'}
            width={711}
            height={500}
            alt={"lygia-7"}
            title={"lygia-7"}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center w-[1280px]">
          <Image
            src={'images/portifolio/lygia-clark/lygia-8.svg'}
            width={1280}
            height={758}
            alt={"lygia-8"}
            title={"lygia-8"}
          />
        </div>
      </div>
      <FooterScrollTopTopButton />
      <FooterButtons/>
    </div>
  )
}