import { DateTime } from "luxon";

export enum DATE_FORMAT {
  // MM/dd
  DATE_SHORT,
  // MM/dd(EEE)
  DATE_SHORT_WITH_WEEKDAY,
  // YYYY-MM-DD
  DATE,
  // YYYY-MM-DD(EEE)
  DATE_WITH_WEEKDAY,
  // YYYY
  YEAR,
  // ISO
  ISO,
  // HH:mm
  TIME,
  // M/d(EEE)HH:mm
  DATE_SHORT_TIME_WITH_WEEKDAY,
  // yyyy/M/d(EEE)HH:mm
  DATE_TIME_WITH_WEEKDAY,
}

const toFormat = (date: DateTime, format: DATE_FORMAT) => {
  switch (format) {
    case DATE_FORMAT.DATE_SHORT:
      return date.toFormat("M/d");
    case DATE_FORMAT.DATE_SHORT_WITH_WEEKDAY:
      return date.toFormat("M/d(EEE)");
    case DATE_FORMAT.DATE:
      return date.toFormat("yyyy/M/d");
    case DATE_FORMAT.DATE_WITH_WEEKDAY:
      return date.toFormat("yyyy/M/d(EEE)");
    case DATE_FORMAT.ISO:
      return date.toISO();
    case DATE_FORMAT.YEAR:
      return date.toFormat("yyyy");
    case DATE_FORMAT.TIME:
      return date.toLocaleString(DateTime.TIME_24_SIMPLE);
    case DATE_FORMAT.DATE_SHORT_TIME_WITH_WEEKDAY:
      return date.toFormat("M/d(EEE)HH:mm");
    case DATE_FORMAT.DATE_TIME_WITH_WEEKDAY:
      return date.toFormat("yyyy/M/d(EEE)HH:mm");
  }
};

export const dateFormat = (
  date: string,
  format: DATE_FORMAT = DATE_FORMAT.DATE_WITH_WEEKDAY,
  zone = "UTC", // dates coming from DB are in UTC by default
) => {
  const newDate = DateTime.fromISO(date, { zone }).setLocale("ja");

  return `${toFormat(newDate, format)}`;
};
