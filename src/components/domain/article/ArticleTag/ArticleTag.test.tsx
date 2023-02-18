import renderer from "react-test-renderer";

import { ArticleTag } from "./";

describe("domain/article/ArticleTag", () => {
  it("Snap Shot", () => {
    const component = renderer.create(<ArticleTag type="chip" text="chip" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
