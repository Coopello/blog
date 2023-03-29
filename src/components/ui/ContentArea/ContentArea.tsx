"use client";

import parse from "html-react-parser";
import type { FC } from "react";
import { CategoryTag } from "src/components/domain/category/CategoryTag";
import type { Article } from "src/models/article";

type Props = {
  title: Article["title"];
  categoryColor: Article["category"]["color"];
  tags: Article["tags"];
  content: Article["content"];
  id: string;
};

/**
 * @package
 */
export const ContentArea: FC<Props> = ({
  categoryColor,
  content,
  id,
  tags,
  title,
}) => {
  console.log(tags);

  return (
    <article
      id={id}
      className="prose prose-sm box-border w-full max-w-none rounded bg-white p-8 lg:prose-base"
    >
      <h1 className="mb-4 border-b-[3px] pb-4">{title}</h1>
      <ul className="mt-0 flex list-none p-0">
        {tags.map((tag) => {
          return (
            <li key={tag.name} className="m-0 p-0">
              <CategoryTag color={categoryColor} text={tag.name} filled />
            </li>
          );
        })}
      </ul>
      {parse(content)}
    </article>
  );
};
