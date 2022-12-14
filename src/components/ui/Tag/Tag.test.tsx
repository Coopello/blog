import renderer from "react-test-renderer";

import { Tag } from "./";
// ______________________________________________________
//
describe("ui/Tag", () => {
  it("Snap Shot Chip", () => {
    const component = renderer.create(<Tag type="chip" filled />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Snap Shot outline Chip", () => {
    const component = renderer.create(<Tag type="chip" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Snap Shot button Chip", () => {
    const component = renderer.create(
      <Tag type="chip" onClick={() => console.log()} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
