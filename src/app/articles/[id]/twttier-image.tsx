import { ImageResponse } from "next/server";
import { getArticleDetail } from "src/app/articles/[id]/requests";

export const runtime = "edge";

export const alt = "Article Detail";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { id: string } }) {
  const article = await getArticleDetail(params.id);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{ height: 40, backgroundColor: "#5AC8D8", width: "100%" }}
        />
        <h1
          style={{
            flex: 1,
            maxWidth: "80%",
            display: "grid",
            placeContent: "center",
          }}
        >
          {article.title}
        </h1>
        <div
          style={{ height: 40, backgroundColor: "#5AC8D8", width: "100%" }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
