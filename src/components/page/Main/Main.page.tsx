"use client";

import dynamic from "next/dynamic";
import type { FC } from "react";
import { useEffect, useState } from "react";

const ContentArea = dynamic(
  async () => (await import("src/components/ui/ContentArea")).ContentArea
);

/**
 * @package
 */
export const Main: FC = () => {
  // FIXME: axios 導入後に削除する
  const [data, setData] = useState<any>();

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/articles/vw432_a1jkx");
      setData(await res.json());
    })();
  }, []);

  console.log(data);

  return (
    <div>
      {data ? <ContentArea content={data.content} id="content" /> : null}
    </div>
  );
};
