import "highlight.js/styles/github-dark.css";
import "src/styles/globals.css";
import "src/styles/theme.css";

import type { ReactNode } from "react";
import { Providers } from "src/app/providers";
import { Header } from "src/components/ui/Header";

export const metadata = {
  title: "Coopello Blog",
  description:
    "現役エンジニア2人が運営するCoopello（こぺろ）のテックブログです。技術情報や交流イベントなどの情報を日々発信していきます。",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/static/favicon.ico" />
        <link rel="canonical" href={"https://coopello-blog.vercel.app"} />
        <meta
          name="google-site-verification"
          content="vuOKGQOUc53b839WLX7J6p5jJbEdAnnHRS7Y-EHdjdA"
        />
      </head>
      <body className="min-h-screen bg-custom-lightGray">
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
