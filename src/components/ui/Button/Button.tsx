import type { FC } from "react";

type Props = JSX.IntrinsicElements["button"] & {
  color?: "white";
};

const BUTTON_COLORS = {
  white: "bg-custom-white",
};

/**
 * @package
 */
export const Button: FC<Props> = ({
  className,
  color = "white",
  ...buttonProps
}) => {
  const colorClassName = BUTTON_COLORS[color];

  return (
    <button
      className={`hover:opacity-60 ${colorClassName} ${className}`}
      {...buttonProps}
    />
  );
};
