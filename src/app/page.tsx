import { getPopularArticles, getRecentArticles } from "src/app/requests";
import { Home } from "src/components/page/Home";

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
