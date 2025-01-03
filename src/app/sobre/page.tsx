"use client";

import { FooterButtons } from "@/components/ui/FooterButtons";
import Image from "next/image";

export default function Home() {

  return (
    <div className="px-10 lg:px-36 mt-4 mb-4 grid grid-cols-1 lg:grid-cols-3 gap-6 mt-[40px]">
      <div className="flex flex-col lg:col-span-2 lg:pr-[140px]">
        <p className="text-[16px] md:text-[38px] font-bold mb-4 text-lime-200 text-center md:text-start">
          OLÁ! SOU O ALESON ESTEVAM, <br />
          DESIGNER GRÁFICO E DE INTERFACES <br />
          EM BRASÍLIA.
        </p>
        <br />
        <p className="text-[12px] md:text-[20px] text-center md:text-start">
          Graduado em Comunicação Social - Publicidade & Propaganda pela <b>Universidade de Brasília (UnB)</b>, e em Design Gráfico pelo <b>Instituto de Educação Superior de Brasília (IESB)</b>, tenho como foco profissional a área visual, criativa e da comunicação.
        </p>
        <br />
        <p className="text-[12px] md:text-[20px] text-center md:text-start">
          Atuo na área desde 2015. Já trabalhei com clientes como XP Investimentos, Ministério da Saúde e Correio Braziliense.
        </p>
        <br />
        <p className="text-[12px] md:text-[20px] text-center md:text-start">
          Acredito que a potência visual/estética da comunicação dita os tempos atuais. Trabalhar em uma comunicação participativa, com o foco no cliente e no público-alvo através de analise e planejamento é essencial para um projeto completo e satisfatório.
        </p>
      </div>
      <div className="hidden md:flex items-center md:justify-center">
        <Image
          src={"images/foto-de-sobre-1.svg"}
          width={485}
          height={361}
          alt="Foto perfil"
          title="Foto perfil"
          priority
        />
      </div>
      <div className="flex justify-center md:hidden items-center md:justify-center ">
        <Image
          src={"images/foto-de-sobre-1.svg"}
          width={181}
          height={361}
          alt="Foto perfil"
          title="Foto perfil"
          priority
        />
      </div>
      <FooterButtons />
    </div>
  );
}

