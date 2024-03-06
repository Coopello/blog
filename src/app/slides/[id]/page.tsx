import { SlideDetail } from "src/components/page/SlideDetail";

type PageProps = {
  params: { id: string };
};

export default async function SlideDetailPage({}: PageProps) {
  return <SlideDetail />;
}
