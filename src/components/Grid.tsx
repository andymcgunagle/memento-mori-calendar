import { generateGrid } from "../functions/generateGrid";

import Box from "./Box";

export default function Grid({ weeksLived }: GridProps) {
  return (
    <div className="max-w-[600px] flex flex-wrap justify-center items-center gap-2">
      {generateGrid(weeksLived).map(week => <Box key={week.number} number={week.number} lived={week.lived} />)}
    </div>
  );
};

interface GridProps {
  weeksLived: number,
};