import type { FC, MouseEventHandler } from "react";
import { GitHub } from "src/assets/GitHub";
import { Twitter } from "src/assets/Twitter";

import styles from "./Icon.module.css";

type IconType = keyof typeof icons;

const icons = {
  github: GitHub,
  twitter: Twitter,
};

type IconProps = {
  icon: IconType;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "black";
  onClick?: MouseEventHandler<HTMLElement>;
};

/**
 * @package
 */
export const Icon: FC<IconProps> = ({
  color = "black",
  icon,
  onClick,
  size = "md",
}) => {
  const IconComponent = icons[icon];
  const hasOnClick = onClick !== undefined;
  const rootClasses = [
    styles.root,
    styles[`color--${color}`],
    styles[`size--${size}`],
    hasOnClick ? styles.clickable : "",
  ].join(" ");

  return (
    <i className={rootClasses} onClick={hasOnClick ? onClick : undefined}>
      <IconComponent />
    </i>
  );
};
