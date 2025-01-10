"use client";

interface WorksTitleComponentProps {
  title: string;
  isRed?: boolean
}

export default function WorksTitleComponent(
  {
    title,
    isRed = false
  }: Readonly<WorksTitleComponentProps>) {
    return (
      <div className="flex justify-center flex-col">
        <div className="flex justify-center">
          {isRed ? <p className="text-guava-200 text-[38px] font-bold">{title}</p> : <p className="text-lime-200 text-[38px] font-bold">{title}</p>}
        </div>
        <hr className="mt-2 mb-2 border-lime-50"></hr>
      </div>
    )
  }