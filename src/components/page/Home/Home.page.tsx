import type { FC } from "react";
import { ArticleCard } from "src/components/domain/article/ArticleCard";
import { ArticleLargeCard } from "src/components/domain/article/ArticleLargeCard";
import { Button } from "src/components/ui/Button";
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

const DISPLAY_RECENT_ARTICLE_CARD_MAX_COUNT = 6;

/**
 * @package
 */
export const Home: FC<Props> = ({ articles }) => {
  return (
    <div className="mx-auto mt-12 flex w-[90%] max-w-[952px] flex-col items-center gap-12 pb-12">
      <LabelSection label={"人気の記事"}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
          {articles.popular.map((article) => (
            <ArticleLargeCard
              key={article.id}
              description={article.description}
              imageUrl={article.thumbnail.url}
              tags={article.tags.map((tag) => tag.name)}
              color={"#5AC8D8"}
              id={article.id}
            />
          ))}
        </div>
      </LabelSection>
      <LabelSection label={"最近の記事"}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {articles.recent.contents.map((article) => (
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
      {articles.recent.totalCount > DISPLAY_RECENT_ARTICLE_CARD_MAX_COUNT ? (
        <Button>もっと読む</Button>
      ) : null}
    </div>
  );
};
