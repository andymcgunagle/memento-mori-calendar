import { useContext } from "react";
import { DataContext } from "../contexts/DataContextProvider";

export default function TimeLived() {
  const { state: { weeksLived } } = useContext(DataContext);

  return (
    <div className="w-full flex justify-evenly gap-4 text-center">
      <p>
        {weeksLived * 7} days lived
      </p>
      <p>
        {weeksLived.toFixed(1)} weeks lived
      </p>
      <p>
        {(weeksLived / 52).toFixed(1)} years lived
      </p>
    </div>
  );
};