import { notFound } from "next/navigation";
import { SlideDetail } from "src/components/page/SlideDetail";
import type { Article } from "src/models/article";
import { REVALIDATE_TIME } from "src/utils/constants";
import type { DetailPageProps } from "src/utils/types";

const getArticleDetailData = async (
  articleId: string,
): Promise<{
  article: Article;
}> => {
  const res = await fetch(`${process.env.BASE_URL}/api/slides/${articleId}`, {
    next: {
      revalidate: REVALIDATE_TIME,
    },
  });
  if (res.status === 404) {
    notFound();
  }

  return await res.json();
};

export default async function SlideDetailPage({ params }: DetailPageProps) {
  const { article } = await getArticleDetailData(params.id);

  return <SlideDetail article={article} />;
}
