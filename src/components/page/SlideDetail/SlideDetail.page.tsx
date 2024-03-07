import type { FC } from "react";
import { ContentArea } from "src/components/ui/ContentArea";
import type { Article } from "src/models/article";

type Props = {
  article: Article;
};

/**
 * @package
 */
export const SlideDetail: FC<Props> = ({ article }) => {
  return article.slideUrl ? (
    <ContentArea
      title="View Transitions APIで 遷移アニメーションを実装する"
      tags={article.tags}
      id="content"
      type="slides"
      content={article.slideUrl}
    />
  ) : null;
};
