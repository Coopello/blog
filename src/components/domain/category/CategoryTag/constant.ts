import type { Category } from "src/models/category";

/**
 * @package
 */
export const CATEGORY_TAG_COLORS: { [key in Category]: `#${string}` } = {
  "front-end": "#E10718",
  "back-end": "#1362F9",
  android: "#43DC49",
  ios: "#FF6E27",
  infrastructure: "#6806E4",
  design: "#FFD63D",
  "about-us": "#00B8D2",
  pr: "#C9C9C9",
};
