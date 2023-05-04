import type { FC, ReactNode } from "react";

type Props = {
  label: string;
  children: ReactNode;
};

/**
 * @package
 */
export const LabelSection: FC<Props> = ({ children, label }) => {
  return (
    <section className="flex w-full flex-col gap-4">
      <h2 className="border-l-8 border-custom-primary px-4 py-2 text-2xl text-custom-black">
        {label}
      </h2>
      {children}
    </section>
  );
};
