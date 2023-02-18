import renderer from "react-test-renderer";

import { ArticleCard } from "./";

describe("ui/ArticleCard", () => {
  it("Snap Shot ArticleCard", () => {
    const component = renderer.create(
      <ArticleCard
        imageUrl="https://placehold.jp/150x150.png"
        nickname="ニックネーム"
        description="XXX Developer"
        tagsInfo={[
          { type: "chip", text: "chip" },
          { type: "frontend", text: "frontend" },
        ]}
        title="タイトル"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
