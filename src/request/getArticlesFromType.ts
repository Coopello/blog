import type { Article } from "src/models/article";
import { REVALIDATE_TIME } from "src/utils/constants";

const PAGE_LIMIT = 100;

/**
 * @package
 */
export type ArticlesFromTypeResponse = {
  contents: Article[];
  totalCount: number;
};

/**
 * @package
 */
export const getArticlesFromType = async (type: string, page: string) => {
  const res = await fetch(
    `${process.env.MICRO_CMS_API_URL}/articles?${type !== "" ? `filters=type[contains]${type}` : ""}&limit=${PAGE_LIMIT}&offset=${(Number(page) - 1) * PAGE_LIMIT}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": process.env.MICRO_CMS_API_KEY || "",
      },
      next: { revalidate: REVALIDATE_TIME },
    },
  );

  return await res.json();
};
