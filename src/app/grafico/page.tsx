"use client";

import CardPortifolioComponent from "@/components/portifolio/CardPortifolio";
import { FooterButtons } from "@/components/ui/FooterButtons";

export default function GraficoPage() {
  const graficoPortifolio = [
    {
      id: '//01',
      type: 'GRÁFICO/UI',
      title: 'RIO SÃO FRANCISCO:  VELHO CHICO',
      text: '"Velho Chico: Nosso Sonho Realizado" representa a maior obra de infraestrutura hídrica do Brasil. A identidade visual, assim como a página online criada para essa iniciativa governamental, refletem a magnitude dessa iniciativa, buscando transmitir a vitalidade e a fluidez.',
      image: 'images/portifolio/VELHO-CHICO-2-1.svg',
      route: "velho-chico"
    },
    {
      id: '//02',
      type: 'GRÁFICO',
      title: 'EXPOSIÇÃO LIGYA CLARK: UMA EXPERIÊNCIA VIVA',
      text: 'A identidade visual da exposição de Lygia Clark no Centro Cultural TCU combina minimalismo e impacto visual, traduzindo a essência de sua obra. A paleta de cores com a tipografia principal, confere elegância, personalidade, e quebra de expectativa, enquanto elementos geométricos estruturam a composição, remetendo à linguagem artística de Lygia e ao diálogo entre forma e significado presente em sua trajetória.',
      image: 'images/portifolio/lygia-clark.svg',
      route: "lygia-clark"
    },
    {
      id: '//03',
      type: 'GRÁFICO',
      title: 'COMUNICAÇÃO DIGITAL MIDR',
      text: 'Design das redes sociais do Ministério da Integração e Desenvolvimento Regional, desenvolvendo conteúdos para Instagram, Twitter e Facebook. O trabalho em questão segue a identidade oficial do governo atuante, garantindo coesão visual e institucionalidade. Essa é a comunicação direta com a população para informar, engajar e aproximar a política das pessoas, reforçando a transparência e a acessibilidade das políticas públicas.',
      image: 'images/portifolio/midr-comunicacao.svg',
      route: "midr"
    },
    {
      id: '//04',
      type: 'GRÁFICO',
      title: 'LIVRO: A MULHER EM MIM',
      text: 'A cantora norte americana Britney Spears lançou seu livro de memórias intitulado "The Woman In Me”. O presente projeto repensa o visual do livro em uma nova roupagem para as vendas em território brasileiro.',
      image: 'images/portifolio/livro-mulher-em-min.svg',
      route: "a-mulher-em-mim"
    },
    {
      id: '//05',
      type: 'GRÁFICO',
      title: 'GRUPO SOZO',
      text: 'Criação de uma marca mãe chama "Sozo” para a empresa VLG Investimentos. A identidade foi pensada para transmitir transparência e elegância, se tratando de uma empresa de altos investimentos. Um guia de comportamento visual da marca tanto internamente como para o público externo.',
      image: 'images/portifolio/grupo-sozo.svg',
      route: "sozo"
    },
    {
      id: '//06',
      type: 'GRÁFICO',
      title: 'MemoUnB',
      text: 'A criação da identidade visual do MemoUnB é uma homenagem ao legado inconfundível de Oscar Niemeyer, celebrando suas formas curvas e elegantes, que se destacam nas pinturas do edifício SG 10 e nas obras icônicas que marcam a história arquitetônica brasileira.',
      image: 'images/portifolio/memo-unb.svg',
      route: "memo-unb"
    }
  ]

  return (
    <div className="px-10 lg:px-20 mt-[40px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <p className="text-[24px] text-justify">Meu trabalho em <b className="text-lime-200">Design Gráfico</b> é focado em transmitir informações de forma clara, respeitando a linha comunicacional de cada cliente e focando a  atenção pela harmonia na aplicação, sendo que cada projeto é pensado para atender às necessidades específicas de cada cliente e seu público-alvo. Ferramentas como Photoshop, Illustrator e InDesign auxiliam na criação técnica e estética.</p>
          <hr className="mt-4"></hr>
        </div>
      </div>
      <div className="mt-12 mb-12">
        {
          graficoPortifolio.map((portifolio, index) => {
            return (
              <div key={portifolio.id}>
                <CardPortifolioComponent portifolioObject={portifolio} />
                {
                  index < graficoPortifolio.length -1 &&
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