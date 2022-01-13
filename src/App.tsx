import { useContext } from "react";
import { GridViewContext } from "./contexts/GridViewContextProvider";

import Birthday from "./components/Birthday";
import Grid from "./components/Grid";
import Heading from "./components/reusables/Heading";
import TimeLived from "./components/TimeLived";
import Quote from "./components/Quote";

export default function App() {
  const { detailedView } = useContext(GridViewContext);

  return (
    <div className={`${detailedView ? "max-w-4xl" : "max-w-xl"} m-auto flex flex-col gap-6 items-center p-6`}>
      <Heading>Memento Mori</Heading>
      <Birthday />
      <TimeLived />
      <Grid />
      <Quote />
    </div>
  );
};
