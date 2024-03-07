import { notFound } from "next/navigation";
import { SlideDetail } from "src/components/page/SlideDetail";
import type { Article } from "src/models/article";
import { REVALIDATE_TIME } from "src/utils/constants";

type PageProps = {
  params: { id: string };
};

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

export default async function SlideDetailPage({ params }: PageProps) {
  const { article } = await getArticleDetailData(params.id);

  return <SlideDetail article={article} />;
}
