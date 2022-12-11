import renderer from "react-test-renderer";

import { Tag } from "./";
// ______________________________________________________
//
describe("ui/Tag", () => {
  it("Snap Shot Chip", () => {
    const component = renderer.create(<Tag type="chip" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Snap Shot outline Chip", () => {
    const component = renderer.create(<Tag type="chip" outline />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
