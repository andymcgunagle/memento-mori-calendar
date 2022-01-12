import { createContext, useState } from "react";

export const GridViewContext = createContext({} as StateAndActions);

export default function GridViewContextProvider({ children }: GridViewContextProviderProps) {
  const [detailedView, setDetailedView] = useState<boolean>(false);

  const stateAndActions = {
    state: {
      detailedView,
    },
    actions: {
      setDetailedView,
    },
  };

  return (
    <GridViewContext.Provider value={stateAndActions}>
      {children}
    </GridViewContext.Provider>
  );
};

interface GridViewContextProviderProps {
  children: JSX.Element,
};

interface StateAndActions {
  state: {
    detailedView: boolean,
  },
  actions: {
    setDetailedView: React.Dispatch<React.SetStateAction<boolean>>
  },
};