"use client";

import Image from "next/image";

interface IVideoContent {
  id: number;
  title: string;
  subtitle: string;
  text: string;
  image: string;
  url?: string;
}

interface VideosContentComponentProps {
  cardTitle: string;
  videoContent: IVideoContent[];
}

export default function VideosContentComponent(
  {
    cardTitle,
    videoContent
  }: Readonly<VideosContentComponentProps>) {
  return (
    <>
      <div className="w-full bg-lime-700 h-[38px] p-[8px] flex justify-center">
        <p className="text-[18px] font-bold">{cardTitle}</p>
      </div>
      <div className="text-white p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videoContent.map((video) => (
            <div
              key={video.id}
              className="rounded-lg p-4 flex flex-col items-start"
            >
              <div className="relative w-full h-[272px] rounded-lg overflow-hidden mb-4 cursor-pointer transition-transform duration-300 hover:scale-105">
                <Image
                  src={video.image}
                  alt={video.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h2 className="text-[20px] text-white font-bold">{video.title}</h2>
              <p className="text-[12px] text-white">{video.subtitle}</p>
              <hr className="w-[200px] mt-2 mb-2 border-lime-200"></hr>
              <div className="max-w-[321px]">
                <p className="text-[14px] text-white">{video.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}