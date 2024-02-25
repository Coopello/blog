import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Detail } from "src/components/page/Detail";
import type { Article } from "src/models/article";
import type { RecommendArticlesResponse } from "src/request";
import { getArticleDetail } from "src/request";
import { REVALIDATE_TIME } from "src/utils/constants";

type PageProps = {
  params: { id: string };
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const article = await getArticleDetail(params.id);

  return {
    title: `${article.title} - Coopello Blog`,
    description: article.description,
    alternates: {
      canonical: `/articles/${params.id}`,
    },
    metadataBase: new URL("https://www.coopello.blog"),
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/articles/${params.id}`,
    },
    twitter: {
      title: article.title,
      card: "summary_large_image",
      description: article.description,
    },
  };
};

const getArticleDetailData = async (
  articleId: string,
): Promise<{
  article: Article;
  recommendArticlesResponse: RecommendArticlesResponse;
}> => {
  const res = await fetch(`${process.env.BASE_URL}/api/articles/${articleId}`, {
    next: {
      revalidate: REVALIDATE_TIME,
    },
  });
  if (res.status === 404) {
    notFound();
  }

  return await res.json();
};

export default async function DetailPage({ params }: PageProps) {
  const data = await getArticleDetailData(params.id);
  const { article, recommendArticlesResponse } = data;

  return (
    <Detail
      article={article}
      recommendArticles={recommendArticlesResponse.contents}
    />
  );
}
