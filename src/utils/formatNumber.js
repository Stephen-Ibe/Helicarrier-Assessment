export const formatNumber = (number) => {
  if (!number) return 0;
  return new Intl.NumberFormat('en-EN').format(number);
};
