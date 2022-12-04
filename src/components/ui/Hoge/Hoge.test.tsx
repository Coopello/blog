import renderer from "react-test-renderer";
import { Hoge } from "./";
// ______________________________________________________
//
describe("ui/Hoge", () => {
  it("Snap Shot", () => {
    const component = renderer.create(<Hoge />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
