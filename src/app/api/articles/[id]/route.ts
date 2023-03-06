import * as cheerio from "cheerio";
import hljs from "highlight.js";
import { NextResponse } from "next/server";
import { microCMSApiServer } from "src/libs/apiClient";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = params.id;

  const { data } = await microCMSApiServer.get(`/blogs/${id}`);

  const $ = cheerio.load(data.content, null, false);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  return NextResponse.json({ ...data, content: `${$.html()}` });
}
