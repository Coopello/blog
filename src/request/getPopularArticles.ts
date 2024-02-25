import type { Article } from "src/models/article";
import { REVALIDATE_TIME } from "src/utils/constants";

/**
 * @package
 */
export type PopularArticlesResponse = {
  contents: Article[];
  totalCount: number;
};

/**
 * @package
 */
export const getPopularArticles =
  async (): Promise<PopularArticlesResponse> => {
    const res = await fetch(
      `${process.env.MICRO_CMS_API_URL}/articles?orders=-pv&limit=4`,
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
