import { SlideDetail } from "src/components/page/SlideDetail";

type PageProps = {
  params: { id: string };
};

export default async function DevDetailPage({}: PageProps) {
  return <SlideDetail />;
}
