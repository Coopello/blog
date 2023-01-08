import Link from "next/link";
import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  href: string;
  isBlank?: boolean;
};

/**
 * @package
 */
export const NavigateButton: FC<Props> = ({
  className,
  isBlank = false,
  ...restProps
}) => {
  const blankProps = isBlank
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Link
      className={`${className} grid place-content-center rounded-full p-2 hover:bg-gray-200`}
      {...blankProps}
      {...restProps}
    />
  );
};
