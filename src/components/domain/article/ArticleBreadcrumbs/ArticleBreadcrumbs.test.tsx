import renderer from "react-test-renderer";

import { ArticleBreadcrumbs } from "./";

describe("domain/article/ArticleBreadcrumbs", () => {
  it("Snap Shot", () => {
    const component = renderer.create(
      <ArticleBreadcrumbs
        items={[{ label: "test", href: "/" }, { label: "test" }]}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
