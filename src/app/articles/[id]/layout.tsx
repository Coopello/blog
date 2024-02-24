import "highlight.js/styles/github-dark.css";
import "src/styles/globals.css";
import "src/styles/theme.css";

import type { ReactNode } from "react";

export default function ArticleDetailLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <head />
      {children}
    </>
  );
}
