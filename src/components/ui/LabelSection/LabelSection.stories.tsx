import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { LargeProfileCard } from "src/components/domain/user/LargeProfileCard";

import { LabelSection } from "./";

export default { title: "ui/LabelSection" } as ComponentMeta<
  typeof LabelSection
>;

export const Initial: ComponentStory<typeof LabelSection> = (args) => (
  <LabelSection {...args} />
);

Initial.args = {
  label: "記事を書いた人",
  children: (
    <LargeProfileCard
      imageUrl="https://placehold.jp/150x150.png"
      myLinks={{
        twitter: "https://twitter.com/akt_prs10",
        github: "https://github.com/akito-10",
      }}
      name="Akito Fukuda"
      description="Web Dev"
    />
  ),
};
