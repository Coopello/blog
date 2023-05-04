import type { Route } from "next";
import Link from "next/link";
import type { FC } from "react";

type Props = {
  items: { label: string; href: Route }[];
};

/**
 * @package
 */
export const ArticleBreadcrumbs: FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <>
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
            {index !== items.length - 1 ? (
              <li>
                <span>＞</span>
              </li>
            ) : null}
          </>
        );
      })}
    </ul>
  );
};
