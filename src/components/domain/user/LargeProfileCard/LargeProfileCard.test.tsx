import renderer from "react-test-renderer";

import { LargeProfileCard } from "./";

describe("domain/user/LargeProfileCard", () => {
  it("Snap Shot", () => {
    const component = renderer.create(
      <LargeProfileCard
        imageUrl="https://placehold.jp/150x150.png"
        myUrl={{
          twitter: "https://twitter.com/akt_prs10",
          github: "https://github.com/akito-10",
        }}
        name="Akito Fukuda"
        description="Web Dev"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
