"use client";

import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

/**
 * @package
 */
export const Header: FC = () => {
  return (
    <header className="box-border overflow-hidden bg-custom-white">
      <Link
        className="mx-auto box-content flex w-full items-center bg-custom-white px-4 py-2 sm:px-8 sm:py-4"
        href="/"
      >
        <div className="relative mr-2 size-6 sm:mr-4 sm:size-12">
          <Image src="/static/coopello_logo.svg" alt="こぺろロゴ" fill />
        </div>
        <h1 className="text-xl font-extralight sm:text-3xl">Coopello Blog</h1>
      </Link>
    </header>
  );
};
