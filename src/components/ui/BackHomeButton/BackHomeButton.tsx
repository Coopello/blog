"use client";

import { useRouter } from "next/navigation";
import type { FC } from "react";
import { Button } from "src/components/ui/Button";

/**
 * @package
 */
export const BackHomeButton: FC = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        router.push("/");
        /**
         * @document
         * "/articles/[id]" 以外のパスでホームに戻ると
         * パスのコンフリクトによってホームの内容が表示されないため、
         * ホームに遷移した後にページをリロードする。
         */
        setTimeout(() => {
          window.location.reload();
        }, 100);
      }}
    >
      トップページに戻る
    </Button>
  );
};
