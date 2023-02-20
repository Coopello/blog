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
          { type: "front-end", text: "front-end" },
          { type: "android", text: "android" },
        ]}
        title="タイトル"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
