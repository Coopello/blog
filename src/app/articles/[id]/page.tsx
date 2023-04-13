/* eslint-disable @typescript-eslint/naming-convention */
import { notFound } from "next/navigation";
import { Detail } from "src/components/page/Detail";
import type { Article } from "src/models/article";

const getBlogData = async (blogId: string) => {
  const res = await fetch(`${process.env.MICRO_CMS_API_URL}/blogs/${blogId}`, {
    headers: {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": process.env.MICRO_CMS_API_KEY || "",
    },
    cache: "force-cache",
  });

  if (res.status === 404) {
    notFound();
  }

  return await res.json();
};

export default async function DetailPage({
  params,
}: {
  params: { id: string };
}) {
  const article: Article = await getBlogData(params.id);

  return <Detail article={article} />;
}
