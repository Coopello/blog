import { Tag } from "./";
import type { Props } from "./Tag";

export default { title: "ui/Tag" };

export const initial = (args: Props) => <Tag {...args} />;
initial.args = {
  type: "chip",
  outline: false,
};

export const frontend = (args: Props) => <Tag {...args} />;
frontend.args = {
  type: "frontend",
  outline: false,
};

export const backend = (args: Props) => <Tag {...args} />;
backend.args = {
  type: "backend",
  outline: false,
};

export const mobile = (args: Props) => <Tag {...args} />;
mobile.args = {
  type: "mobile",
  outline: false,
};

export const infrastructure = (args: Props) => <Tag {...args} />;
infrastructure.args = {
  type: "infrastructure",
  outline: false,
};

export const design = (args: Props) => <Tag {...args} />;
design.args = {
  type: "design",
  outline: false,
};

export const us = (args: Props) => <Tag {...args} />;
us.args = {
  type: "us",
  outline: false,
};
