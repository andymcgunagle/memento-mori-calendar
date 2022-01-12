import DataContextProvider from "./contexts/DataContextProvider";

import Birthday from "./components/Birthday";
import Grid from "./components/Grid";
import Heading from "./components/reusables/Heading";
import TimeLived from "./components/TimeLived";
import Quote from "./components/Quote";

export default function App() {
  return (
    <DataContextProvider>
      <div className="max-w-[600px] m-auto flex flex-col gap-6 items-center p-6">
        <Heading>Memento Mori</Heading>
        <Birthday />
        <TimeLived />
        <Grid />
        <Quote />
      </div>
    </DataContextProvider>
  );
};
