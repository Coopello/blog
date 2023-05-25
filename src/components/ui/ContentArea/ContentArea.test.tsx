import renderer from "react-test-renderer";

import { ContentArea } from ".";

describe("ui/ContentArea", () => {
  it("Snap Shot", () => {
    const component = renderer.create(
      <ContentArea
        id="test"
        content="<h1>test</h1>"
        title="test"
        tags={[
          { id: "hoge", name: "タグ1" },
          { id: "fuga", name: "タグ2" },
          { id: "piyo", name: "タグ3" },
        ]}
        color="#5ac8d8"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
