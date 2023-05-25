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
  const isButton = Element === "button";

  // レンダリングの都合上、classNameを動的に設定できないため、inline-styleで対応。
  const style: CSSProperties = filled
    ? {
        color: "white",
        backgroundColor: color,
        opacity: isButton && isHover ? 0.7 : 1.0,
      }
    : {
        color,
        backgroundColor:
          isButton && isHover ? "rgba(0, 0, 0, 0.1)" : "transparent",
      };

  return (
    <Element
      className={"rounded-sm py-1 pl-[6px] pr-2 text-sm"}
      style={style}
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      #{text}
    </Element>
  );
};
