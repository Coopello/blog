import type { FC } from "react";
import { ContentArea } from "src/components/ui/ContentArea";

/**
 * @package
 */
export const SlideDetail: FC = () => {
  return (
    <ContentArea
      title="View Transitions APIで 遷移アニメーションを実装する"
      color="#5AC8D8"
      tags={[]}
      id=""
      content={
        <div
          className="aspect-video"
          dangerouslySetInnerHTML={{
            // eslint-disable-next-line @typescript-eslint/naming-convention
            __html: `<iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vR6069P0NA0o9PTj6RmQkNgEkBUeBD6O28bMmaBOna7FZEoIAPCk1xncpQ-8RfxgWzzWEEXWmJyMlqh/embed?start=false&loop=false&delayms=3000"
              frameborder="0"
              width="100%"
              height="100%"
              allowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></iframe>`,
          }}
        />
      }
    />
  );
};
