import renderer from "react-test-renderer";

import { ArticleCard } from "./";

describe("domain/article/ArticleCard", () => {
  it("Snap Shot ArticleCard", () => {
    const component = renderer.create(
      <ArticleCard
        imageUrl="https://placehold.jp/120x120.png"
        name="名前"
        description="XXX Developer"
        category="front-end"
        tags={["Front-end", "React"]}
        title="タイトル"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
