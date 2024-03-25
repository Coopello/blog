import type { FC } from "react";

type Props = JSX.IntrinsicElements["button"] & {
  color?: "primary" | "secondary" | "tertiary" | "white";
  size?: "md" | "lg" | "sm";
};

const BUTTON_COLORS = {
  primary: "bg-custom-primary text-white",
  secondary: "bg-custom-black text-white",
  tertiary: "bg-custom-gray text-white",
  white: "bg-white text-custom-black",
};

const BUTTON_SIZES = {
  sm: "h-9 w-[128px]",
  md: "h-9 w-[256px]",
  lg: "h-9 w-[384px]",
};

/**
 * @package
 */
export const Button: FC<Props> = ({
  className,
  color = "primary",
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
