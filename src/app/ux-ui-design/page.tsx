"use client";

import CardPortifolioComponent from "@/components/portifolio/CardPortifolio";
import { FooterButtons } from "@/components/ui/FooterButtons";

export default function UxUiDesignPage() {
  const UxUiPortifolio = [
    {
      id: '//01',
      type: 'GRÁFICO/UI',
      title: 'RIO SÃO FRANCISCO:  VELHO CHICO',
      text: '"Velho Chico: Nosso Sonho Realizado" representa a maior obra de infraestrutura hídrica do Brasil. A identidade visual, assim como a página online criada para essa iniciativa governamental, refletem a magnitude dessa iniciativa, buscando transmitir a vitalidade e a fluidez.',
      image: '/images/portifolio/VELHO-CHICO-2-1.svg'
    },
    {
      id: '//02',
      type: 'UI',
      title: 'PROJETO EBAC: PIX NA SUMUP',
      text: 'Se trata de um projeto fictício para a conclusão do curso de Design UI pela EBAC (Escola Britânica de Artes Criativas). O desafio aqui foi criar um método intuitivo para que os clientes mais antigos do banco pudessem aprender e usar o método de pagamento PIX.',
      image: '/images/portifolio/projeto-ebac.svg'
    },
    {
      id: '//03',
      type: 'UI',
      title: 'APLICATIVO COOKTIME',
      text: 'Aplicativo temporizador de cozinha. A ideia é proporcionar tranquilidade através do fluxo de fácil entendimento para o usuário, com isso trazendo mais conforto no controle de tempo em receitas seja no fogão, forno e/ou geladeira.',
      image: '/images/portifolio/cooktime.svg'
    },
    {
      id: '//04',
      type: 'UX/UI',
      title: 'SITE DEFENSORIA PÚBLICA',
      text: 'Se trata de um trabalho acadêmico para o redesign da interface geral da Defensoria Pública do DF. O desenvolvimento ocorrer a partir de uma série de entrevistas e questionários ao público atendido pelo cliente, resultando em um layout fluido e elegante, proporcionando uma experiência agradável ao público.',
      image: '/images/portifolio/defensoria-publica.svg'
    }
  ]

  return (
    <div className="px-10 lg:px-20 mt-[40px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <p className="text-[24px] text-justify">Especializado em <b className="text-lime-200">Design de Interfaces</b> através da plataforma Figma, foco em criar experiências ágeis e elegantes que guiam o usuário de forma intuitiva. Trabalho com atenção aos detalhes, desenvolvendo style guides completos que incluem grids, paletas de cores e iconografia, garantindo consistência e usabilidade em cada projeto.</p>
          <hr className="mt-4"></hr>
        </div>
      </div>
      <div className="mt-12 mb-12">
        {
          UxUiPortifolio.map((portifolio, index) => {
            return (
              <div key={portifolio.id}>
                <CardPortifolioComponent portifolioObject={portifolio} />
                {
                  index < UxUiPortifolio.length -1 &&
                  <hr></hr>
                }
              </div>
            )
          })
        }
      </div>
      <FooterButtons />
    </div>
  )
}