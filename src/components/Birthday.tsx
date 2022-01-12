import { months } from "../data/months";
import { generateDays } from "../data/generateDays";
import { generateYears } from "../data/generateYears";

import Select from "./reusables/Select";
import { useContext } from "react";
import { GlobalContext } from "../contexts/DataContextProvider";

export default function Birthday() {
  const {
    state: { birthDay, birthMonth, birthYear },
    actions: { setBirthDay, setBirthMonth, setBirthYear }
  } = useContext(GlobalContext);

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