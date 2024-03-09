import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getArticleDetail } from "src/request";
import type { DetailPageProps } from "src/utils/types";

export const generateMetadata = async ({
  params,
}: DetailPageProps): Promise<Metadata> => {
  const article = await getArticleDetail(params.id);

  return {
    title: `${article.title} - Coopello Blog`,
    description: article.description,
    alternates: {
      canonical: `/${article.type}/${params.id}`,
    },
    metadataBase: new URL("https://www.coopello.blog"),
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/${article.type}/${params.id}`,
    },
    twitter: {
      title: article.title,
      card: "summary_large_image",
      description: article.description,
    },
  };
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head />
      <body>{children}</body>
    </html>
  );
}
