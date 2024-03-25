import type { Article } from "src/models/article";

export type MicroCmsImage = {
  url: string;
  height: number;
  width: number;
};

export type DetailPageProps = {
  params: { id: string; type: Article["type"] };
};

export type ListTypePageProps = {
  params: { type: "events" | "slides" | "tech" | ""; page: string | undefined };
};
