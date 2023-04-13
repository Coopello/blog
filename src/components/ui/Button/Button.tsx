import type { FC } from "react";

type Props = JSX.IntrinsicElements["button"] & {
  color?: "white";
  size?: "md";
};

const BUTTON_COLORS = {
  white: "bg-custom-white",
};

const BUTTON_SIZES = {
  md: "h-9 w-[256px]",
};

/**
 * @package
 */
export const Button: FC<Props> = ({
  className,
  color = "white",
  size = "md",
  ...buttonProps
}) => {
  const colorClassName = BUTTON_COLORS[color];
  const sizeClassName = BUTTON_SIZES[size];

  return (
    <button
      className={`rounded hover:opacity-60 ${colorClassName} ${sizeClassName} ${className}`}
      {...buttonProps}
    />
  );
};
