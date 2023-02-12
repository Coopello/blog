import "src/styles/globals.css";

import type { ReactNode } from "react";
import { Header } from "src/components/ui/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
