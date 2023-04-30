"use client";

import type { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ArticleCard } from "src/components/domain/article/ArticleCard";
import { Button } from "src/components/ui/Button";
import { LabelSection } from "src/components/ui/LabelSection";
import type { Article } from "src/models/article";
import { DISPLAY_ARTICLE_CARD_PER_PAGE } from "src/utils/constants";
import useSWR from "swr";

type Props = {
  articles: {
    contents: Article[];
    totalCount: number;
  };
};
/**
 * @package
 */
export const RecentArticleArea: FC<Props> = ({ articles }) => {
  const [page, setPage] = useState(0);
  const [currentArticles, setCurrentArticles] = useState<Article[]>(
    articles.contents
  );
  const { data } = useSWR<{
    data: {
      contents: Article[];
      totalCount: number;
    };
  }>(
    page !== 0
      ? `/blogs?offset=${
          page * DISPLAY_ARTICLE_CARD_PER_PAGE
        }&limit=${DISPLAY_ARTICLE_CARD_PER_PAGE}`
      : null
  );

  useEffect(() => {
    if (!data) return;

    setCurrentArticles((prev) => {
      if (!prev) {
        return data.data.contents;
      }

      return [...prev, ...data.data.contents];
    });
  }, [data]);

  return (
    <>
      <LabelSection label={"最近の記事"}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {currentArticles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              description={article.description}
              imageUrl={article.thumbnail.url}
              tags={article.tags.map((tag) => tag.name)}
              color={"#5AC8D8"}
              id={article.id}
            />
          ))}
        </div>
      </LabelSection>
      {articles.totalCount > DISPLAY_ARTICLE_CARD_PER_PAGE * (page + 1) ? (
        <Button onClick={() => setPage((prev) => prev + 1)}>もっと読む</Button>
      ) : null}
    </>
  );
};
