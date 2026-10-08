export const prettyNumbers = (value: number | null | undefined) => {
  if (value == null) return;
  return new Intl.NumberFormat('ru-RU').format(value) + ' ';
};
