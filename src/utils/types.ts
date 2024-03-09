import type { Article } from "src/models/article";

export type MicroCmsImage = {
  url: string;
  height: number;
  width: number;
};

export type DetailPageProps = {
  params: { id: string; type: Article["type"] };
};
