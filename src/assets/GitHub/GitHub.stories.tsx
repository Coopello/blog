import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { GitHub } from "./";

export default { title: "assets/GitHub" } as ComponentMeta<typeof GitHub>;

export const initial: ComponentStory<typeof GitHub> = () => <GitHub />;
