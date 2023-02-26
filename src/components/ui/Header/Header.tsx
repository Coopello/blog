"use client";

import Image from "next/image";
import type { FC } from "react";
/**
 * @package
 */
export const Header: FC = () => {
  return (
    <header className="flex items-center bg-custom-white px-4 sm:gap-4 sm:p-4">
      <div className="relative h-[60px] w-[60px] sm:h-20 sm:w-20">
        <Image src="/static/coopello_logo.png" alt="こぺろロゴ" fill />
      </div>
      <h1 className="text-3xl sm:text-4xl">Coopello Blog</h1>
    </header>
  );
};
