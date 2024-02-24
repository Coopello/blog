import type { Metadata } from "next";
import { getPopularArticles, getRecentArticles } from "src/app/requests";
import { Home } from "src/components/page/Home";

export const generateMetadata = async (): Promise<Metadata> => {

  return {
    title: "Coopello Blog",
  description:
    "現役エンジニア2人が運営するCoopello（こぺろ）のテックブログです。技術情報や交流イベントなどの情報を日々発信していきます。",
    alternates: {
      canonical: `https://coopello.blog`,
    },
  };
};

export default async function HomePage() {
  const [popularRes, recentRes] = await Promise.all([
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
