import type { Article } from "src/models/article";

type Props = {
  article: Article;
};

/**
 * @package
 */
export const OpenGraphImage = ({ article }: Props) => {
  return (
    <div
      style={{
        fontSize: 48,
        background: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ height: 40, backgroundColor: "#5AC8D8", width: "100%" }} />
      <h1
        style={{
          flex: 1,
          maxWidth: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {article.title}
      </h1>
      <div style={{ height: 40, backgroundColor: "#5AC8D8", width: "100%" }} />
    </div>
  );
};
