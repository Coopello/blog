import Image from "next/image";
import type { FC, ReactNode } from "react";

type Props = {
  buttonComponent: ReactNode;
  message: string;
};

/**
 * @package
 */
export const ExceptionContent: FC<Props> = ({ buttonComponent, message }) => {
  return (
    <div className="grid min-h-[calc(100vh_-_60px)] w-full place-content-center gap-12 pb-20 sm:min-h-[calc(100vh_-_112px)]">
      <div>
        <Image
          className="mb-6"
          src="/static/error_icon.svg"
          alt="エラーアイコン"
          width={256}
          height={256}
        />
        <h2 className="text-2xl text-custom-primary">{message}</h2>
      </div>
      {buttonComponent}
    </div>
  );
};
