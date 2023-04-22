/* eslint-disable @typescript-eslint/naming-convention */
import { Home } from "src/components/page/Home";
import type { Article } from "src/models/article";

type Response = {
  contents: Article[];
};

const getPopularBlogsData = async () => {
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

export default async function HomePage() {
  const res: Response = await getPopularBlogsData();

  return <Home articles={{ popular: res.contents }} />;
}
