"use client";

import Image from "next/image";
import type { FC } from "react";
/**
 * @package
 */
export const Header: FC = () => {
  return (
    <header className="flex items-center gap-3 bg-custom-white p-3 sm:gap-4 sm:p-4">
      <div className="relative h-10 w-10 sm:h-12 sm:w-12">
        <Image src="/static/coopello_logo.svg" alt="こぺろロゴ" fill />
      </div>
      <h1 className="text-2xl sm:text-3xl">Coopello Blog</h1>
    </header>
  );
};
