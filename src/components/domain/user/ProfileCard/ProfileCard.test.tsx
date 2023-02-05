import renderer from "react-test-renderer";

import { ProfileCard } from ".";

describe("ui/ProfileCard", () => {
  it("Snap Shot", () => {
    const component = renderer.create(
      <ProfileCard
        imageUrl="https://placehold.jp/150x150.png"
        myLinks={{
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
  it("Snap Shot no myLinks links", () => {
    const component = renderer.create(
      <ProfileCard
        imageUrl="https://placehold.jp/150x150.png"
        myLinks={{}}
        name="Akito Fukuda"
        description="Web Dev"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
