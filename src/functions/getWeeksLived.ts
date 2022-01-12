import { differenceInCalendarDays } from "date-fns";

// new Date(year, monthIndex, day) Constructor Notes
// monthIndex: Integer value representing the month, beginning with 0 for January to 11
// day: Integer value representing the day of the month. The default is 1.

function getDaysLived(birthYear: number, birthMonth: number, birthDay: number) {
  return differenceInCalendarDays(new Date(), new Date(birthYear, birthMonth, birthDay));
};

export function getWeeksLived(birthYear: number, birthMonth: number, birthDay: number) {
  return getDaysLived(birthYear, birthMonth, birthDay) / 7;
};