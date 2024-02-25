import type { Metadata } from "next";
import { Detail } from "src/components/page/Detail";
import { getArticleDetail, getRecommendArticles } from "src/request";
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

export const revalidate = REVALIDATE_TIME;

export default async function DetailPage({ params }: PageProps) {
  const article = await getArticleDetail(params.id);
  const recommendArticlesResponse = await getRecommendArticles(params.id);

  return (
    <Detail
      article={article}
      recommendArticles={recommendArticlesResponse.contents}
    />
  );
}
