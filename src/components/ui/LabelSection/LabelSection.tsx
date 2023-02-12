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
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-custom-black">{label}</h2>
      {children}
    </section>
  );
};
