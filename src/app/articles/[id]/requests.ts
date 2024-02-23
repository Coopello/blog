import * as cheerio from "cheerio";
import hljs from "highlight.js";
import { notFound } from "next/navigation";
import type { Article } from "src/models/article";

type Response = {
  contents: Article[];
  totalCount: number;
};

export const getArticleDetail = async (articleId: string): Promise<Article> => {
  const res = await fetch(
    `${process.env.MICRO_CMS_API_URL}/articles/${articleId}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": process.env.MICRO_CMS_API_KEY || "",
      },
      next: { revalidate: 1 * 60 },
    }
  );

  if (res.status === 404) {
    notFound();
  }

  const data = await res.json();

  const $ = cheerio.load(data.content, null, false);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  return { ...data, content: `${$.html()}` };
};

export const getRecommendArticles = async (
  articleTagIds: string[]
): Promise<Response> => {
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
    `${process.env.MICRO_CMS_API_URL}/articles?orders=-pv&limit=3&filters=${filtersConditions}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": process.env.MICRO_CMS_API_KEY || "",
      },
      next: { revalidate: 1 * 60 },
    }
  );

  if (res.status === 404) {
    notFound();
  }

  return await res.json();
};
