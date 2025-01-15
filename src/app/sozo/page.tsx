"use client"

import WorksTitleComponent from "@/components/portifolio/WorksTitle"
import { FooterButtons } from "@/components/ui/FooterButtons";
import { FooterScrollTopTopButton } from "@/components/ui/FooterScrollToTopButton";
import Image from "next/image";

export default function SozoPage() {
  return (
    <div className="px-10 lg:px-20 mt-[40px] mb-[40px]">
      <WorksTitleComponent title="Grupo Sozo" />
      <div className="flex justify-center mt-[91px] mb-[67px]">
        <Image
          src={'images/portifolio/sozo/sozo-1.svg'}
          width={1005}
          height={3072}
          alt={"sozo"}
          title={"sozo"}
          />
      </div>
      <FooterScrollTopTopButton />
      <FooterButtons />
    </div>
  )
}