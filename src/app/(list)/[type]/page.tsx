import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { List } from "src/components/page/List";
import type { ArticlesFromTypeResponse } from "src/request";
import { REVALIDATE_TIME, SITE_URL } from "src/utils/constants";
import type { ListTypePageProps } from "src/utils/types";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Coopello Blog",
    description:
      "現役エンジニア2人が運営するCoopello（こぺろ）のテックブログです。技術情報や交流イベントなどの情報を日々発信していきます。",
    alternates: {
      canonical: SITE_URL,
    },
  };
};

const getArticlesData = async ({
  page,
  type,
}: ListTypePageProps["params"]): Promise<ArticlesFromTypeResponse> => {
  const res = await fetch(
    `${process.env.BASE_URL}/api/list?type=${type}&page=${page || "1"}`,
    {
      next: {
        revalidate: REVALIDATE_TIME,
      },
    },
  );
  if (res.status === 404) {
    notFound();
  }

  return await res.json();
};

export default async function ListPage({ params }: ListTypePageProps) {
  const { contents, totalCount } = await getArticlesData(params);

  return <List articles={contents} totalCount={totalCount} />;
}
