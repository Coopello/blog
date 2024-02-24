import Link from "next/link";
import { type FC } from "react";

import styles from "./ArticleBreadcrumbs.module.css";

type Props = {
  items: { label: string; href?: string }[];
};

/**
 * @package
 */
export const ArticleBreadcrumbs: FC<Props> = ({ items }) => {
  return (
    <ul className="flex list-none flex-row gap-2 p-0 text-sm">
      {items.map((item) => {
        const { href, label } = item;
        const isCurrentPage = !href;

        return !isCurrentPage ? (
          <li key={label} className="m-0 flex items-center gap-2 p-0">
            <Link
              href={href}
              className="m-0 text-custom-primary underline hover:opacity-60"
            >
              {label}
            </Link>
            <span className="m-0">＞</span>
          </li>
        ) : (
          <li
            key={label}
            className={`m-0 p-0 text-custom-black ${styles.current} flex-1`}
          >
            {label}
          </li>
        );
      })}
    </ul>
  );
};
