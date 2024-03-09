import { NextResponse } from "next/server";
import { getArticleDetailSitemapList } from "src/request";

export async function GET(_request: Request) {
  const articleDetailSitemapList = await getArticleDetailSitemapList();

  return NextResponse.json(articleDetailSitemapList);
}
