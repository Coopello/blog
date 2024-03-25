import type { ReactNode } from "react";
import { Home } from "src/components/page/Home";
import { getPopularArticles, getRecentArticles } from "src/request";

export default async function Layout({ children }: { children: ReactNode }) {
  const [popularRes, recentRes] = await Promise.all([
    getPopularArticles(),
    getRecentArticles(),
  ]);

  return (
    <>
      <Home
        articles={{
          popular: popularRes.contents,
          recent: {
            contents: recentRes.contents,
            totalCount: recentRes.totalCount,
          },
        }}
      />
      <div className="mx-auto flex w-[90%] max-w-[952px] flex-col items-center gap-6">
        {children}
      </div>
    </>
  );
}
