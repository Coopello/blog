"use client";

import type { FC } from "react";
import { ArticleBreadcrumbs } from "src/components/domain/article/ArticleBreadcrumbs";
import { Tag } from "src/components/ui/Tag";
import type { Article } from "src/models/article";

type Props = {
  title: Article["title"];
  tags: Article["tags"];
  content: string;
  id: string;
  type: Article["type"];
};

/**
 * @package
 */
export const ContentArea: FC<Props> = ({ content, id, tags, title, type }) => {
  return (
    <article
      id={id}
      className="prose prose-sm box-border w-full max-w-none rounded bg-white p-4 lg:prose-base sm:p-8"
    >
      <ArticleBreadcrumbs
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: `${type.charAt(0).toUpperCase()}${type.slice(1)}の一覧`,
            href: `/${type}`,
          },
          {
            label: title,
          },
        ]}
      />
      <h1 className="mb-4 border-b-[3px] pb-4 text-[28px] font-medium leading-9 sm:text-[32px] sm:leading-10">
        {title}
      </h1>
      <ul className="mt-0 flex list-none flex-wrap gap-2 p-0">
        {tags.map((tag) => {
          return (
            <li key={tag.name} className="m-0 p-0">
              <Tag color={"#5ac8d8"} text={tag.name} filled />
            </li>
          );
        })}
      </ul>
      {type === "slides" ? (
        <div
          className="aspect-video"
          dangerouslySetInnerHTML={{
            __html: `<iframe
              src="${content}"
              frameborder="0"
              width="100%"
              height="100%"
              allowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></iframe>`,
          }}
        />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </article>
  );
};
