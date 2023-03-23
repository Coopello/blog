"use client";

import dynamic from "next/dynamic";
import type { FC } from "react";
import type { Article } from "src/models/article";

const ContentArea = dynamic(
  async () => (await import("src/components/ui/ContentArea")).ContentArea
);

type Props = {
  article: Article;
};

/**
 * @package
 */
export const Detail: FC<Props> = ({ article }) => {
  console.log(article);

  return (
    <div>
      {article ? <ContentArea content={article.content} id="content" /> : null}
    </div>
  );
};
