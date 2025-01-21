"use client"

import WorksTitleComponent from "@/components/portifolio/WorksTitle";
import { FooterButtons } from "@/components/ui/FooterButtons";
import { FooterScrollTopTopButton } from "@/components/ui/FooterScrollToTopButton";
import Image from "next/image";

export default function DefensoriaPage() {
  return (
    <div className="px-10 lg:px-20 mt-[40px]">
      <WorksTitleComponent title="Defensoria pública do DF" isRed={true}/>
      <div className="flex items-center flex-col mt-[24px]">
        <Image
          src={'images/portifolio/defensoria/defensoria-1.svg'}
          width={1280}
          height={859}
          alt={"defensoria-1"}
          title={"defensoria-1"}
        />
      </div>
      <div className="mb-[24px] flex items-center justify-center">
        <div className="hidden md:block w-[1280px] bg-guava-500 p-8 text-center">
          <p>O projeto de <b>redesign do site da Defensoria Pública do Distrito Federal (DPDF)</b> foi um projeto proposto pelo Centro </p>
          <p>Universitário do Instituto de Educação Superior de Brasília (IESB) para os alunos de gradução em Design. O objetivo </p>
          <p>principal seria tornar os serviços jurídicos mais acessíveis e eficazes para o público alvo, que inclui <b>cidadãos de baixa</b> </p>
          <p><b>renda, com pouca familiaridade com tecnologia e, muitas vezes, analfabetos funcionais.</b></p>
        </div>
        <div className="block md:hidden w-[1280px] bg-guava-500 p-4 text-center">
          <p>O projeto de <b>redesign do site da Defensoria Pública do Distrito Federal (DPDF)</b> foi um projeto proposto pelo Centro 
          Universitário do Instituto de Educação Superior de Brasília (IESB) para os alunos de gradução em Design. O objetivo 
          principal seria tornar os serviços jurídicos mais acessíveis e eficazes para o público alvo, que inclui <b>cidadãos de baixa</b> 
          <b>renda, com pouca familiaridade com tecnologia e, muitas vezes, analfabetos funcionais.</b></p>
        </div>
      </div>
      <div className="text-center mb-[24px]">
        <p className="text-guava-500 text-[38px] font-bold">PROBLEMATIZAÇÃO & PESQUISAS:</p>
      </div>
      <div className="mb-[24px] flex items-center justify-center">
        <div className="hidden md:block w-[1280px] p-8 text-center">
          <p>A iniciativa surge da necessidade de <b>modernizar a plataforma digital</b>, solucionando problemas de usabilidade, </p>
          <p>navegação e acessibilidade identificados em pesquisas qualitativas e quantitativas realizadas com os usuários</p>
          <br/>
          <p>Em primeiro momento, foi elaborado um formulário geral para conhecer o <b>público principal</b> atendido pela Defensoria,</p>
          <p>a aplicação deste formulário aconteceu em formato online no período de 3 dias. Neste formulário, questões como nível</p>
          <p>de entendimento online e dispositivos preferidos de acesso foram abortados!</p>
        </div>
        <div className="block md:hidden w-[1280px] p-8 text-center">
          <p>A iniciativa surge da necessidade de <b>modernizar a plataforma digital</b>, solucionando problemas de usabilidade,
          navegação e acessibilidade identificados em pesquisas qualitativas e quantitativas realizadas com os usuários</p>
          <br/>
          <p>Em primeiro momento, foi elaborado um formulário geral para conhecer o <b>público principal</b> atendido pela Defensoria,
          a aplicação deste formulário aconteceu em formato online no período de 3 dias. Neste formulário, questões como nível
          de entendimento online e dispositivos preferidos de acesso foram abortados!</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full col-span-1 lg:col-span-3 space-x-5 mb-[24px] mt-[24px]">
        <button
          onClick={() => window.open('https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:4a1e4cfd-65c9-48e4-b4a7-16936bf1229a', '_blank')}
          className="h-[50px] w-[219px] px-3 py-1 bg-gray-950 text-lime-200 rounded hover:bg-lime-600 border border-lime-500 rounded-[12px]"
        >
          ACESSE O FORMULÁRIO
        </button>
      </div>
      <div className="mb-[24px] flex items-center justify-center">
        <div className="hidden md:block w-[1280px] p-8 text-center">
          <p>Após esse primeiro momento geral, foi elaborado um roteiro para <b>entrevistas individuais</b>. Essas entrevistas</p>
          <p>aconteceram de modo presencial, na unidade de Águas Claras - DF, e busca compreender as <b>experiências e desafios</b></p>
          <p>dos usuários ao acessar o site da DPDF. O roteiro inclui perfil do entrevistado, assim como suas experiências e </p>
          <p>necessidades com o site, e ao final sugestões de melhorias. Vale mencionar que todas as entrevistas foram </p>
          <p>autorizadas a divulgação pelos entrevistados!</p>
        </div>
        <div className="block md:hidden w-[1280px] p-2 text-center">
          <p>Após esse primeiro momento geral, foi elaborado um roteiro para <b>entrevistas individuais</b>. Essas entrevistas aconteceram de modo presencial, na unidade de Águas Claras - DF, e busca compreender as <b>experiências e desafios</b> dos usuários ao acessar o site da DPDF. O roteiro inclui perfil do entrevistado, assim como suas experiências e  necessidades com o site, e ao final sugestões de melhorias. Vale mencionar que todas as entrevistas foram autorizadas a divulgação pelos entrevistados!</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full col-span-1 lg:col-span-3 space-x-5 mb-[24px] mt-[24px]">
        <button
          onClick={() => window.open('https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:5c43981d-ccb1-46ae-ace6-fd524b4d6029', '_blank')}
          className="h-[50px] w-[230px] px-3 py-1 bg-gray-950 text-lime-200 rounded hover:bg-lime-600 border border-lime-500 rounded-[12px]"
        >
          ACESSE AS ENTREVISTAS
        </button>
      </div>
      <div className="mb-[24px] flex items-center justify-center">
        <div className="hidden md:block w-[1280px] p-8 text-center">
          <p>Partindo dessas pesquisas algumas personas foram criadas, para um melhor direcionamento do projeto. Essas </p>
          <p>personas se encontram na faixa de 25 até 55 anos, moradores de regiões administrativas de Brasília e como questões</p>
          <p>legais urgentes a serem resolvidas. Questões como gênero ou classe social nao foi consideradas tendo em vista que a</p>
          <p>defensoria pode atender a todas as questões judiciais e a todos os públicos que a procurem.</p>
          <p className="font-bold text-lime-200">O importante no final foi a rapidez e facilidade do fluxo trabalhado.</p>
        </div>
        <div className="block md:hidden w-[1280px] p-2 text-center">
          <p>Partindo dessas pesquisas algumas personas foram criadas, para um melhor direcionamento do projeto. Essas
          personas se encontram na faixa de 25 até 55 anos, moradores de regiões administrativas de Brasília e como questões
          legais urgentes a serem resolvidas. Questões como gênero ou classe social nao foi consideradas tendo em vista que a
          defensoria pode atender a todas as questões judiciais e a todos os públicos que a procurem.</p>
          <p className="font-bold text-lime-200">O importante no final foi a rapidez e facilidade do fluxo trabalhado.</p>
        </div>
      </div>
      <div className="mb-[24px] flex items-center justify-center">
        <div className="w-[1280px] bg-guava-500 p-8">
          <div className="text-center">
            <p className="text-white text-[38px] font-bold">Wireframe</p>
          </div>
          <div className="space-y-8 flex flex-col justify-center items-center p-0 md:p-8">
            <div className="lg:w-[934px] flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/3 md:mr-[38px]">
                <p className="text-white mb-4">
                  A primeira técnica usada para a visualização de fluxo foi o <b>Card Sorting</b>, uma técnica de pesquisa amplamente utilizada no design de interfaces e na arquitetura da informação para entender como os usuários agrupam e organizam informações. É uma ferramenta eficaz para estruturar a navegação de sites, aplicativos e sistemas, ajudando a criar uma hierarquia intuitiva para o conteúdo.
                </p>
              </div>
              <div className="md:w-2/3 flex justify-center">
                <Image
                  src={'images/portifolio/defensoria/defensoria-2.svg'}
                  width={630}
                  height={472}
                  alt={"defensoria-2"}
                  title={"defensoria-2"}
                />
              </div>
            </div>

            <div className="lg:w-[934px] flex flex-col items-center">
              <p className="text-white mb-4 text-center">
                Durante o processo de criação do site da Defensoria Pública do DF, o <b>wireframe</b> serviu como uma base inicial, mas sofreu alterações à medida que o layout foi sendo refinado. Essas mudanças ocorreram para alinhar o design às expectativas do público-alvo e melhorar a usabilidade, resultando em um protótipo mais funcional e visualmente adequado.
              </p>
                <Image
                  src={'images/portifolio/defensoria/defensoria-3.svg'}
                  width={630}
                  height={472}
                  alt={"defensoria-3"}
                  title={"defensoria-3"}
                />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mb-[24px]">
        <p className="text-guava-500 text-[38px] font-bold">DESIGN SYSTEM:</p>
      </div>
      <div className="mb-[24px] flex items-center justify-center">
        <div className="hidden md:block w-[1280px] p-8 text-center">
          <p>Clareza e Organização Visual é o objetivo principal de um site, como o da Defensoria Pública.  O grid de <b>4 colunas</b> com</p>
          <p>margens amplas proporciona uma estrutura bem organizada e permite que o conteúdo seja fácil de visualizar e </p>
          <p>interpretar. A <b>Lexend Deca</b> é uma fonte sans-serif projetada para melhorar a legibilidade e a fluência na leitura. A</p>
          <p><b>paleta de cores</b> utilizada teve como base o manual de identidade visual da própria defensoria, mas aqui ela ganha </p>
          <p>novas variações que ajudam a criar níveis de destaques, como CTAs e alertas/pop-ups, guiando o usuário</p>
          <p>pelas informações mais importantes.</p>
        </div>
        <div className="block md:hidden w-[1280px] p-2 text-center">
          <p>Clareza e Organização Visual é o objetivo principal de um site, como o da Defensoria Pública.  O grid de <b>4 colunas</b> com
          margens amplas proporciona uma estrutura bem organizada e permite que o conteúdo seja fácil de visualizar e
          interpretar. A <b>Lexend Deca</b> é uma fonte sans-serif projetada para melhorar a legibilidade e a fluência na leitura. A <b>paleta de cores</b> utilizada teve como base o manual de identidade visual da própria defensoria, mas aqui ela ganha 
          novas variações que ajudam a criar níveis de destaques, como CTAs e alertas/pop-ups, guiando o usuário
          pelas informações mais importantes.</p>
        </div>
      </div>
      <div className="flex items-center flex-col mt-[24px]">
        <Image
          src={'images/portifolio/defensoria/defensoria-4.svg'}
          width={569}
          height={477}
          alt={"defensoria-4"}
          title={"defensoria-4"}
        />
      </div>
      <div className="mb-[24px] mt-[40px] flex items-center justify-center">
        <div className="w-[1280px] bg-guava-500 p-2 text-center">
          <p className="text-white text-[38px] font-bold">TELAS:</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-[24px] justify-center items-center lg:items-start">
      <Image
          src={'images/portifolio/defensoria/defensoria-5.svg'}
          width={270}
          height={580}
          alt={"defensoria-5"}
          title={"defensoria-5"}
        />
        <Image
          src={'images/portifolio/defensoria/defensoria-6.svg'}
          width={267}
          height={581}
          alt={"defensoria-6"}
          title={"defensoria-6"}
          style={{marginLeft: -2}}
        />
        <Image
          src={'images/portifolio/defensoria/defensoria-7.svg'}
          width={304}
          height={699}
          alt={"defensoria-7"}
          title={"defensoria-7"}
          style={{marginLeft: -2}}
        />
        <Image
          src={'images/portifolio/defensoria/defensoria-8.svg'}
          width={276}
          height={585}
          alt={"defensoria-8"}
          title={"defensoria-8"}
          style={{marginLeft: -2}}
        />
      </div>
      <div className="flex items-center justify-center w-full col-span-1 lg:col-span-3 space-x-5 mb-[24px] mt-[24px]">
        <button
          onClick={() => window.open('https://www.figma.com/proto/3pnF4YNRfRteF4gH51UP69/DPDF---PROJETO?page-id=35%3A7554&node-id=75-7531&node-type=canvas&viewport=-914%2C-1708%2C0.12&t=AXA0JsyK9hw9akJv-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=75%3A7531', '_blank')}
          className="h-[50px] w-[304px] px-3 py-1 bg-gray-950 text-lime-200 rounded hover:bg-lime-600 border border-lime-500 rounded-[12px]"
        >
          ACESSE O PROTÓTIPO NAVEGÁVEL
        </button>
      </div>
      <FooterScrollTopTopButton />
      <FooterButtons />
    </div>
  )
}