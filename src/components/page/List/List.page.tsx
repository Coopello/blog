"use client";

import { useParams, useRouter } from "next/navigation";
import { type FC } from "react";
import { ArticleListArea } from "src/components/domain/article/ArticleListArea";
import { Tabs } from "src/components/ui/Tabs";
import type { Article } from "src/models/article";

type Props = {
  articles: Article[];
  totalCount: number;
};

/**
 * @package
 */
export const List: FC<Props> = ({ articles, totalCount }) => {
  const router = useRouter();
  const { type } = useParams();
  const tabs = [
    {
      value: undefined,
      label: "All",
    },
    {
      value: "events",
      label: "Events",
    },
    {
      value: "slides",
      label: "Slides",
    },
    {
      value: "tech",
      label: "Tech",
    },
  ];

  return (
    <Tabs
      className="min-h-[1000px] w-full"
      tabs={tabs.map((tab) => ({
        ...tab,
        content: (
          <ArticleListArea articles={articles} totalCount={totalCount} />
        ),
      }))}
      activeTabIndex={tabs.findIndex((tab) => type === tab.value)}
      onTabChange={(index) => {
        router.push(tabs[index].value ? `/${tabs[index].value}` : "/");
      }}
    />
  );
};
