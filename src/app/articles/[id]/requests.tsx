import parse, { domToReact } from "html-react-parser";
import { notFound } from "next/navigation";
import type { Article } from "src/models/article";

type Response = {
  contents: Article[];
  totalCount: number;
};

export const getArticleDetail = async (articleId: string): Promise<Article> => {
  const res = await fetch(
    `${process.env.MICRO_CMS_API_URL}/articles/${articleId}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": process.env.MICRO_CMS_API_KEY || "",
      },
      cache: "force-cache",
      next: { revalidate: 10 },
    }
  );

  if (res.status === 404) {
    notFound();
  }

  const data = await res.json();

  const content = parse(data.content, {
    replace: (domNode) => {
      if (
        "name" in domNode &&
        domNode.name === "code" &&
        domNode.parent &&
        "name" in domNode.parent &&
        domNode.parent.name === "pre" &&
        "children" in domNode
      ) {
        return <code className="hljs">{domToReact(domNode.children)}</code>;
      }
    },
  });

  return { ...data, content };
};

export const getRecommendArticles = async (
  articleTagIds: string[]
): Promise<Response> => {
  const filtersConditions = articleTagIds.reduce(
    (filtersConditions, currentId, i) => {
      if (i < articleTagIds.length - 1) {
        return filtersConditions + `tags[contains]${currentId}[or]`;
      }

      return filtersConditions + `tags[contains]${currentId}`;
    },
    ""
  );

  const res = await fetch(
    `${process.env.MICRO_CMS_API_URL}/articles?orders=-pv&limit=3&filters=${filtersConditions}`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-MICROCMS-API-KEY": process.env.MICRO_CMS_API_KEY || "",
      },
      next: { revalidate: 10 },
      cache: "force-cache",
    }
  );

  if (res.status === 404) {
    notFound();
  }

  return await res.json();
};
