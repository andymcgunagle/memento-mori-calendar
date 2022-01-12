import { months } from "../data/months";
import { generateDays } from "../functions/generateDays";
import { generateYears } from "../functions/generateYears";

import Select from "./reusables/Select";

export default function Birthday({ birthMonth, birthDay, birthYear, setBirthMonth, setBirthDay, setBirthYear }: BirthdayProps) {
  return (
    <form className="flex gap-4">
      <Select value={birthMonth} onChange={e => setBirthMonth(parseInt(e.target.value))}>
        {months.map((month, index) => <option value={index}>{month}</option>)}
      </Select>
      <Select value={birthDay} onChange={e => setBirthDay(parseInt(e.target.value))}>
        {generateDays().map(day => <option value={day}>{day}</option>)}
      </Select>
      <Select value={birthYear} onChange={e => setBirthYear(parseInt(e.target.value))}>
        {generateYears().map(year => <option value={year}>{year}</option>)}
      </Select>
    </form>
  );
};

interface BirthdayProps {
  birthMonth: string | number,
  birthDay: string | number,
  birthYear: string | number,
  setBirthMonth: React.Dispatch<React.SetStateAction<number>>,
  setBirthDay: React.Dispatch<React.SetStateAction<number>>,
  setBirthYear: React.Dispatch<React.SetStateAction<number>>,
}