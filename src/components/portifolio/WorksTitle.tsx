"use client";

interface WorksTitleComponentProps {
  title: string;
  isRed?: boolean;
  subtitle?: string;
}

export default function WorksTitleComponent(
  {
    title,
    subtitle,
    isRed = false,
  }: Readonly<WorksTitleComponentProps>) {
    return (
      <div className="flex justify-center flex-col">
        <div className="flex justify-center flex-col">
          <p className={`${isRed ? 'text-guava-200' : 'text-lime-200'} text-[38px] font-bold text-center`}>{title}</p>
            {subtitle && (
              <p className={`${isRed ? 'text-guava-200' : 'text-lime-200'} text-[38px] font-bold text-center`}>
                {subtitle}
              </p>
            )}
          </div>
        <hr className="mt-2 mb-2 border-lime-50"></hr>
      </div>
    )
  }