"use client"

import WorksTitleComponent from "@/components/portifolio/WorksTitle"
import { FooterButtons } from "@/components/ui/FooterButtons";
import { FooterScrollTopTopButton } from "@/components/ui/FooterScrollToTopButton";
import Image from "next/image";

export default function MemoUnbPage() {
  return (
    <div className="px-10 lg:px-20 mt-[40px] mb-[40px]">
      <WorksTitleComponent title="MemoUnB" />
      <div className="flex justify-center mt-[38px] mb-[67px]">
        <Image
          src={'images/portifolio/memo-unb/memounb-1.svg'}
          width={1125}
          height={387}
          alt={"memounb-1"}
          title={"memounb-1"}
        />
      </div>
      <div className="mb-[24px] flex items-center justify-center">
        <div className="w-[1280px] bg-lime-200 p-8 text-center text-gray-950">
          <p>A criação da identidade visual do MemoUnB é uma homenagem ao legado inconfundível de Oscar Niemeyer, </p>
          <p>celebrando suas formas curvas e elegantes, que se destacam nas pinturas do edifício SG 10 e nas obras icônicas que </p>
          <p>marcam a história arquitetônica brasileira. Além de se inspirar na estética de Niemeyer, o projeto também dialoga com </p>
          <p>a abordagem ousada de João Filgueiras Lima (Lelé), responsável pela experimentação construtiva no uso de módulos</p>
          <p>pré-fabricados de concreto. Essa técnica aplicada ao edifício SG 10 e outros prédios da UnB representa a capacidade da</p>
          <p>universidade de combinar tradição com inovação em suas soluções arquitetônicas. </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-[24px] mb-[24px] ml-[184px] mr-[184px]">
        <div className="flex items-center justify-center col-span-2">
          <div>
            <p>
              A marca captura a essência do espaço de memória, integrando-se à identidade visual da UnB por meio de suas cores e tipografia, enquanto reflete a diversidade das áreas de conhecimento da instituição. O sistema é flexível, permitindo adaptações que abrangem ciências humanas, sociais, exatas, biológicas e artes.
            </p>
            <br />
            <p>
              Dessa forma, a identidade visual do MemoUnB celebra o patrimônio arquitetônico e cultural, fortalecendo o vínculo da universidade com o desenvolvimento multidisciplinar do conhecimento e da cultura.
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <Image
            src={'images/portifolio/memo-unb/memounb-2.svg'}
            width={364}
            height={419}
            alt={"memounb-2"}
            title={"memounb-2"}
          />
        </div>
      </div>
      <div className="text-center mb-[24px]">
        <p className="text-lime-200 text-[38px] font-bold">Grid e Variação mínima</p>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[1280px] bg-lime-200 p-8 flex items-center justify-center">
          <Image
            src={'images/portifolio/memo-unb/memounb-3.svg'}
            width={960}
            height={540}
            alt={"memounb-3"}
            title={"memounb-3"}
          />
        </div>
      </div>
      <div className="flex justify-center mt-[-2px]">
        <Image
          src={'images/portifolio/memo-unb/memounb-4.svg'}
          width={985}
          height={810}
          alt={"memounb-4"}
          title={"memounb-4"}
        />
      </div>
      <div className="flex items-center justify-center mt-[-2px]">
        <div className="w-[1280px] bg-lime-200 p-8 flex items-center justify-center">
          <Image
            src={'images/portifolio/memo-unb/memounb-5.svg'}
            width={1057}
            height={690}
            alt={"memounb-5"}
            title={"memounb-5"}
          />
        </div>
      </div>
      <div className="flex justify-center mt-[-2px]">
        <Image
          src={'images/portifolio/memo-unb/memounb-6.svg'}
          width={1280}
          height={708}
          alt={"memounb-6"}
          title={"memounb-6"}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-[24px] mb-[24px] p-12">
        <div className="flex items-center justify-center col-span-1">
          <div className="p-4 ml-[-20px]">
            <p>
              No caso da identidade visual do MemoUnB, os grafismos serão inspirados
              nas formas arquitetônicas do <b className="text-lime-200">edifício SG 10</b> e nas curvas de Niemeyer, criando padrões
              dinâmicos que dialogam com o conceito do espaço de memória. Esses elementos
              serão aplicados de <b className="text-lime-200">forma flexível</b>, tanto em materiais impressos quanto digitais,
              mantendo a coesão visual e refletindo a diversidade da UnB. O uso cuidadoso de
              padrões e grafismos garantirá que a marca seja visualmente <b className="text-lime-200">impactante e
              consistente</b> em todas as suas aplicações.
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <Image
            src={'images/portifolio/memo-unb/memounb-7.svg'}
            width={576}
            height={432}
            alt={"memounb-7"}
            title={"memounb-7"}
          />
        </div>
      </div>
      <FooterScrollTopTopButton />
      <FooterButtons />
    </div>
  )
}