import { ImageResponse } from "next/og";
import { OpenGraphImage } from "src/components/domain/article/OpenGraphImage";
import { getArticleDetail } from "src/request";
import type { DetailPageProps } from "src/utils/types";

export const revalidate = "force-cache";
export const runtime = "nodejs";

export const alt = "Article Detail";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: DetailPageProps) {
  const article = await getArticleDetail(params.id);

  return new ImageResponse(<OpenGraphImage article={article} />, {
    ...size,
  });
}
