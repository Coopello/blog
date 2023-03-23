/* eslint-disable @typescript-eslint/naming-convention */
// TODO: ArticlePage 作成後に削除する
import { Detail } from "src/components/page/Detail";

const getBlogData = async (blogId: string) => {
  const res = await fetch(`${process.env.MICRO_CMS_API_URL}/blogs/${blogId}`, {
    headers: {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": process.env.MICRO_CMS_API_KEY || "",
    },
    cache: "force-cache",
  });

  return await res.json();
};

export default async function DetailPage({
  params,
}: {
  params: { id: string };
}) {
  const blogData = await getBlogData(params.id);

  return <Detail blogData={blogData} />;
}
