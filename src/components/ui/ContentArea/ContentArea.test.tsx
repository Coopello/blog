import renderer from "react-test-renderer";

import { ContentArea } from ".";

describe("ui/ContentArea", () => {
  it("Snap Shot", () => {
    const component = renderer.create(
      <ContentArea
        id="test"
        content="<h1>test</h1>"
        title="test"
        tags={[{ name: "test" }]}
        categoryColor="#000"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
