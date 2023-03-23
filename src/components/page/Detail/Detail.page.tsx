// TODO: ArticlePage 作成後に削除する
"use client";

import dynamic from "next/dynamic";
import type { FC } from "react";

const ContentArea = dynamic(
  async () => (await import("src/components/ui/ContentArea")).ContentArea
);

type Props = {
  blogData: any;
};

/**
 * @package
 */
export const Detail: FC<Props> = ({ blogData }) => {
  console.log(blogData);

  return (
    <div>
      {blogData ? (
        <ContentArea content={blogData.content} id="content" />
      ) : null}
    </div>
  );
};
