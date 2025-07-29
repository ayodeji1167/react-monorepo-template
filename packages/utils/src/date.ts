import moment from "moment";

export const formatDate = (
  date: string | Date,
  pattern: string = "LL",
): string => {
  const mDate = moment(date, moment.ISO_8601, true); // strict parsing
  return mDate.isValid() ? mDate.format(pattern) : "";
};

export const getRelativeTime = (date: string | Date): string => {
  const mDate = moment(date, moment.ISO_8601, true);
  return mDate.isValid() ? mDate.format("LLL") : "";
};
