export function generateYears() {
  return Array
    .from(Array(100), (_, index) => index + (new Date().getFullYear() - 100))
    .reverse();
};