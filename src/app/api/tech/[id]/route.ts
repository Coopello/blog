import { NextResponse } from "next/server";
import { getArticleDetail, getRecommendArticles } from "src/request";

export async function GET(
  _request: Request,
  context: { params: { id: string } },
) {
  const [article, recommendArticlesResponse] = await Promise.all([
    getArticleDetail(context.params.id),
    getRecommendArticles(context.params.id),
  ]);

  return NextResponse.json({
    article,
    recommendArticlesResponse,
  });
}
