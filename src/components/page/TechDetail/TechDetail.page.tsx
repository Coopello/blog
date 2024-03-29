"use client";

import type { FC } from "react";
import { ArticleCard } from "src/components/domain/article/ArticleCard";
import { ProfileCard } from "src/components/domain/user/ProfileCard";
import { ContentArea } from "src/components/ui/ContentArea";
import { LabelSection } from "src/components/ui/LabelSection";
import type { Article } from "src/models/article";

type Props = {
  article: Article;
  recommendArticles: Article[];
};

/**
 * @package
 */
export const TechDetail: FC<Props> = ({ article, recommendArticles }) => {
  return (
    <div className="mt-6 flex w-full gap-8 px-4 pb-12 sm:mt-8 sm:px-8">
      <div className="flex w-full flex-col items-center gap-6 sm:gap-12">
        {article.content ? (
          <ContentArea
            title={article.title}
            tags={article.tags}
            content={article.content}
            id="content"
            type={article.type}
          />
        ) : null}
        <aside className="w-full">
          <LabelSection label={"この記事を書いた人"}>
            <ProfileCard
              imageUrl={article.author.icon.url}
              myLinks={{
                twitter: article.author.twitter,
                github: article.author.github,
              }}
              name={article.author.name}
              description={article.author.description}
              job={article.author.job}
            />
          </LabelSection>
        </aside>
        <aside className="block sm:w-full lg:hidden">
          {/* TODO: useScreenSize のような custom hooks を実装して、画面幅に応じて size に sm か md を渡す */}
          <LabelSection label={"あなたへのおすすめ"}>
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {recommendArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  description={article.description}
                  tags={article.tags.map((tag) => tag.name)}
                  url={`/tech/${article.id}`}
                  title={article.title}
                />
              ))}
            </div>
          </LabelSection>
        </aside>
      </div>
      <aside className="sticky top-8 hidden h-fit lg:block">
        <LabelSection label={"あなたへのおすすめ"}>
          <div className="flex max-w-[400px] flex-col gap-6">
            {recommendArticles.map((article) => (
              <ArticleCard
                key={article.id}
                description={article.description}
                tags={article.tags.map((tag) => tag.name)}
                title={article.title}
                url={`/tech/${article.id}`}
              />
            ))}
          </div>
        </LabelSection>
      </aside>
    </div>
  );
};
