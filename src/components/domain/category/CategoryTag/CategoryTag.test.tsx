import renderer from "react-test-renderer";

import { CategoryTag } from ".";

describe("domain/category/ArticleTag", () => {
  it("Snap Shot", () => {
    const component = renderer.create(
      <CategoryTag type="frontend" text="frontend" />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
