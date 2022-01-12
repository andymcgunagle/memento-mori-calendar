import { useContext } from "react";
import { GridViewContext } from "../contexts/GridViewContextProvider";

export default function Box({ lived, number }: BoxProps) {
  const { state: { detailedView } } = useContext(GridViewContext);

  const baseStyles = ` ${detailedView ? 'h-6 w-6' : 'h-2 w-2'} flex justify-center items-center text-xs border-2 border-gray-900`;

  if (number % 52 === 0 && detailedView) return (
    <div className={`${lived ? "bg-gray-900 text-gray-50" : null} ${baseStyles}`}>
      {number / 52}
    </div>
  );

  if (lived) return <div className={`bg-gray-900 ${baseStyles}`}></div>;

  return <div className={`${baseStyles}`}></div>;
};

interface BoxProps {
  number: number,
  lived: boolean,
};