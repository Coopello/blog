import "highlight.js/styles/github-dark.css";
import "src/styles/globals.css";
import "src/styles/theme.css";

import type { ReactNode } from "react";
import { Header } from "src/components/ui/Header";

export const metadata = {
  title: "Coope Blog",
  description:
    "みんながよく知る企業をめざしたいエンジニア必見！有名企業エンジニアによる「未経験からでも悩まない」ノウハウがここに。",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-custom-lightGray">
        <Header />
        {children}
      </body>
    </html>
  );
}
