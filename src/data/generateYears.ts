export function generateYears(years: number) {
  return Array
    .from(Array(years), (_, index) => index + (new Date().getFullYear() - years))
    .reverse();
};