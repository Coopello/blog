"use client";

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
  outline?: boolean;
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
export const Tag: React.FC<Props> = ({ outline = false, type }) => {
  const { color, text } = TAG_ASSET[type];
  // classNameベースで動的なスタイリングができないので、仕方なくstyle
  const styles = outline
    ? {
        border: `1px solid ${color}`,
        color,
      }
    : {
        color: "white",
        backgroundColor: color,
      };

  return (
    <span className="rounded-full px-6 py-2 text-2xl" style={styles}>
      {text}
    </span>
  );
};
