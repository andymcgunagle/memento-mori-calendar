export interface WeekObject {
  number: number,
  lived: boolean,
};

export function generateGrid(weeksLived: number) {
  return Array
    .from(Array(80 * 52), (_, index) => {
      return (index + 1) <= weeksLived ?
        { number: (index + 1), lived: true }
        : { number: (index + 1), lived: false }
    }) as WeekObject[];
};

