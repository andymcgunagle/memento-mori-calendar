import { useContext } from "react";
import { DataContext } from "../contexts/DataContextProvider";
import { generateGrid } from "../data/generateGrid";

import Box from "./Box";

export default function Grid() {
  const { state: { weeksLived } } = useContext(DataContext);

  return (
    <div className="flex flex-wrap justify-center items-center gap-2">
      {generateGrid(weeksLived).map(week => (
        <Box key={week.number} number={week.number} lived={week.lived} />
      ))}
    </div>
  );
};