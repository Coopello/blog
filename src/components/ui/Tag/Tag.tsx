"use client";

import type { CSSProperties, FC } from "react";
import { useState } from "react";

type Props = {
  color: `#${string}`;
  text: string;
  filled?: boolean;
  onClick?: () => void;
};

/**
 * @package
 */
export const Tag: FC<Props> = ({ color, filled = false, onClick, text }) => {
  // inline-styleで対応しているため、stateを使用してhoverを制御。
  const [isHover, setIsHover] = useState(false);
  const Element = onClick ? "button" : "span";

  // レンダリングの都合上、classNameを動的に設定できないため、inline-styleで対応。
  const style: CSSProperties = filled
    ? {
        color: "white",
        backgroundColor: color,
        opacity: isHover ? 0.7 : 1.0,
        paddingLeft: 12,
        paddingRight: 12,
      }
    : {
        color,
        backgroundColor: isHover ? "rgba(0, 0, 0, 0.1)" : "white",
        paddingLeft: 8,
        paddingRight: 8,
      };

  return (
    <Element
      className={"rounded-sm text-sm"}
      style={style}
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      #{text}
    </Element>
  );
};
