import { useParams, useRouter } from "next/navigation";
import { FC } from "react";
import { ArticleCard } from "src/components/domain/article/ArticleCard";
import { Button } from "src/components/ui/Button";
import { Article } from "src/models/article";

type Props = {
  articles: Article[];
  totalCount: number;
};

/**
 * @package
 */
export const ArticleListArea: FC<Props> = ({ articles, totalCount }) => {
  const router = useRouter();
  const params = useParams();
  const page = params.page ? +params.page : 1;

  return (
    <section className="flex flex-col gap-6 items-center">
      <ul className="grid grid-cols-1 gap-6">
        {articles?.map((article) => (
          <li key={article.id}>
            <ArticleCard
              key={article.id}
              title={article.title}
              description={article.description}
              imageUrl={article.eyecatch.url}
              tags={article.tags.map((tag) => tag.name)}
              url={`/${article.type}/${article.id}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
