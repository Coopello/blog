"use client";

import type { FC } from "react";
import { ArticleCard } from "src/components/domain/article/ArticleCard";
import { ArticleLargeCard } from "src/components/domain/article/ArticleLargeCard";
import { Button } from "src/components/ui/Button";
import { LabelSection } from "src/components/ui/LabelSection";
import type { Article } from "src/models/article";

type Props = {
  articles: {
    popular: Article[];
    recent: Article[];
  };
};

/**
 * @package
 */
export const Home: FC<Props> = ({ articles }) => {
  return (
    <div className="mx-auto mt-12 flex w-[90%] max-w-[952px] flex-col items-center gap-12 pb-12">
      <LabelSection label={"人気の記事"}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
          {articles.popular.map((article, index) => (
            <ArticleLargeCard
              key={index}
              description={article.description}
              imageUrl={article.thumbnail.url}
              tags={article.tags.map((tag) => tag.name)}
              color={"#5AC8D8"}
            />
          ))}
        </div>
      </LabelSection>
      <LabelSection label={"最近の記事"}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {articles.popular.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              description={article.description}
              imageUrl={article.thumbnail.url}
              tags={article.tags.map((tag) => tag.name)}
              color={"#5AC8D8"}
            />
          ))}
        </div>
      </LabelSection>
      <Button>もっと読む</Button>
    </div>
  );
};
