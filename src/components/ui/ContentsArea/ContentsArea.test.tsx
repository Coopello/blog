import renderer from "react-test-renderer";
import { ContentsArea } from "./";

describe("ui/ContentsArea", () => {
  it("Snap Shot", () => {
    const component = renderer.create(<ContentsArea />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
