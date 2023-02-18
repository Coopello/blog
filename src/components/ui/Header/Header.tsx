"use client";

import Image from "next/image";
import type { FC } from "react";
/**
 * @package
 */
export const Header: FC = () => {
  return (
    <header className="flex items-center gap-4 p-4">
      <Image
        src="/static/coopeblog_logo.png"
        alt="こぺブログロゴ"
        width={80}
        height={80}
      />
      <h1 className="text-4xl">Coope Blog</h1>
    </header>
  );
};
