"use client";

import WorksTitleComponent from "@/components/portifolio/WorksTitle";
import { FooterButtons } from "@/components/ui/FooterButtons";
import { FooterScrollTopTopButton } from "@/components/ui/FooterScrollToTopButton";

export default function LygiaCarkPage() {
  return (
    <div className="px-10 lg:px-20 mt-[40px]">
      <WorksTitleComponent title="Lygia Clark: Uma Experiência Viva" />
      <FooterScrollTopTopButton />
      <FooterButtons/>
    </div>
  )
}