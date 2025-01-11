"use client"

import WorksTitleComponent from "@/components/portifolio/WorksTitle";
import { FooterButtons } from "@/components/ui/FooterButtons";
import { FooterScrollTopTopButton } from "@/components/ui/FooterScrollToTopButton";
import Image from "next/image";

export default function CookTimePage() {
  return (
    <div className="px-10 lg:px-20 mt-[40px]">
      <WorksTitleComponent title="CookTime" isRed={true}/>
      <div className="flex items-center flex-col mt-[24px]">
        <Image
          src={'images/portifolio/cooktime/cooktime-1.svg'}
          width={1280}
          height={859}
          alt={"cooktime-1"}
          title={"cooktime-1"}
        />
      </div>
      <div className="mb-[24px] flex items-center justify-center">
        <div className="w-[1280px] bg-guava-500 p-8 text-center">
          <p>Cooktime é um trabalho ainda em desenvolvimento, se trtatndo de um aplicativo temporizador de cozinha. O modelo</p>
          <p>escolhido para orientar todo este projeto foi o <b>Design Thinking</b>, um processo contínuo de compreender o presente e </p>
          <p>imaginar o futuro por meio de observação, reflexão e criação, permitindo ajustes a qualquer momento.</p>
          <p>A ideia é proporcionar <b>tranquilidade</b> ao usuário no processo de cozinhar. Preparar uma comida para muitos não é uma</p>
          <p>tarefa fácil e prazerosa. Com o auxílio desse aplicativo, o usuário terá mais conforto ao cozinhar, podendo ter controle </p>
          <p>do tempo de suas receitas no fogão, forno e geladeira.</p>
        </div>
      </div>
      <div className="text-center mb-[24px]">
        <p className="text-guava-500 text-[38px] font-bold">PESQUISA QUANTITATIVA</p>
      </div>
      <div className="flex items-center flex-col mt-[24px] mb-[14px]">
        <Image
          src={'images/portifolio/cooktime/cooktime-2.svg'}
          width={1280}
          height={166}
          alt={"cooktime-2"}
          title={"cooktime-2"}
        />
      </div>
      <div className="mb-[24px] flex items-center justify-center">
        <div className="w-[1280px] bg-guava-500 p-4 text-center">
          <p>Com base na pesquisa qualitativa, identificamos que alguns usuários relataram falta de tempo e expressaram </p>
          <p>interesse em um aplicativo que oferecesse mais do que apenas temporização. Com base nesses resultados,</p>
          <p>desenvolvemos algumas ideias:</p>
          <div className="text-center bg-guava-900 p-4 mt-[8px]">
            <p className="font-bold text-[14px]">1. Primeira tela será a de temporização para que o usuário não perca tempo com telas desnecessárias.</p>
            <p className="font-bold text-[14px]">2. Incluiremos previsão do tempo de cozimento dos alimentos, medidas e alertas.</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-[24px] mb-[24px]">
        <div className="hidden lg:flex items-center justify-center">
          <div>
            <p>
              Com base no método <b className="text-guava-500">&quot;Vantagens e Deltas&quot;</b>, foram analisados o
            </p>
            <p>
              cronômetro de um <b className="text-guava-500">smartphone Android</b> e o aplicativo <b className="text-guava-500">KitchenTimer</b>,
            </p>
            <p>
              disponível na Play Store da Google, ambos similares à proposta deste
            </p>
            <p>projeto.</p>
          </div>
        </div>
        <div className="lg:hidden flex items-center justify-center">
          <div>
            <p>
              Com base no método <b className="text-guava-500">&quot;Vantagens e Deltas&quot;</b>, foram analisados o
              cronômetro de um <b className="text-guava-500">smartphone Android</b> e o aplicativo <b className="text-guava-500">KitchenTimer</b>,
              disponível na Play Store da Google, ambos similares à proposta deste
            projeto.
            </p>
          </div>
        </div>
        <div>
          <Image
            src={'images/portifolio/cooktime/cooktime-3.svg'}
            width={582}
            height={291}
            alt={"cooktime-3"}
            title={"cooktime-3"}
          />
        </div>
      </div>
      <div className="text-center mt-[22px]">
        <p>Para identificar quais tarefas deveriam ser priorizadas, utilizamos a <b className="text-guava-500">Matriz 2x2</b>. Com a ajuda de um</p>
        <p>desenvolvedor de aplicativos, determinamos as tarefas mais demoradas para a entrega do Produto </p>
        <p>Mínimo Viável (MVP) e, posteriormente, atualizamos as tarefas com novas funcionalidades.</p>
      </div>
      <div className="flex items-center flex-col mt-[24px] mb-[14px]">
        <Image
          src={'images/portifolio/cooktime/cooktime-4.svg'}
          width={1280}
          height={829}
          alt={"cooktime-4"}
          title={"cooktime-4"}
        />
      </div>
      <div className="text-center mb-[24px]">
        <p className="text-guava-500 text-[38px] font-bold">MATERIALIZAÇÃO</p>
      </div>
      <div className="flex items-center justify-center mt-[24px] mb-[14px]">
        <Image
          src={'images/portifolio/cooktime/cooktime-5.svg'}
          width={976}
          height={1125}
          alt={"cooktime-5"}
          title={"cooktime-5"}
        />
      </div>
      <div className="mb-[24px] flex items-center justify-center">
        <div className="w-[1280px] bg-guava-500 p-8 text-center">
          <p>Por se tratar de um trabalho de pesquisa e desenvolvimento <b>em grupo</b>, o aplicativo ainda se encontra em fase de </p>
          <p>experimentação, por essa razão o prototipo final para visualização está <b>em progresso</b>.</p>
        </div>
      </div>
      <FooterScrollTopTopButton />
      <FooterButtons />
    </div>
  )
}