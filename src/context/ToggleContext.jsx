/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const ToggleContext = createContext(undefined);

export const ToggleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const [isFlex, setIsFlex] = useState(true);

  return (
    <ToggleContext.Provider value={{ toggle, setToggle, isFlex, setIsFlex }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const useToggle = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggle must be used within a ToggleProvider");
  }
  return context;
};
