import "highlight.js/styles/github-dark.css";
import "src/styles/globals.css";
import "src/styles/theme.css";

import type { ReactNode } from "react";
import { Providers } from "src/app/providers";
import { Header } from "src/components/ui/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/static/favicon.ico" />
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
