import type { FC } from "react";
import { Suspense } from "react";
import { ArticleLargeCard } from "src/components/domain/article/ArticleLargeCard";
import { RecentArticleArea } from "src/components/domain/article/RecentArticleArea";
import { LabelSection } from "src/components/ui/LabelSection";
import type { Article } from "src/models/article";

type Props = {
  articles: {
    popular: Article[];
    recent: {
      contents: Article[];
      totalCount: number;
    };
  };
};

/**
 * @package
 */
export const Home: FC<Props> = ({ articles }) => {
  return (
    <div className="mx-auto mt-12 flex w-[90%] max-w-[952px] flex-col items-center gap-12 pb-12">
      <LabelSection label={"人気の記事"}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {articles.popular.map((article) => (
            <ArticleLargeCard
              key={article.id}
              description={article.description}
              imageUrl={article.eyecatch.url}
              tags={article.tags.map((tag) => tag.name)}
              color={"#5AC8D8"}
              id={article.id}
            />
          ))}
        </div>
      </LabelSection>
      <Suspense fallback={<div>Loading...</div>}>
        <RecentArticleArea articles={articles.recent} />
      </Suspense>
    </div>
  );
};
