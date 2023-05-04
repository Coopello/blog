import renderer from "react-test-renderer";
import { ArticleBreadcrumbList } from "./";

describe("domain/article/ArticleBreadcrumbList", () => {
  it("Snap Shot", () => {
    const component = renderer.create(<ArticleBreadcrumbList />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
