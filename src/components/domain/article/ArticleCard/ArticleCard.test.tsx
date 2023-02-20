import renderer from "react-test-renderer";

import { ArticleCard } from "./";

describe("domain/article/ArticleCard", () => {
  it("Snap Shot ArticleCard", () => {
    const component = renderer.create(
      <ArticleCard
        imageUrl="https://placehold.jp/150x150.png"
        nickname="ニックネーム"
        description="XXX Developer"
        tagInfoList={[
          { type: "chip", text: "chip" },
          { type: "frontend", text: "frontend" },
          { type: "frontend", text: "frontend" },
        ]}
        title="タイトル"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
