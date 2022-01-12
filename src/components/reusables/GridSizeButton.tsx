import { useContext } from "react";
import { GridViewContext } from "../../contexts/GridViewContextProvider";

export default function GridSizeButton() {
  const { detailedView, setDetailedView } = useContext(GridViewContext);

  return (
    <button onClick={() => setDetailedView(!detailedView)}>
      <span className={`material-icons absolute ${detailedView ? "top-[-1.5rem] right-[-0.75rem]" : "top-[-1.75rem] right-[-1.5rem]"} bg-red-600 rounded-full p-2 shadow-lg active:translate-y-1 active:shadow-none`}>
        {detailedView ? "close_fullscreen" : "open_in_full"}
      </span>
    </button>
  );
};