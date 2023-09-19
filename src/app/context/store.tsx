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
  theme: ThemeOptions["appearance"];
  setTheme: Dispatch<SetStateAction<ThemeOptions["appearance"]>>;

}

const ThemeContext = createContext<ContextProps>({
  theme: "inherit",
  setTheme: (): string => 'inherit',

});

const ThemeContextProvider = ({
  children,
}: HTMLAttributes<HTMLDivElement>) => {
  const [theme, setTheme] = useState<ThemeOptions["appearance"]>("dark");

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme }}
    >
      <Theme
        appearance={theme}
        accentColor="amber"
        radius="full"
        className="mx-8 md:mx-32 2xl:mx-80"
      >
        {children}
      </Theme>
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);

export { ThemeContextProvider, useThemeContext };
