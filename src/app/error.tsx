"use client";

import { useEffect } from "react";
import { Button } from "src/components/ui/Button";
import { ExceptionContent } from "src/components/ui/ExceptionContent";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  /**
   * @document
   * エラーを出力
   */
  useEffect(() => {
    console.error(error);
  }, [error]);

  /**
   * @document
   * reset() が機能していなそうなため、 window.location.reload を使用していry
   */
  reset;

  return (
    <ExceptionContent
      message="エラーが発生しました"
      buttonComponent={
        <Button onClick={() => window.location.reload()}>再読み込み</Button>
      }
    />
  );
}
