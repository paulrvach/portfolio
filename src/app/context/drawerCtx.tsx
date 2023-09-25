"use client";
import {
  useState,
  createContext,
  type HTMLAttributes,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

interface ContextProps {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
}

const DrawerContext = createContext<ContextProps>({
  openDrawer: false,
  setOpenDrawer: () => {},
});

const DrawerContextProvider = ({
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <DrawerContext.Provider value={{ openDrawer, setOpenDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

const useDrawerContext = () => useContext(DrawerContext);

export { DrawerContextProvider, useDrawerContext };
