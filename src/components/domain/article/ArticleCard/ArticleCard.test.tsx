import renderer from "react-test-renderer";

import { ArticleCard } from "./";

describe("domain/article/ArticleCard", () => {
  it("Snap Shot ArticleCard", () => {
    const component = renderer.create(
      <ArticleCard
        imageUrl="https://placehold.jp/120x120.png"
        description="Firestore は〇〇です。\nガチ完成なのでぜひ読んでくださいね！"
        color="#00b8d2"
        tags={["Front-end", "React"]}
        title="タイトル"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Snap Shot ArticleCard without imageUrl", () => {
    const component = renderer.create(
      <ArticleCard
        description="Firestore は〇〇です。\nガチ完成なのでぜひ読んでくださいね！"
        color="#00b8d2"
        tags={["Front-end", "React"]}
        title="タイトル"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
