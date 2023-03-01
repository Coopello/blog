import "../src/styles/globals.css";
import "highlight.js/styles/hybrid.css";
import Image from "next/image";

Image.propTypes = {
  unoptimized: null,
};

Image.defaultProps = {
  unoptimized: true,
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
