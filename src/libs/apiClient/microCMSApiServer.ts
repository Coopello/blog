import axios from "axios";

/**
 * @package
 */
export const microCMSApiServer = axios.create({
  baseURL: process.env.MICRO_CMS_API_URL || "",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    "X-MICROCMS-API-KEY": process.env.MICRO_CMS_API_KEY || "",
  },
});
