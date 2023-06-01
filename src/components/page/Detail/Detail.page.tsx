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
export const Detail: FC<Props> = ({ article, recommendArticles }) => {
  return (
    <div className="mx-auto mt-6 flex w-full max-w-[1484px] gap-12 pb-12 sm:mt-12 sm:w-[90%]">
      <div className="flex w-full flex-col items-center gap-12">
        {article ? (
          <ContentArea
            title={article.title}
            tags={article.tags}
            content={article.content}
            color={"#5ac8d8"}
            id="content"
          />
        ) : null}
        <aside className="w-[90%] sm:w-full">
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
        <aside className="block w-[90%] sm:w-full lg:hidden">
          {/* TODO: useScreenSize のような custom hooks を実装して、画面幅に応じて size に sm か md を渡す */}
          <LabelSection label={"あなたへのおすすめ"}>
            <div className="grid grid-cols-1 gap-6">
              {recommendArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  description={article.description}
                  tags={article.tags.map((tag) => tag.name)}
                  color={"#5AC8D8"}
                  id={article.id}
                  title={article.title}
                />
              ))}
            </div>
          </LabelSection>
        </aside>
      </div>
      <aside className="hidden lg:block">
        <LabelSection label={"あなたへのおすすめ"}>
          <div className="flex max-w-[400px] flex-col gap-6">
            {recommendArticles.map((article) => (
              <ArticleCard
                key={article.id}
                description={article.description}
                tags={article.tags.map((tag) => tag.name)}
                color={"#5AC8D8"}
                title={article.title}
                id={article.id}
              />
            ))}
          </div>
        </LabelSection>
      </aside>
    </div>
  );
};
