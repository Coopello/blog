import { NextResponse } from "next/server";
import { getArticleDetail } from "src/request";

export async function GET(
  _request: Request,
  context: { params: { id: string } }
) {
  const article = await getArticleDetail(context.params.id);

  return NextResponse.json({
    article,
  });
}
