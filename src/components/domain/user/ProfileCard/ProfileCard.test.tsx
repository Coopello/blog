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
        description={`大学2年生でAndroidアプリ開発を始め、ONE PIECEを手に入れた男
最近のマイブームはメンズメイク。
綺麗になりたいお年頃。ちなみに今年は年男。`}
        job="Web Dev"
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
        description={`大学2年生でAndroidアプリ開発を始め、ONE PIECEを手に入れた男
最近のマイブームはメンズメイク。
綺麗になりたいお年頃。ちなみに今年は年男。`}
        job="Web Dev"
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
