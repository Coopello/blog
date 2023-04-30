import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.MICRO_CMS_API_URL ||
    process.env.NEXT_PUBLIC_MICRO_CMS_API_URL ||
    "",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    "X-MICROCMS-API-KEY":
      process.env.MICRO_CMS_API_KEY ||
      process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY ||
      "",
  },
});

/**
 * @package
 */
export const microCmsApiFetcher = (url: string) => {
  return axiosInstance.get(url);
};
