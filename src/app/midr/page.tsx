"use client";

import WorksTitleComponent from "@/components/portifolio/WorksTitle";
import { FooterButtons } from "@/components/ui/FooterButtons";
import { FooterScrollTopTopButton } from "@/components/ui/FooterScrollToTopButton";
import Image from "next/image";

export default function MIDRPage() {
  return (
    <div className="px-10 lg:px-20 mt-[40px]">
      <WorksTitleComponent title="Ministério da Integração e do" subtitle={"Desenvolvimento Regional"} />
      <div className="text-center mt-[56px] mb-[38px]">
        <p>O <b className="text-lime-200">Ministério da Integração e do Desenvolvimento Regional (MIDR)</b> tem como objetivo principal criar, coordenar e </p>
        <p>colocar em prática políticas públicas que ajudem no desenvolvimento das diferentes regiões do Brasil. A ideia é </p>
        <p>trabalhar para reduzir as desigualdades econômicas, sociais e estruturais que ainda existem entre as regiões, </p>
        <p>promovendo uma integração maior entre elas.</p>
      </div>
      <div className="relative mb-[90px] mdd:mb-[140px] flex items-center justify-center">
        <Image
          src={"images/portifolio/midr/midr-1.svg"}
          className="flex md:hidden"
          width={342}
          height={350}
          alt={"midr-1"}
          title={"midr-1"}
        />
        <div className="w-[1280px] h-full lg:h-[200px] bg-lime-200 rounded-[16px] hidden md:flex">
          <div className="relative w-1/3 flex justify-center">
            <Image
              src={"images/portifolio/midr/midr-1.svg"}
              className="absolute top-[-45px] md:top-[-25px] lg:top-[-80px]"
              width={342}
              height={350}
              alt={"midr-1"}
              title={"midr-1"}
            />
          </div>
          <div className="w-2/3 hidden lg:flex flex-col justify-center">
            <p className="text-gray-950 text-[14px]">As redes sociais principais do MIDR são <b>Instagram</b> (sendo Feed e Story) e <b>X</b> (antigo Twitter), respeitando os formatos</p>
            <p className="text-gray-950 text-[14px]">para cada postagem e rede social. Esses posts servem para informar, desmentir ou até mesmo alertar a população em</p>
            <p className="text-gray-950 text-[14px]">geral sobre projetos e pensamentos governamentais, sendo assim, a base para a identidade visual das postagens</p>
            <p className="text-gray-950 text-[14px]">devem atender as regras visuais gerais do governo federal em gestão.</p>
            <br />
            <p className="text-gray-950 text-[14px]">A identidade visual do governo federal sob a gestão do presidente Luiz Inácio Lula da Silva (2023-2026) foi pensada</p>
            <p className="text-gray-950 text-[14px]">para refletir valores de <b>inclusão, diversidade e renovação democrática</b>, alinhando-se com a mensagem política</p>
            <p className="text-gray-950 text-[14px]">central de união e compromisso com o povo brasileiro.</p>
          </div>
          <div className="w-2/3 flex lg:hidden flex-col justify-center">
            <p className="text-gray-950 text-[12px]">As redes sociais principais do MIDR são <b>Instagram</b> (sendo Feed e Story) e <b>X</b> (antigo Twitter), respeitando os formatos para cada postagem e rede social. Esses posts servem para informar, desmentir ou até mesmo alertar a população em geral sobre projetos e pensamentos governamentais, sendo assim, a base para a identidade visual das postagens devem atender as regras visuais gerais do governo federal em gestão.</p>
            <br />
            <p className="text-gray-950 text-[12px]">A identidade visual do governo federal sob a gestão do presidente Luiz Inácio Lula da Silva (2023-2026) foi pensada para refletir valores de <b>inclusão, diversidade e renovação democrática</b>, alinhando-se com a mensagem política central de união e compromisso com o povo brasileiro.</p>
          </div>
        </div>
      </div>
      <div className="sm:hidden w-full h-full bg-lime-200 rounded-[16px] p-4">
        <div className="flex sm:hidden flex-col justify-center">
            <p className="text-gray-950 text-[12px]">As redes sociais principais do MIDR são <b>Instagram</b> (sendo Feed e Story) e <b>X</b> (antigo Twitter), respeitando os formatos para cada postagem e rede social. Esses posts servem para informar, desmentir ou até mesmo alertar a população em geral sobre projetos e pensamentos governamentais, sendo assim, a base para a identidade visual das postagens devem atender as regras visuais gerais do governo federal em gestão.</p>
            <br />
            <p className="text-gray-950 text-[12px]">A identidade visual do governo federal sob a gestão do presidente Luiz Inácio Lula da Silva (2023-2026) foi pensada para refletir valores de <b>inclusão, diversidade e renovação democrática</b>, alinhando-se com a mensagem política central de união e compromisso com o povo brasileiro.</p>
          </div>
      </div>
      <div className="flex justify-center mb-[38px]">
        <Image
          src={"images/portifolio/midr/midr-2.svg"}
          width={1062}
          height={1000}
          alt={"midr-2"}
          title={"midr-2"}
          />
      </div>
      <div className="text-center mb-[76px]">
        <p>A palavra <b>&quot;Brasil&quot;</b> é formada por letras coloridas, cada uma com uma matiz diferente, que simbolizam a diversidade</p>
        <p>cultural, social e ambiental do país, e a escolha das cores e elementos gráficos busca valorizar a pluralidade do povo </p>
        <p>brasileiro, incluindo diferentes regiões, classes sociais e grupos minoritários.</p>
        <br />
        <p>Pensando nisso, desenvolvi um <b className="text-lime-200">alfabeto</b> governamental que ajudasse na identidade do ministério para destaque em </p>
        <p>palavras-chave e que chamasse a atenção do público ao mesmo tempo unisse ainda mais o governo ao ministério.</p>
      </div>
      <div className="flex justify-center mb-[58px]">
        <Image
          src={"images/portifolio/midr/midr-3.svg"}
          width={1075}
          height={464}
          alt={"midr-3"}
          title={"midr-3"}
          />
      </div>
      <div className="flex justify-center mb-[38px]">
        <Image
          src={"images/portifolio/midr/midr-4.svg"}
          width={1075}
          height={464}
          alt={"midr-4"}
          title={"midr-4"}
          />
      </div>
      <div className="text-center mb-[38px]">
        <p>Outro destaque da conta é a série <b className="text-lime-200">&quot;Descomplica aí&quot;</b> que da mais liberdade de criação em suas peças </p>
        <p>ustamente para chamar a atenção do público e desvendar alguns serviços específicos da região norte do Brasil </p>
        <p>e que afeta todo o país, como a produção e exportação do cacau e açaí, a pesca como um meio de</p>
        <p>rendabilidade, entre outros</p>
      </div>
      <div className="flex justify-center mb-[38px]">
        <Image
          src={"images/portifolio/midr/midr-5.svg"}
          width={648}
          height={745}
          alt={"midr-5"}
          title={"midr-5"}
          />
      </div>
      <FooterScrollTopTopButton />
      <FooterButtons/>
    </div>
  )
}