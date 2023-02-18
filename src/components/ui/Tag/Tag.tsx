"use client";

import type { CSSProperties, FC } from "react";
import { useState } from "react";

type Props = {
  tagInfo: {
    color: `#${string}`;
    text: string;
  };
  filled?: boolean;
  onClick?: () => void;
};

/**
 * @package
 */
export const Tag: FC<Props> = ({ filled = false, onClick, tagInfo }) => {
  // inline-styleで対応しているため、stateを使用してhoverを制御。
  const [isHover, setIsHover] = useState(false);
  const { color, text } = tagInfo;
  const Element = onClick ? "button" : "span";

  // レンダリングの都合上、classNameを動的に設定できないため、inline-styleで対応。
  const tagStyle: CSSProperties = filled
    ? {
        color: "white",
        backgroundColor: color,
        opacity: isHover ? 0.7 : 1.0,
      }
    : {
        color,
        backgroundColor: isHover ? "rgba(0, 0, 0, 0.1)" : "white",
      };

  return (
    <Element
      className={"rounded-sm px-3 py-1 text-sm"}
      style={tagStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      #{text}
    </Element>
  );
};
