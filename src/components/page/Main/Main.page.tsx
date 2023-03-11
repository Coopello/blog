// TODO: ArticlePage 作成後に削除する
"use client";

import dynamic from "next/dynamic";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { Icon } from "src/assets";

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
      const res = await fetch("/api/articles/ecu87etyx1e1");
      setData(await res.json());
    })();
  }, []);

  return (
    <div>
      <Icon icon="twitter" color="black" />
      {data ? <ContentArea content={data.content} id="content" /> : null}
    </div>
  );
};
