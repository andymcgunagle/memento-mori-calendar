import { createContext, useState, useEffect } from "react";

import { getWeeksLived } from "../data/getWeeksLived";

export const GlobalContext = createContext({} as StateAndActions);

export default function DataContextProvider({ children }: DataContextProviderProps) {
  const [birthDay, setBirthDay] = useState(10);
  const [birthMonth, setBirthMonth] = useState(6);
  const [birthYear, setBirthYear] = useState(1991);
  const [weeksLived, setWeeksLived] = useState(0);

  useEffect(() => {
    setWeeksLived(getWeeksLived(birthYear, birthMonth, birthDay))
  }, [birthYear, birthMonth, birthDay]);

  const stateAndActions = {
    state: {
      birthDay,
      birthMonth,
      birthYear,
      weeksLived,
    },
    actions: {
      setBirthDay,
      setBirthMonth,
      setBirthYear,
    },
  };

  return (
    <GlobalContext.Provider value={stateAndActions}>
      {children}
    </GlobalContext.Provider>
  );
};

interface DataContextProviderProps {
  children: JSX.Element,
};

interface StateAndActions {
  state: {
    birthDay: number,
    birthMonth: number,
    birthYear: number,
    weeksLived: number,
  },
  actions: {
    setBirthDay: React.Dispatch<React.SetStateAction<number>>,
    setBirthMonth: React.Dispatch<React.SetStateAction<number>>,
    setBirthYear: React.Dispatch<React.SetStateAction<number>>,
  },
};