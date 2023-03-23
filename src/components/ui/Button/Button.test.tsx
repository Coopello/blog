import renderer from "react-test-renderer";

import { Button } from "./";

describe("ui/Button", () => {
  it("Snap Shot", () => {
    const component = renderer.create(<Button />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
