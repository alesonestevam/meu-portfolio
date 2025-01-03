"use client"

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col px-20 mt-[88px] mb-4 items-center justify-center">
      <div>
        <Image
          src={"./images/logotipo_guava_pink.svg"}
          width={630}
          height={152}
          alt="Foto perfil"
          title="Foto perfil"
          priority
        />
        <hr className="mt-[24px] mb-[24px]"></hr>
      </div>
      <div className="w-[340px] md:w-[630px] flex flex-col items-center">
        <p className="text-[14px] md:text-[20px]">Olá, sou <b>Aleson Estevam</b>, designer gráfico e UI.</p>
        <p className="text-[14px] md:text-[20px]">Aqui você encontrará alguns projetos </p>
        <p className="text-[14px] md:text-[20px]">selecionados que refletem minha dedicação à </p>
        <p className="text-[14px] md:text-[20px]">criatividade, funcionalidade e diversidade no </p>
        <p className="text-[14px] md:text-[20px]">mundo de design.</p>
      </div>
      <div className="flex items-center justify-center w-full col-span-3 space-x-5 mb-[32px] mt-[24px]">
        <button className="h-[50px] w-[192px] px-3 py-1 bg-guava-600 text-white rounded hover:bg-guava-800 border border-guava-500 rounded-[12px]">
          <a target="_blank" href="https://acrobat.adobe.com/id/urn:aaid:sc:US:2694754d-b6be-4e9e-9a2c-93c06d4b2173">BAIXAR CURRÍCULO</a>
        </button>
      </div>
    </div>
  );
}
