import renderer from "react-test-renderer";

import { ArticleCard } from "./";

describe("ui/ArticleCard", () => {
  it("Snap Shot", () => {
    const component = renderer.create(<ArticleCard />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
