"use client";

import type { FC } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

type Props = {
  content: string;
};
/**
 * @package
 */
export const ContentArea: FC<Props> = ({ content }) => {
  return <ReactMarkdown className="m-10">{`${content}`}</ReactMarkdown>;
};
