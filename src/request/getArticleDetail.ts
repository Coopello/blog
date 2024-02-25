import * as cheerio from "cheerio";
import hljs from "highlight.js";
import { notFound } from "next/navigation";
import type { Article } from "src/models/article";
import { REVALIDATE_TIME } from "src/utils/constants";

/**
 * @package
 */
export const getArticleDetail = async (articleId: string): Promise<Article> => {
  const res = await fetch(
    `${process.env.MICRO_CMS_API_URL}/articles/${articleId}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": process.env.MICRO_CMS_API_KEY || "",
      },
      next: { revalidate: REVALIDATE_TIME },
    }
  );

  if (res.status === 404) {
    notFound();
  }

  const data = await res.json();

  if (typeof data.content !== "string") {
    return data;
  }

  const $ = cheerio.load(data.content, null, false);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  return { ...data, content: $.html() };
};
