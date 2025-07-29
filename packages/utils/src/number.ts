export const formatNumber = (
  num: number,
  options: Intl.NumberFormatOptions = {},
): string => {
  return new Intl.NumberFormat("en-US", options).format(num);
};

export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};
