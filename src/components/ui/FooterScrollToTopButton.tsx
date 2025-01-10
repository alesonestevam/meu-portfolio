"use client"

import Image from "next/image";

export const FooterScrollTopTopButton = () => {
  return (
    <div className="flex items-end justify-end w-full col-span-1 lg:col-span-3 space-x-5 mb-[24px] mt-[24px]">
      <Image
        src={"images/keyboard_arrow_up.svg"}
        width={45}
        height={45}
        alt="Ícone seta para cima"
        title="Ícone seta para cima"
        style={{cursor: "pointer"}}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </div>
  )
}