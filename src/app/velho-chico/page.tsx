"use client"

import WorksTitleComponent from "@/components/portifolio/WorksTitle"
import { FooterButtons } from "@/components/ui/FooterButtons";
import { FooterScrollTopTopButton } from "@/components/ui/FooterScrollToTopButton";
import Image from "next/image";

export default function VelhoChicoPage() {
  return (
    <div className="px-10 lg:px-20 mt-[40px] mb-[40px]">
      <WorksTitleComponent title="Rio São Francisco: Velho Chico" />
      <div className="flex justify-center mt-[91px] mb-[67px]">
        <Image
            src={'images/portifolio/velho-chico/velho-chico-sonho-realizado.svg'}
            width={838}
            height={405}
            alt={"velho-chico-sonho-realizado"}
            title={"velho-chico-sonho-realizado"}
          />
      </div>
      <div className="text-center mb-[32px]">
        <p> O projeto <b className="text-lime-200">&quot;Velho Chico: Nosso Sonho Realizado&quot;</b> representa a maior obra de infraestrutura hídrica do Brasil, com o </p>
        <p>objetivo de revitalizar as bacias hidrográficas e garantir o fornecimento sustentável de água em qualidade e</p>
        <p>quantidade para a população. A identidade visual reflete a magnitude dessa iniciativa, buscando transmitir a vitalidade</p>
        <p>e a fluidez das águas que percorrem o Rio São Francisco.</p>
      </div>
      <div className="flex items-center flex-col">
        <Image
          src={'images/portifolio/velho-chico/velho-chico-logos-1.svg'}
          width={1248}
          height={702}
          alt={"velho-chico-logos-1"}
          title={"velho-chico-logos-1"}
        />
        <Image
          src={'images/portifolio/velho-chico/velho-chico-fonts.svg'}
          width={1248}
          height={702}
          alt={"velho-chico-fonts"}
          title={"velho-chico-fonts"}
          style={{ marginTop: -1}}
        />
        <Image
          src={'images/portifolio/velho-chico/velho-chico-cores.svg'}
          width={1248}
          height={702}
          alt={"velho-chico-cores"}
          title={"velho-chico-cores"}
          style={{ marginTop: -1}}
        />
        <Image
          src={'images/portifolio/velho-chico/velho-chico-aplicacoes-1.svg'}
          width={1248}
          height={702}
          alt={"velho-chico-aplicacoes-1"}
          title={"velho-chico-aplicacoes-1"}
          style={{ marginTop: -1}}
        />
        <Image
          src={'images/portifolio/velho-chico/velho-chico-aplicacoes-2.svg'}
          width={1248}
          height={702}
          alt={"velho-chico-aplicacoes-2"}
          title={"velho-chico-aplicacoes-2"}
          style={{ marginTop: -1}}
        />
      </div>
      <div className="text-center mt-[32px] mb-[32px]">
        <p>Além da identidade visual completa foi desenvolvido o <b className="text-guava-500">site oficial</b> do projeto. O site serve como fonte confiável à </p>
        <p>população, uma vez que é administrado pelo próprio governo, atualizando com notícias e dados sobre o andamento do</p>
        <p>projeto. Todo o site é responsivo, respeitando as possíveis telas que o usuário possa acessar.</p>
        <p><b className="text-guava-500">Abaixo você pode visitar o site.</b></p>
      </div>
      <div className="flex items-center flex-col">
        <Image
          src={'images/portifolio/velho-chico/velho-chico-site.svg'}
          width={1248}
          height={702}
          alt={"velho-chico-site"}
          title={"velho-chico-site"}
        />
      </div>
      <div className="flex items-center justify-center w-full col-span-1 lg:col-span-3 space-x-5 mb-[24px] mt-[24px]">
        <button
          onClick={() => window.open('https://transposicaosaofrancisco.com.br/', '_blank')}
          className="h-[50px] w-[130px] px-3 py-1 bg-gray-950 text-lime-200 rounded hover:bg-lime-600 border border-lime-500 rounded-[12px]"
        >
          VISITAR SITE
        </button>
      </div>
      <FooterScrollTopTopButton />
      <FooterButtons />
    </div>
  )
}