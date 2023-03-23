"use client";

import parse from "html-react-parser";
import type { FC } from "react";

type Props = {
  content: string;
  id: string;
};

/**
 * @package
 */
export const ContentArea: FC<Props> = ({ content, id }) => {
  return (
    <article
      id={id}
      className="prose max-w-none rounded bg-white p-8 lg:prose-base"
    >
      {parse(content)}
    </article>
  );
};
