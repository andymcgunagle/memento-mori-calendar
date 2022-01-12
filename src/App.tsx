import DataContextProvider from "./contexts/DataContextProvider";

import Birthday from "./components/Birthday";
import Grid from "./components/Grid";
import Heading from "./components/reusables/Heading";
import TimeLived from "./components/TimeLived";

export default function App() {
  return (
    <DataContextProvider>
      <div className="flex flex-col gap-4 items-center p-4">
        <Heading>Memento Mori</Heading>
        <Birthday />
        <TimeLived />
        <Grid />
      </div>
    </DataContextProvider>
  );
};
