import renderer from "react-test-renderer";

import { BackHomeButton } from "./";

describe("ui/BackHomeButton", () => {
  it("Snap Shot", () => {
    const component = renderer.create(<BackHomeButton />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
