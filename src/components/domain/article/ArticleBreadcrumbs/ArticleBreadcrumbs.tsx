import Link from "next/link";
import type { FC } from "react";

type Props = {
  items: { label: string; href?: string }[];
};

/**
 * @package
 */
export const ArticleBreadcrumbs: FC<Props> = ({ items }) => {
  return (
    <ul className="flex list-none flex-row gap-2 p-0">
      {items.map((item) => {
        const { href, label } = item;
        const isCurrentPage = !href;

        return !isCurrentPage ? (
          <>
            <li key={href}>
              <Link
                href={href}
                className="text-custom-sky underline hover:opacity-60"
              >
                {label}
              </Link>
            </li>
            <li>
              <span>＞</span>
            </li>
          </>
        ) : (
          <li key={item.href} className="text-custom-black">
            {item.label}
          </li>
        );
      })}
    </ul>
  );
};
