import type { FC } from "react";
import { BackHomeButton } from "src/components/ui/BackHomeButton";
import { ExceptionContent } from "src/components/ui/ExceptionContent";

/**
 * @package
 */
export const NotFound: FC = () => {
  return (
    <ExceptionContent
      message="ページが見つかりません。"
      buttonComponent={<BackHomeButton />}
    />
  );
};
