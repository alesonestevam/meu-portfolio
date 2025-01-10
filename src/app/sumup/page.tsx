"use client"

import WorksTitleComponent from "@/components/portifolio/WorksTitle";
import { FooterButtons } from "@/components/ui/FooterButtons";
import { FooterScrollTopTopButton } from "@/components/ui/FooterScrollToTopButton";
import Image from "next/image";

export default function SumupPage() {
  return (
    <div className="px-10 lg:px-20 mt-[40px]">
      <WorksTitleComponent title="Sumup" isRed={true}/>
      <div className="flex items-center flex-col mt-[24px] mb-[24px]">
        <Image
          src={'images/portifolio/sumup/sumup-1.svg'}
          width={1080}
          height={607}
          alt={"sumup-1"}
          title={"sumup-1"}
        />
        <Image
          src={'images/portifolio/sumup/sumup-2.svg'}
          width={1080}
          height={631}
          alt={"sumup-2"}
          title={"sumup-2"}
          style={{ marginTop: -1}}
        />
        <Image
          src={'images/portifolio/sumup/sumup-3.svg'}
          width={1080}
          height={551}
          alt={"sumup-3"}
          title={"sumup-3"}
          style={{ marginTop: -1}}
        />
        <Image
          src={'images/portifolio/sumup/sumup-4.svg'}
          width={1080}
          height={551}
          alt={"sumup-4"}
          title={"sumup-4"}
          style={{ marginTop: -1}}
        />
        <Image
          src={'images/portifolio/sumup/sumup-5.svg'}
          width={1080}
          height={906}
          alt={"sumup-5"}
          title={"sumup-5"}
          style={{ marginTop: -2}}
        />
      </div>
      <div className="flex items-center justify-center w-full col-span-1 lg:col-span-3 space-x-5 mb-[24px] mt-[24px]">
        <button
          onClick={() => window.open('https://www.figma.com/design/jdW5EDUFdCRahuxxLpvJvk/Portf%C3%B3lio-Aleson-Estevam?node-id=302-3072&t=puGzXGUCUrZ9Gvkf-0', '_blank')}
          className="h-[50px] w-[204px] px-3 py-1 bg-gray-950 text-lime-200 rounded hover:bg-lime-600 border border-lime-500 rounded-[12px]"
        >
          ACESSE O PROTÓTIPO
        </button>
      </div>
      <div className="flex items-center flex-col mt-[24px] mb-[24px]">
        <Image
          src={'images/portifolio/sumup/sumup-6.svg'}
          width={1080}
          height={1067}
          alt={"sumup-6"}
          title={"sumup-6"}
        />
        <Image
          src={'images/portifolio/sumup/sumup-7.svg'}
          width={1080}
          height={1067}
          alt={"sumup-7"}
          title={"sumup-7"}
          style={{ marginTop: -1}}
        />
        <Image
          src={'images/portifolio/sumup/sumup-8.svg'}
          width={1080}
          height={1067}
          alt={"sumup-8"}
          title={"sumup-8"}
          style={{ marginTop: -2}}
        />
      </div>
      <div className="flex items-center justify-center w-full col-span-1 lg:col-span-3 space-x-5 mb-[24px] mt-[24px]">
        <button
          onClick={() => window.open('https://www.figma.com/proto/YxzEm15npQE3nLdLPdX2uM/Pix-na-SumUp?page-id=0%3A1&node-id=17-333&starting-point-node-id=17%3A333&t=BakusfhkAyNgF3tV-1', '_blank')}
          className="h-[50px] w-[204px] px-3 py-1 bg-gray-950 text-lime-200 rounded hover:bg-lime-600 border border-lime-500 rounded-[12px]"
        >
          ACESSE O PROTÓTIPO
        </button>
      </div>
      <div className="flex items-center flex-col mt-[24px] mb-[24px]">
        <Image
          src={'images/portifolio/sumup/sumup-9.svg'}
          width={1080}
          height={1144}
          alt={"sumup-9"}
          title={"sumup-9"}
        />
        <Image
          src={'images/portifolio/sumup/sumup-10.svg'}
          width={1080}
          height={1144}
          alt={"sumup-10"}
          title={"sumup-10"}
          style={{ marginTop: -1}}
        />
      </div>
      <div className="flex items-center justify-center w-full col-span-1 lg:col-span-3 space-x-5 mb-[24px] mt-[24px]">
        <button
          onClick={() => window.open('https://www.figma.com/proto/YxzEm15npQE3nLdLPdX2uM/Pix-na-SumUp?page-id=0%3A1&node-id=17-333&starting-point-node-id=17%3A333&t=BakusfhkAyNgF3tV-1&fuid=852541776390062184', '_blank')}
          className="h-[50px] w-[204px] px-3 py-1 bg-gray-950 text-lime-200 rounded hover:bg-lime-600 border border-lime-500 rounded-[12px]"
        >
          ACESSE O PROTÓTIPO
        </button>
      </div>
      <FooterScrollTopTopButton />
      <FooterButtons />
    </div>
  )
}