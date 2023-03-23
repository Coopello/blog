"use client";

import type { FC } from "react";
import { ArticleCard } from "src/components/domain/article/ArticleCard";
import { ArticleLargeCard } from "src/components/domain/article/ArticleLargeCard";
import { Button } from "src/components/ui/Button";
import { LabelSection } from "src/components/ui/LabelSection";

const dummyLargeArticle = {
  title: "【徹底解剖】JavaScriptはブラウザでどう動くのか",
  imageUrl: "/static/dummy_thumbnail.png",
  color: "#00b8d2" as const,
  tags: ["Front-end", "React"],
  name: "akito-10",
  description: "独学でWebフロントエンドの開発を学び、ONE PIECE を手に入れた男",
};

const dummyArticle = {
  title: "【徹底解剖】JavaScriptはブラウザでどう動くのか",
  imageUrl: "/static/dummy_icon.png",
  color: "#00b8d2" as const,
  tags: ["Front-end", "React"],
  name: "akito-10",
  description: "独学でWebフロントエンドの開発を学び、ONE PIECE を手に入れた男",
};

/**
 * @package
 */
export const Home: FC = () => {
  return (
    <div className="mx-auto mt-12 flex w-[90%] max-w-[952px] flex-col items-center gap-12">
      <LabelSection label={"人気の記事"}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
          {Array(4)
            .fill(0)
            .map(() => dummyLargeArticle)
            .map((article, index) => (
              <ArticleLargeCard key={index} {...article} />
            ))}
        </div>
      </LabelSection>
      <LabelSection label={"最近の記事"}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {Array(10)
            .fill(0)
            .map(() => dummyArticle)
            .map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
        </div>
      </LabelSection>
      <Button className="h-9 w-[256px] px-4">もっと読む</Button>
    </div>
  );
};
