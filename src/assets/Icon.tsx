import Link from "next/link";
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
  color?: "black";
  href?: string;
  icon: IconType;
  isBlank?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

/**
 * @package
 */
export const Icon: FC<IconProps> = ({
  color = "black",
  href,
  icon,
  isBlank = false,
  onClick,
  size = "md",
}) => {
  const IconComponent = icons[icon];
  const hasOnClick = onClick !== undefined || href;
  const rootClasses = [
    styles.root,
    styles[`color--${color}`],
    styles[`size--${size}`],
    hasOnClick ? styles.clickable : "",
  ].join(" ");
  const blankProps = isBlank
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return href ? (
    <Link href={href} {...blankProps}>
      <i className={rootClasses} onClick={onClick}>
        <IconComponent />
      </i>
    </Link>
  ) : (
    <i className={rootClasses} onClick={onClick}>
      <IconComponent />
    </i>
  );
};
