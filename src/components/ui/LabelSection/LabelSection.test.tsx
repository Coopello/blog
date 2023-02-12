import renderer from "react-test-renderer";
import { LabelSection } from "./";

describe("ui/LabelSection", () => {
  it("Snap Shot", () => {
    const component = renderer.create(<LabelSection />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
