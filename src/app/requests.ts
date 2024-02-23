import type { Article } from "src/models/article";
import { DISPLAY_ARTICLE_CARD_PER_PAGE } from "src/utils/constants";

type Response = {
  contents: Article[];
  totalCount: number;
};

export const getPopularArticles = async (): Promise<Response> => {
  const res = await fetch(
    `${process.env.MICRO_CMS_API_URL}/articles?orders=-pv&limit=4`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": process.env.MICRO_CMS_API_KEY || "",
      },
      next: { revalidate: 1 * 60 },
    }
  );

  return await res.json();
};

export const getRecentArticles = async (): Promise<Response> => {
  const res = await fetch(
    `${process.env.MICRO_CMS_API_URL}/articles?orders=-publishedAt&limit=${DISPLAY_ARTICLE_CARD_PER_PAGE}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": process.env.MICRO_CMS_API_KEY || "",
      },
      next: { revalidate: 1 * 60 },
    }
  );

  return await res.json();
};
