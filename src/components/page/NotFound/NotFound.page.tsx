import Image from "next/image";
import type { FC } from "react";
import { Button } from "src/components/ui/Button";

/**
 * @package
 */
export const NotFound: FC = () => {
  return (
    <div className="grid min-h-[calc(100vh_-_60px)] w-full place-content-center gap-12 pb-20 sm:min-h-[calc(100vh_-_112px)]">
      <div>
        <Image
          className="mb-6"
          src="/static/error_icon.svg"
          alt="エラーアイコン"
          width={256}
          height={256}
        />
        <h2 className="text-2xl text-custom-sky">ページが見つかりません。</h2>
      </div>
      <Button>トップページに戻る</Button>
    </div>
  );
};
