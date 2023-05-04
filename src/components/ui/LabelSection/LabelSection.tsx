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
        // TODO: padding も size に応じて切り替える
        className="border-custom-primary px-4 py-2 text-custom-black"
      >
        {label}
      </h2>
      {children}
    </section>
  );
};
