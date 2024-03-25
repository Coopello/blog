import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getArticlesFromType } from "src/request";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get("type");
  const page = searchParams.get("page");

  const articles = await getArticlesFromType(type || "", page || "1");

  return NextResponse.json(articles);
}
