import { useContext } from "react";
import { DataContext } from "../contexts/DataContextProvider";
import { Durations } from "../data/durations";

export default function TimeLived() {
  const { state: { weeksLived } } = useContext(DataContext);
  const durations = new Durations(weeksLived);

  return (
    <div className="w-full flex justify-evenly gap-4 text-center">
      {durations.all.map((duration, index) => (
        <p key={index}>
          {duration}
        </p>
      ))}
    </div>
  );
};