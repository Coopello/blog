import "highlight.js/styles/github-dark.css";
import "src/styles/globals.css";
import "src/styles/theme.css";

import type { ReactNode } from "react";
import { getArticleDetail } from "src/app/articles/[id]/requests";

type PageProps = {
  params: { id: string };
};

export const generateMetadata = async ({ params }: PageProps) => {
  const article = await getArticleDetail(params.id);

  return {
    title: `${article.title} - Coopello Blog`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://coopello-blog.vercel.app/articles/${params.id}`,
    },
    twitter: {
      title: article.title,
      card: "summary_large_image",
      description: article.description,
    },
  };
};

export default function ArticleDetailLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
