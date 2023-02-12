"use client";

import type { FC } from "react";

type TagType =
  | "chip"
  | "frontend"
  | "backend"
  | "mobile"
  | "infrastructure"
  | "design"
  | "us";

type Props = {
  type: TagType;
  filled?: boolean;
  onClick?: () => void;
};

const TAG_ASSET = {
  chip: {
    text: "Chip",
    color: "#222222",
  },
  frontend: {
    text: "Frontend",
    color: "#FF7971",
  },
  backend: {
    text: "Backend",
    color: "#717FFF",
  },
  mobile: {
    text: "Mobile",
    color: "#43DC49",
  },
  infrastructure: {
    text: "Infrastructure",
    color: "#FFBA69",
  },
  design: {
    text: "Design",
    color: "#A055FF",
  },
  us: {
    text: "Us",
    color: "#5AC8D8",
  },
} as const;

/**
 * @package
 */
export const Tag: FC<Props> = ({ filled = false, onClick, type }) => {
  const { color, text } = TAG_ASSET[type];
  // classNameベースで動的なスタイリングができないので、仕方なくstyle
  const styles = filled
    ? {
        color: "white",
        backgroundColor: color,
      }
    : {
        border: `1px solid ${color}`,
        color,
      };

  const Element = onClick ? "button" : "span";

  return (
    <Element
      className="rounded-full px-4 py-2 text-xs font-bold"
      style={styles}
      onClick={onClick}
    >
      {text}
    </Element>
  );
};
