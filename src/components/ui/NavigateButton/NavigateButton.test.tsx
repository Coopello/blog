import { forwardRef } from "react";
import renderer from "react-test-renderer";
import { Twitter } from "src/assets/Twitter";

import { NavigateButton } from "./";

describe("ui/NavigateButton", () => {
  it("Snap Shot isBlank true", () => {
    const component = renderer.create(
      <NavigateButton href={"https://twitter.com/akt_prs10"} isBlank>
        <TwitterIcon />
      </NavigateButton>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Snap Shot isBlank false", () => {
    const component = renderer.create(
      <NavigateButton href={"https://twitter.com/akt_prs10"}>
        <TwitterIcon />
      </NavigateButton>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

const TwitterIcon = forwardRef<HTMLSpanElement>((_, ref) => {
  return (
    <span ref={ref}>
      <Twitter />
    </span>
  );
});

TwitterIcon.displayName = "TwitterIcon";
