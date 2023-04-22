/* eslint-disable @typescript-eslint/naming-convention */
import { Home } from "src/components/page/Home";
import type { Article } from "src/models/article";

type Response = {
  contents: Article[];
};

const getPopularArticles = async () => {
  const res = await fetch(`${process.env.MICRO_CMS_API_URL}/blogs?orders=-pv`, {
    next: { revalidate: 10 },
    headers: {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": process.env.MICRO_CMS_API_KEY || "",
    },
    cache: "force-cache",
  });

  return await res.json();
};

const getRecentArticles = async () => {
  const res = await fetch(
    `${process.env.MICRO_CMS_API_URL}/blogs?orders=-publishedAt`,
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
    await getPopularArticles(),
    await getRecentArticles(),
  ]);

  return (
    <Home
      articles={{ popular: popularRes.contents, recent: recentRes.contents }}
    />
  );
}
