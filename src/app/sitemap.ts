import type { MetadataRoute } from "next";
import { notFound } from "next/navigation";
import type { ArticleDetailSitemapListResponse } from "src/request";
import { REVALIDATE_TIME, SITE_URL } from "src/utils/constants";

const getArticleSiteMapListData =
  async (): Promise<ArticleDetailSitemapListResponse> => {
    const res = await fetch(`${process.env.BASE_URL}/api/sitemap`, {
      next: {
        revalidate: REVALIDATE_TIME,
      },
    });
    if (res.status === 404) {
      notFound();
    }

    return await res.json();
  };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articleSitemapList = await getArticleSiteMapListData();

  return [
    {
      url: SITE_URL,
    },
    ...articleSitemapList,
  ];
}
