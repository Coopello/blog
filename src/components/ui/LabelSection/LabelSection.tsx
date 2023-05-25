import type { CSSProperties, FC, ReactNode } from "react";

type Props = {
  label: string;
  children: ReactNode;
  size?: "sm" | "md";
};

type Styles = {
  section: CSSProperties;
  heading: CSSProperties;
};

const styles: {
  sm: Styles;
  md: Styles;
} = {
  md: {
    section: {
      gap: "1rem",
    },
    heading: {
      fontSize: "1.5rem",
      lineHeight: "2rem",
      borderLeftWidth: 8,
    },
  },
  // TODO: sm の style の値の調整をする
  sm: {
    section: {
      gap: "1rem",
    },
    heading: {
      fontSize: "1.5rem",
      lineHeight: "2rem",
      borderLeftWidth: 8,
    },
  },
};

/**
 * @package
 */
export const LabelSection: FC<Props> = ({ children, label, size = "md" }) => {
  return (
    <section style={styles[size].section} className="flex w-full flex-col">
      <h2
        style={styles[size].heading}
        className="border-custom-primary px-2 py-1 text-custom-black sm:px-4 sm:py-2"
      >
        {label}
      </h2>
      {children}
    </section>
  );
};
