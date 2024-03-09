import type { Article } from "src/models/article";
import { SITE_URL } from "src/utils/constants";
import { DATE_FORMAT, dateFormat } from "src/utils/date";

export type ArticleDetailSitemapListResponse = {
  url: string;
  lastModified: string;
}[];

/**
 * @package
 */
export const getArticleDetailSitemapList =
  async (): Promise<ArticleDetailSitemapListResponse> => {
    const res = await fetch(
      `${process.env.MICRO_CMS_API_URL}/articles?fields=id,updatedAt,type&limit=100`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-MICROCMS-API-KEY": process.env.MICRO_CMS_API_KEY || "",
        },
      },
    );

    const data = await res.json();
    const articleSitemapList = data.contents.map((article: Article) => {
      return {
        url: `${SITE_URL}/${article.type[0]}/${article.id}`,
        lastModified: dateFormat(article.updatedAt, DATE_FORMAT.DATE),
      };
    });

    return articleSitemapList;
  };
