import renderer from "react-test-renderer";
import { ArticleLargeCard } from "./";

describe("domain/article/ArticleLargeCard", () => {
  it("Snap Shot", () => {
    const component = renderer.create(<ArticleLargeCard />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
