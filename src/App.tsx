import { useEffect, useState } from "react";

import { getWeeksLived } from "./functions/getWeeksLived";

import Birthday from "./components/Birthday";
import Grid from "./components/Grid";
import Heading from "./components/reusables/Heading";
import TimeLived from "./components/TimeLived";

export default function App() {
  const [birthDay, setBirthDay] = useState(10);
  const [birthMonth, setBirthMonth] = useState(6);
  const [birthYear, setBirthYear] = useState(1991);
  const [weeksLived, setWeeksLived] = useState(0);

  useEffect(() => {
    setWeeksLived(getWeeksLived(birthYear, birthMonth, birthDay))
  }, [birthYear, birthMonth, birthDay])

  return (
    <div className="flex flex-col gap-4 items-center p-4">
      <Heading>Memento Mori</Heading>

      <Birthday
        birthDay={birthDay}
        birthMonth={birthMonth}
        birthYear={birthYear}
        setBirthDay={setBirthDay}
        setBirthMonth={setBirthMonth}
        setBirthYear={setBirthYear}
      />

      <TimeLived weeksLived={weeksLived} />

      <Grid weeksLived={weeksLived} />
    </div>
  );
};
