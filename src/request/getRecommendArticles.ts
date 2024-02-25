import { notFound } from "next/navigation";
import type { Article } from "src/models/article";
import { REVALIDATE_TIME } from "src/utils/constants";

/**
 * @package
 */
export type RecommendArticlesResponse = {
  contents: Article[];
  totalCount: number;
};

/**
 * @package
 */
export const getRecommendArticles = async (
  articleId: string,
): Promise<RecommendArticlesResponse> => {
  const articleRes = await fetch(
    `${process.env.MICRO_CMS_API_URL}/articles/${articleId}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": process.env.MICRO_CMS_API_KEY || "",
      },
    },
  );

  if (articleRes.status === 404) {
    notFound();
  }

  const article: Article = await articleRes.json();
  const articleTagIds = article.tags.map((tag) => {
    return tag.id;
  });

  const filtersConditions = articleTagIds.reduce(
    (filtersConditions, currentId, i) => {
      if (i < articleTagIds.length - 1) {
        return filtersConditions + `tags[contains]${currentId}[or]`;
      }

      return filtersConditions + `tags[contains]${currentId}`;
    },
    "",
  );

  const recommendArticlesRes = await fetch(
    `${process.env.MICRO_CMS_API_URL}/articles?orders=-pv&limit=3&filters=${filtersConditions}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": process.env.MICRO_CMS_API_KEY || "",
      },
      next: { revalidate: REVALIDATE_TIME },
    },
  );

  if (recommendArticlesRes.status === 404) {
    notFound();
  }

  return await recommendArticlesRes.json();
};
