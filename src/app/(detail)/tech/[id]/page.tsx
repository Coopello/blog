import { notFound } from "next/navigation";
import { TechDetail } from "src/components/page/TechDetail";
import type { Article } from "src/models/article";
import type { RecommendArticlesResponse } from "src/request";
import { REVALIDATE_TIME } from "src/utils/constants";
import type { DetailPageProps } from "src/utils/types";

const getArticleDetailData = async (
  articleId: string
): Promise<{
  article: Article;
  recommendArticlesResponse: RecommendArticlesResponse;
}> => {
  const res = await fetch(`${process.env.BASE_URL}/api/tech/${articleId}`, {
    next: {
      revalidate: REVALIDATE_TIME,
    },
  });
  if (res.status === 404) {
    notFound();
  }

  return await res.json();
};

export default async function TechDetailPage({ params }: DetailPageProps) {
  const data = await getArticleDetailData(params.id);
  const { article, recommendArticlesResponse } = data;

  return (
    <TechDetail
      article={article}
      recommendArticles={recommendArticlesResponse.contents}
    />
  );
}
