import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";
import renderer from "react-test-renderer";

import { ArticleCard } from "./";

describe("domain/article/ArticleCard", () => {
  it("Snap Shot ArticleCard", () => {
    const component = renderer.create(
      <ArticleCard
        imageUrl="https://placehold.jp/120x120.png"
        description="Firestore は〇〇です。\nガチ完成なのでぜひ読んでくださいね！"
        color="#00b8d2"
        tags={["Front-end", "React"]}
        title="タイトル"
        id={"hogehoge"}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Snap Shot ArticleCard without imageUrl", () => {
    const component = renderer.create(
      <ArticleCard
        description="Firestore は〇〇です。\nガチ完成なのでぜひ読んでくださいね！"
        color="#00b8d2"
        tags={["Front-end", "React"]}
        title="タイトル"
        id={"hogehoge"}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("クリックすると、該当する記事の詳細ページに遷移する", async () => {
    const mockRouterPush = jest.fn();
    const mockRouterPrefetch = jest.fn();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    useRouter.mockImplementation(() => ({
      push: mockRouterPush,
      prefetch: mockRouterPrefetch,
    }));

    const { getByRole } = render(
      <ArticleCard
        imageUrl="https://placehold.jp/120x120.png"
        description="Firestore は〇〇です。\nガチ完成なのでぜひ読んでくださいね！"
        color="#00b8d2"
        tags={["Front-end", "React"]}
        title="タイトル"
        id={"hogehoge"}
      />
    );

    const articleButton = getByRole("button");
    userEvent.click(articleButton);
    await waitFor(() => {
      expect(mockRouterPrefetch).toBeCalledTimes(1);
      expect(mockRouterPush).toBeCalledTimes(1);
    });
  });
});
