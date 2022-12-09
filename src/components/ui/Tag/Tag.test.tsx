import renderer from "react-test-renderer";

import { Tag } from "./";
// ______________________________________________________
//
describe("ui/Tag", () => {
  it("Snap Shot", () => {
    const component = renderer.create(<Tag type="chip" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
