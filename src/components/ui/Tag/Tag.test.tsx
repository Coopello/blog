import renderer from "react-test-renderer";

import { Tag } from "./";
// ______________________________________________________
//
describe("ui/Tag", () => {
  it("Snap Shot Chip", () => {
    const component = renderer.create(
      <Tag color="#E10718" text="front-end" filled />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Snap Shot outline Chip", () => {
    const component = renderer.create(<Tag color="#E10718" text="front-end" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Snap Shot button Chip", () => {
    const onClick = jest.fn();

    const component = renderer.create(
      <Tag color="#E10718" text="front-end" onClick={onClick} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
