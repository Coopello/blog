import "highlight.js/styles/github-dark.css";
import "src/styles/globals.css";
import "src/styles/theme.css";

import type { ReactNode } from "react";
import { Header } from "src/components/ui/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head />
      <body className="min-h-screen bg-custom-lightGray pb-12">
        <Header />
        {children}
      </body>
    </html>
  );
}
