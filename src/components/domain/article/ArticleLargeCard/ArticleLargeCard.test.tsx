import renderer from "react-test-renderer";

import { ArticleLargeCard } from "./";

describe("domain/article/ArticleLargeCard", () => {
  it("Snap Shot", () => {
    const component = renderer.create(
      <ArticleLargeCard
        imageUrl={"https://placehold.jp/512x512.png"}
        name={"ニックネーム"}
        description={"XXX Developer"}
        color={"#00b8d2"}
        tags={["Front-end", "React"]}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
