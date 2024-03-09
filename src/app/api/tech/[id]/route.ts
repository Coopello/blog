import { NextResponse } from "next/server";
import { getArticleDetail, getRecommendArticles } from "src/request";
import type { DetailPageProps } from "src/utils/types";

export async function GET(_request: Request, context: DetailPageProps) {
  const [article, recommendArticlesResponse] = await Promise.all([
    getArticleDetail(context.params.id),
    getRecommendArticles(context.params.id),
  ]);

  return NextResponse.json({
    article,
    recommendArticlesResponse,
  });
}
