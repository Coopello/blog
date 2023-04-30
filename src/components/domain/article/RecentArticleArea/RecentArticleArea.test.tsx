import renderer from "react-test-renderer";
import { RecentArticleArea } from "./";

describe("domain/article/RecentArticleArea", () => {
  it("Snap Shot", () => {
    const component = renderer.create(<RecentArticleArea />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
