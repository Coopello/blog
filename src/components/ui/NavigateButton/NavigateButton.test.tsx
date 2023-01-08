import renderer from "react-test-renderer";
import { Twitter } from "src/assets/Twitter";

import { NavigateButton } from "./";

describe("ui/NavigateButton", () => {
  it("Snap Shot isBlank true", () => {
    const component = renderer.create(
      <NavigateButton href={"https://twitter.com/akt_prs10"} isBlank>
        <Twitter />
      </NavigateButton>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Snap Shot isBlank false", () => {
    const component = renderer.create(
      <NavigateButton href={"https://twitter.com/akt_prs10"}>
        <Twitter />
      </NavigateButton>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
