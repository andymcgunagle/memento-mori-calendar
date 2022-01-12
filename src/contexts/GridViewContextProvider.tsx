import { createContext, useState } from "react";

export const GridViewContext = createContext({} as StateAndAction);

export default function GridViewContextProvider({ children }: GridViewContextProviderProps) {
  const [detailedView, setDetailedView] = useState(false);

  return (
    <GridViewContext.Provider value={{ detailedView, setDetailedView }}>
      {children}
    </GridViewContext.Provider>
  );
};

interface GridViewContextProviderProps {
  children: JSX.Element,
};

interface StateAndAction {
  detailedView: boolean,
  setDetailedView: React.Dispatch<React.SetStateAction<boolean>>
};