import type { FC } from "react";
import { ArticleBreadcrumbs } from "src/components/domain/article/ArticleBreadcrumbs";
import { Tag } from "src/components/ui/Tag";
import type { Article } from "src/models/article";

type Props = {
  title: Article["title"];
  color: `#${string}`;
  tags: Article["tags"];
  content: Article["content"];
  id: string;
};

/**
 * @package
 */
export const ContentArea: FC<Props> = ({ color, content, id, tags, title }) => {
  return (
    <article
      id={id}
      className="prose prose-sm box-border w-full max-w-none rounded bg-white p-4 lg:prose-base sm:p-8"
    >
      <ArticleBreadcrumbs
        items={[
          {
            label: "ホーム",
            href: "/",
          },
          {
            label: title,
          },
        ]}
      />
      <h1 className="mb-4 border-b-[3px] pb-4 text-[28px] font-medium leading-9 sm:text-[32px] sm:leading-10">
        {title}
      </h1>
      <ul className="mt-0 flex list-none gap-2 p-0">
        {tags.map((tag) => {
          return (
            <li key={tag.name} className="m-0 p-0">
              <Tag color={color} text={tag.name} filled />
            </li>
          );
        })}
      </ul>
      {content}
    </article>
  );
};
