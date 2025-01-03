"use client"

import { useRouter } from "next/navigation";

export const FooterButtons = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center w-full col-span-1 lg:col-span-3 space-x-5 mb-[32px] mt-[24px]">
        <button
          onClick={() => router.back()}
          className="h-[50px] w-[93px] px-3 py-1 bg-gray-950 text-white rounded hover:bg-guava-600 border border-guava-500 rounded-[12px]"
        >
          VOLTAR
        </button>
        <button className="h-[50px] w-[192px] px-3 py-1 bg-guava-600 text-white rounded hover:bg-guava-800 border border-guava-500 rounded-[12px]">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://acrobat.adobe.com/id/urn:aaid:sc:US:2694754d-b6be-4e9e-9a2c-93c06d4b2173"
          >
            BAIXAR CURRÍCULO
          </a>
        </button>
      </div>
  )
}