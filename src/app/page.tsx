/* eslint-disable @typescript-eslint/naming-convention */
import { Home } from "src/components/page/Home";
import type { Article } from "src/models/article";
import { DISPLAY_ARTICLE_CARD_PER_PAGE } from "src/utils/constants";

type Response = {
  contents: Article[];
  totalCount: number;
};

const getPopularArticles = async () => {
  const res = await fetch(
    `${process.env.MICRO_CMS_API_URL}/articles?orders=-pv&limit=4`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": process.env.MICRO_CMS_API_KEY || "",
      },
      next: { revalidate: 10 },
      cache: "force-cache",
    }
  );

  return await res.json();
};

const getRecentArticles = async () => {
  const res = await fetch(
    `${process.env.MICRO_CMS_API_URL}/articles?orders=-publishedAt&limit=${DISPLAY_ARTICLE_CARD_PER_PAGE}`,
    {
      next: { revalidate: 10 },
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": process.env.MICRO_CMS_API_KEY || "",
      },
      cache: "force-cache",
    }
  );

  return await res.json();
};

export default async function HomePage() {
  const [popularRes, recentRes]: Response[] = await Promise.all([
    getPopularArticles(),
    getRecentArticles(),
  ]);

  return (
    <Home
      articles={{
        popular: popularRes.contents,
        recent: {
          contents: recentRes.contents,
          totalCount: recentRes.totalCount,
        },
      }}
    />
  );
}
