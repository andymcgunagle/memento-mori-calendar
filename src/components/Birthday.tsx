import { months } from "../data/months";
import { generateDays } from "../data/generateDays";
import { generateYears } from "../data/generateYears";

import Select from "./reusables/Select";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContextProvider";

export default function Birthday() {
  const {
    state: { birthDay, birthMonth, birthYear },
    actions: { setBirthDay, setBirthMonth, setBirthYear }
  } = useContext(DataContext);

  return (
    <form className="flex gap-4">
      <Select value={birthMonth} onChange={e => setBirthMonth(parseInt(e.target.value))}>
        {months.map((month, index) => <option key={month} value={index}>{month}</option>)}
      </Select>
      <Select value={birthDay} onChange={e => setBirthDay(parseInt(e.target.value))}>
        {generateDays().map(day => <option key={day} value={day}>{day}</option>)}
      </Select>
      <Select value={birthYear} onChange={e => setBirthYear(parseInt(e.target.value))}>
        {generateYears().map(year => <option key={year} value={year}>{year}</option>)}
      </Select>
    </form>
  );
};