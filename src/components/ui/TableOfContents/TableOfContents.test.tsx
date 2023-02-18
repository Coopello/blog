import renderer from "react-test-renderer";

import { TableOfContents } from "./";

describe("ui/TableOfContents", () => {
  it("Snap Shot", () => {
    const component = renderer.create(
      <TableOfContents
        contents={["hoge", "piyo", "fuga"]}
        contentId="contents"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});