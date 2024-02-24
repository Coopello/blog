import Link from "next/link";
import { type FC,Fragment } from "react";

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
          <Fragment key={href}>
            <li className="m-0 p-0">
              <Link
                href={href}
                className="text-custom-primary underline hover:opacity-60"
              >
                {label}
              </Link>
            </li>
            <li className="m-0 p-0 text-custom-black">
              <span>＞</span>
            </li>
          </Fragment>
        ) : (
          <li
            key={item.href}
            className={`m-0 p-0 text-custom-black ${styles.current} flex-1`}
          >
            {item.label}
          </li>
        );
      })}
    </ul>
  );
};
