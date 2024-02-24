import {
  getArticleDetail,
  getRecommendArticles,
} from "src/app/articles/[id]/requests";
import { Detail } from "src/components/page/Detail";

type PageProps = {
  params: { id: string };
};

export default async function DetailPage({ params }: PageProps) {
  const article = await getArticleDetail(params.id);
  const recommendArticlesResponse = await getRecommendArticles(
    article.tags.map((tag) => {
      return tag.id;
    }),
  );

  return (
    <Detail
      article={article}
      recommendArticles={recommendArticlesResponse.contents}
    />
  );
}
