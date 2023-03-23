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
export const Detail: FC<Props> = ({ article }) => {
  return (
    <>
      <div className="mx-auto mt-12 flex w-[90%] max-w-[952px] flex-col items-center gap-12">
        <section className="w-full">
          {article ? (
            <ContentArea content={article.content} id="content" />
          ) : null}
        </section>
        <LabelSection label={"この記事を書いた人"}>
          <ProfileCard
            imageUrl={"https://placehold.jp/150x150.png"}
            myLinks={{
              twitter: "https://twitter.com/akt_prs10",
              github: "https://github.com/akito-10",
            }}
            name={"Akito Fukuda"}
            description={"Web Dev"}
            job={"Web Dev"}
          />
        </LabelSection>
        <LabelSection label={"おすすめの記事"}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {Array(10)
              .fill(0)
              .map(() => dummyArticle)
              .map((article, index) => (
                <ArticleCard key={index} {...article} />
              ))}
          </div>
        </LabelSection>
      </div>
      <div>{/* サブカラム */}</div>
    </>
  );
};
