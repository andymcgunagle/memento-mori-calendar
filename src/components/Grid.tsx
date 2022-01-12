import { useContext } from "react";
import { DataContext } from "../contexts/DataContextProvider";
import { generateGrid } from "../data/generateGrid";
import { GridViewContext } from "../contexts/GridViewContextProvider";

import Box from "./Box";
import GridSizeButton from "./reusables/GridSizeButton";

export default function Grid() {
  const { state: { weeksLived } } = useContext(DataContext);
  const { state: { detailedView } } = useContext(GridViewContext);

  return (
    <div className={`flex flex-wrap justify-center items-center relative ${detailedView ? 'gap-2' : 'gap-[0.25rem]'}`}>
      {generateGrid(weeksLived).map(week => (
        <Box key={week.number} number={week.number} lived={week.lived} />
      ))}
      <GridSizeButton />
    </div>
  );
};