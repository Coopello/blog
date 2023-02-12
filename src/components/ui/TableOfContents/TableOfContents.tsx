"use client";

import type { FC } from "react";
import { useTableOfContents } from "src/components/ui/TableOfContents/useTableOfContents";

type Props = {
  contents: string[];
};

/**
 * @package
 */
export const TableOfContents: FC<Props> = ({ contents }) => {
  const { targetTocDataVal } = useTableOfContents();

  return (
    <nav>
      <ul className="flex flex-col gap-2">
        {contents.map((content, i) => {
          return (
            <li key={i} className="h-full w-full">
              <a
                data-val={targetTocDataVal}
                className="box-border block h-full w-full px-4 text-xl hover:bg-black/5"
                href={`#${content}`}
              >
                {content}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
