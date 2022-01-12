import { useContext } from "react";
import { GlobalContext } from "../contexts/DataContextProvider";

export default function TimeLived() {
  const { state: { weeksLived } } = useContext(GlobalContext);

  return (
    <div className="flex gap-4">
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