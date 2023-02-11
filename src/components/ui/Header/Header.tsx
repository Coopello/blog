"use client";

import Image from "next/image";
import type { FC } from "react";
/**
 * @package
 */
export const Header: FC = () => {
  return (
    <header className="flex items-center px-8 py-2">
      <Image
        src="/static/coopeblog_logo.png"
        alt="こぺブログロゴ"
        width={60}
        height={60}
      />
      <h1 className="text-3xl font-bold">Coope Blog</h1>
    </header>
  );
};
