import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProfileCard } from "src/components/domain/user/ProfileCard";

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
    <ProfileCard
      imageUrl="https://placehold.jp/150x150.png"
      myLinks={{
        twitter: "akt_prs10",
        github: "akito-10",
      }}
      name="Akito Fukuda"
      description="Web Dev"
      job="Web Dev"
    />
  ),
};
