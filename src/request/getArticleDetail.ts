import { load } from "cheerio";
import hljs from "highlight.js";
import { notFound } from "next/navigation";
import type { Article } from "src/models/article";

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
    },
  );

  if (res.status === 404) {
    notFound();
  }

  const data = await res.json();

  if (typeof data.content !== "string") {
    return data;
  }

  const $ = load(data.content);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  return { ...data, content: $.html() };
};
