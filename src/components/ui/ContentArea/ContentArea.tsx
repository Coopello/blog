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
    <article id={id} className="prose lg:prose-xl">
      {parse(content)}
    </article>
  );
};
