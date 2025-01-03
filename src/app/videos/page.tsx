"use client";

import VideosContentComponent from "@/components/portifolio/VideosContent";
import { FooterButtons } from "@/components/ui/FooterButtons";

export default function VideosPage() {
  const videosInstitucionais = [
    {
      id: 1,
      title: "MINISTÉRIO DA SAÚDE",
      subtitle: "Você sabia que uma conversa pode salvar vidas?",
      text: "Vídeo institucional/comercial sobre a importância da doação de órgãos em solo brasileiro. Participação do ator Marcos Frota.",
      image: '/images/thumbs/velho-chico-thumb.svg',
      url: "",
    },
    {
      id: 2,
      title: "MINISTÉRIO DA SAÚDE",
      subtitle: "MPOX: Saiba Mais Sobre a Doença e o Cenário Atual no Brasil",
      text: "Vídeo informativo sobre o reforça a vigilância e os cuidados para prevenir novos surtos da MPOX.",
      image: '/images/thumbs/mpox-thumb.svg',
      url: "",
    },
    {
      id: 3,
      title: "MINISTÉRIO DA SAÚDE",
      subtitle: "OuvSUS: conheça o ciclo da manifestação",
      text: "Direcionamento sobre como os usuários do SUS podem se manifestar sobre elogios ou reclamações do sistema brasileiro.",
      image: '/images/thumbs/sus-thumb.svg',
      url: "",
    },
    {
      id: 4,
      title: "ENGAJAMUNDO BRASIL",
      subtitle: "Manifesto: UNIÃO, VOTO E ALIMENTAÇÃO",
      text: "Vídeo sobre as eleições 2022 e conscientização sobre alimentação saudável e sustentabilidade.",
      image: '/images/thumbs/engajamundo-thumb.svg',
      url: "",
    },
    {
      id: 5,
      title: "UnbTV",
      subtitle: "Exclusiva: Banda UÓ",
      text: "Entrevista com a Banda Uó! Os integrantes falaram da carreira e futuros lançamentos",
      image: '/images/thumbs/unbtv-thumb.svg',
      url: "",
    }
  ]

  const videosCurtas = [
    {
      id: 1,
      title: "DIÁLOGOS PERIFÉRICOS",
      subtitle: "Documentário",
      text: "Curta sobre memórias e raízes periféricas, na luta pela sustentabilidade ambiental e econômica em áreas vulnerabilizadas.",
      image: '/images/thumbs/dialogos-thumb.svg',
      url: "",
    },
    {
      id: 2,
      title: "AMBULATÓRIO: ATENÇÃO ESPECIALIZAD",
      subtitle: "Documentário",
      text: "O curta procura entender, a partir do olhar de profissionais da Saúde e de mulheres e homens trans, a necessidade de implementar, dentro do SUS, um serviço tão especializado, e os principais obstáculos que dificultam o aprimoramento e a difusão desse tipo de atendimento.",
      image: '/images/thumbs/ambulatorio-thumb.svg',
      url: "",
    },
    {
      id: 3,
      title: "HABILITADO PARA MORRER",
      subtitle: "Ficção",
      text: "Habilitado para Morrer é um curta produzido pela Pupila Audiovisual. Foi exibido na Mostra Brasília do 50º Festival de Brasília do Cinema Brasileiro, e também selecionado para outros 8 festivais no Brasil, incluindo a 16º edição do NOIA – Festival do Audiovisual Universitário e o I Festival Tela Universitária de Cinema.",
      image: '/images/thumbs/habilitado-thumb.svg',
      url: "",
    }
  ]

  return (
    <div className="px-10 lg:px-20 mt-[40px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <p className="text-[24px] text-justify">A edição de vídeos, deve priorizar a acessibilidade com legendas e/ou leitura em Libras, além de trabalhar colorização temática e cortes dinâmicos para engajar o público. Utilizo Adobe Premiere e After Effects como ferramentas.</p>
          <hr className="mt-4"></hr>
        </div>
      </div>
      <div className="mt-12 mb-12">
        <VideosContentComponent
          cardTitle="INSTITUCIONAIS"
          videoContent={videosInstitucionais}
        />
        <VideosContentComponent
          cardTitle="CURTAS-METRAGENS"
          videoContent={videosCurtas}
        />
      </div>
      <FooterButtons />
    </div>
  )
}