"use client";
import {
  useState,
  createContext,
  type HTMLAttributes,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { Theme, type ThemeOptions } from "@radix-ui/themes";

interface ContextProps {
  theme: ThemeOptions['appearance'] 
  setTheme: Dispatch<SetStateAction<ThemeOptions['appearance']>>;
}

const GlobalContext = createContext<ContextProps>({
  theme: "dark",
  setTheme: (): string => "dark",
});

const GlobalContextProvider = ({
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  const [theme, setTheme] = useState<ThemeOptions['appearance']>("dark");

  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      <Theme appearance={theme} accentColor="amber" radius="full" className="">
        {children}
      </Theme>
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalContextProvider, useGlobalContext };
