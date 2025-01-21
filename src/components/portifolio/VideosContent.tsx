"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, createRef } from 'react';

interface IVideoContent {
  id: number;
  title: string;
  subtitle: string;
  text: string;
  image: string;
  url: string;
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

  async function openVideoUrl(videoUrl: string) {
    window.open(videoUrl, '_blank');
  }

  const imageRefs = useRef(videoContent.map(() => createRef<HTMLImageElement>()));

  const handleWithMouseEnter = (index: number, action: string) => {
    const currentImageRef = imageRefs.current[index];
    if (currentImageRef?.current) {
      currentImageRef.current.style.opacity = action === 'enter' ? '0.3' : '1';
    }
  };

  return (
    <>
      <div className="w-full bg-lime-700 h-[38px] p-[8px] flex justify-center">
        <p className="text-[18px] font-bold">{cardTitle}</p>
      </div>
      <div className="text-white md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6">
          {videoContent.map((video, index) => (
            <div
              key={video.id}
              className="rounded-lg p-4 flex flex-col items-center md:items-start"
            >
              <div onClick={() => openVideoUrl(video.url)} className="relative w-full h-[272px] rounded-lg overflow-hidden mb-4 cursor-pointer transition-transform duration-300 hover:scale-105 ">
                <Image
                  ref={imageRefs.current[index]}
                  src={video.image}
                  alt={video.title}
                  layout="fill"
                  onClick={() => openVideoUrl(video.url)}
                  className="hover:opacity-30 transition-opacity duration-300"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                  onMouseEnter={() => handleWithMouseEnter(index, 'enter')}
                  onMouseLeave={() => handleWithMouseEnter(index, 'leave')}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16"
                    onClick={() => openVideoUrl(video.url)}
                  >
                    <path
                      d="M17.6 27.8L26.94 20.8C27.48 20.4 27.48 19.6 26.94 19.2L17.6 12.2C16.94 11.7 16 12.18 16 13V27C16 27.82 16.94 28.3 17.6 27.8ZM20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 36C11.18 36 4 28.82 4 20C4 11.18 11.18 4 20 4C28.82 4 36 11.18 36 20C36 28.82 28.82 36 20 36Z"
                      fill="#DF616A"
                    />
                  </svg>
                </div>
              </div>

              <div className="xll:ml-14">
                <h2 className="text-[20px] text-white font-bold">{video.title}</h2>
                <p className="text-[12px] text-white text-center md:text-start">{video.subtitle}</p>
                <hr className="w-[200px] mt-2 mb-2 border-lime-200"></hr>
                <div className="max-w-[321px] text-center md:text-start">
                  <p className="text-[14px] text-white">{video.text}</p>
                </div>
              </div>
              <div className="md:hidden mt-[18px]">
                <Link href={video.url} target="_blank" className="flex items-center text-sm font-semibold text-white underline hover:text-gray-400 justify-center md:justify-end">
                  Assistir
                  <Image
                    src={`images/arrow_outward-2.svg`}
                    width={24}
                    height={24}
                    alt="Seta para cima"
                    title="Seta para cima"
                    priority
                    className="text-lg font-bold text-white ml-2"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}