import renderer from "react-test-renderer";

import { CategoryTag } from ".";

describe("domain/category/ArticleTag", () => {
  it("Snap Shot", () => {
    const component = renderer.create(
      <CategoryTag color="#00b8d2" text="front-end" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
