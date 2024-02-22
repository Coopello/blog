"use client";

import Image from "next/image";
import type { FC } from "react";
/**
 * @package
 */
export const Header: FC = () => {
  return (
    <header className="box-border bg-custom-white">
      <div className="mx-auto box-content flex w-full max-w-[1484px] items-center bg-custom-white p-4 sm:w-[90%]">
        <div className="relative mr-4 h-10 w-10 sm:h-12 sm:w-12">
          <Image src="/static/coopello_logo.svg" alt="こぺろロゴ" fill />
        </div>
        <h1 className="text-2xl font-extralight sm:text-4xl">Coopello Blog</h1>
      </div>
    </header>
  );
};
