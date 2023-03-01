import * as cheerio from "cheerio";
import hljs from "highlight.js";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const id = params.id;

  // FIXME: axios 導入後に移動する
  const res = await fetch(`https://kaito-dogi.microcms.io/api/v1/blogs/${id}`, {
    method: "GET",
    headers: {
      "X-MICROCMS-API-KEY": process.env.MICRO_CMS_API_KEY || "",
    },
  });
  const data = await res.json();

  const $ = cheerio.load(data.content, null, false);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  return NextResponse.json({ ...data, content: `${$.html()}` });
}
