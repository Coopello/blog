import { NextResponse } from "next/server";
import { getArticleDetail } from "src/request";
import type { DetailPageProps } from "src/utils/types";

export async function GET(_request: Request, context: DetailPageProps) {
  const article = await getArticleDetail(context.params.id);

  return NextResponse.json({
    article,
  });
}
