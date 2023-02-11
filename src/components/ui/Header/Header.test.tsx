import renderer from "react-test-renderer";

import { Header } from "./";

describe("ui/Header", () => {
  it("Snap Shot", () => {
    const component = renderer.create(<Header />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
