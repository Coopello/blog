/* eslint-disable @typescript-eslint/naming-convention */
import { notFound } from "next/navigation";
import { Detail } from "src/components/page/Detail";
import type { Article } from "src/models/article";

type Response = {
  contents: Article[];
  totalCount: number;
};

const getArticleDetail = async (articleId: string) => {
  const res = await fetch(
    `${process.env.MICRO_CMS_API_URL}/blogs/${articleId}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": process.env.MICRO_CMS_API_KEY || "",
      },
      cache: "force-cache",
      next: { revalidate: 10 },
    }
  );

  if (res.status === 404) {
    notFound();
  }

  return await res.json();
};

const getRecommendArticles = async (articleTagIds: string[]) => {
  const filtersConditions = articleTagIds.reduce(
    (filtersConditions, currentId, i) => {
      if (i < articleTagIds.length - 1) {
        return filtersConditions + `tags[contains]${currentId}[or]`;
      }

      return filtersConditions + `tags[contains]${currentId}`;
    },
    ""
  );

  const res = await fetch(
    `${process.env.MICRO_CMS_API_URL}/blogs?orders=-pv&limit=3&filters=${filtersConditions}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": process.env.MICRO_CMS_API_KEY || "",
      },
      next: { revalidate: 10 },
      cache: "force-cache",
    }
  );

  if (res.status === 404) {
    notFound();
  }

  return await res.json();
};

export default async function DetailPage({
  params,
}: {
  params: { id: string };
}) {
  const article: Article = await getArticleDetail(params.id);
  const recommendArticlesResponse: Response = await getRecommendArticles(
    article.tags.map((tag) => {
      return tag.id;
    })
  );

  return (
    <Detail
      article={article}
      recommendArticles={recommendArticlesResponse.contents}
    />
  );
}
