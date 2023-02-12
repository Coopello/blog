import renderer from "react-test-renderer";
import { LargeProfileCard } from "src/components/domain/user/LargeProfileCard";

import { LabelSection } from "./";

describe("ui/LabelSection", () => {
  it("Snap Shot", () => {
    const component = renderer.create(
      <LabelSection label="記事を書いた人">
        <LargeProfileCard
          imageUrl="https://placehold.jp/150x150.png"
          myLinks={{
            twitter: "https://twitter.com/akt_prs10",
            github: "https://github.com/akito-10",
          }}
          name="Akito Fukuda"
          description="Web Dev"
        />
      </LabelSection>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
