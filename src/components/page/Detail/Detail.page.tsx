"use client";

import type { FC } from "react";
import { ArticleCard } from "src/components/domain/article/ArticleCard";
import { ProfileCard } from "src/components/domain/user/ProfileCard";
import { ContentArea } from "src/components/ui/ContentArea";
import { LabelSection } from "src/components/ui/LabelSection";
import type { Article } from "src/models/article";

type Props = {
  article: Article;
};

const dummyNoImageArticle = {
  title: "【徹底解剖】JavaScriptはブラウザでどう動くのか",
  color: "#00b8d2" as const,
  tags: ["Front-end", "React"],
  name: "akito-10",
  description:
    "独学でWebフロントエンドの開発を学び、ONE PIECE を手に入れた男。好きな hooks は useCallback。",
};

/**
 * @package
 */
export const Detail: FC<Props> = ({ article }) => {
  return (
    <div className="mx-auto mt-12 flex w-full max-w-[1484px] gap-12 pb-12 sm:w-[90%]">
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
        <aside className="w-full">
          <LabelSection label={"この記事を書いた人"}>
            <ProfileCard
              imageUrl={"https://placehold.jp/150x150.png"}
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
        <aside className="block w-full lg:hidden">
          <LabelSection label={"あなたへのおすすめ"}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {Array(3)
                .fill(0)
                .map(() => dummyNoImageArticle)
                .map((article, index) => (
                  <ArticleCard key={index} id={article.title} {...article} />
                ))}
            </div>
          </LabelSection>
        </aside>
      </div>
      <aside className="hidden lg:block">
        <LabelSection label={"あなたへのおすすめ"}>
          <div className="flex max-w-[400px] flex-col gap-6">
            {Array(3)
              .fill(0)
              .map(() => dummyNoImageArticle)
              .map((article, index) => (
                <ArticleCard key={index} id={article.title} {...article} />
              ))}
          </div>
        </LabelSection>
      </aside>
    </div>
  );
};
