"use client";
import {
  useState,
  createContext,
  type HTMLAttributes,
  useContext,
  Dispatch,
  SetStateAction,
  use,
} from "react";
import { Theme, type ThemeOptions } from "@radix-ui/themes";

interface ContextProps {
  theme: ThemeOptions["appearance"];
  setTheme: Dispatch<SetStateAction<ThemeOptions["appearance"]>>;
  accentColor: ThemeOptions["accentColor"];
  setAccentColor: Dispatch<SetStateAction<ThemeOptions["accentColor"]>>;
}

const ThemeContext = createContext<ContextProps>({
  theme: "inherit",
  setTheme: (): void => {},
  accentColor: "amber",
  setAccentColor: (): void => {},
});

const ThemeContextProvider = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  const [theme, setTheme] = useState<ThemeOptions["appearance"]>("dark");
  const [accentColor, setAccentColor] =
    useState<ThemeOptions["accentColor"]>("amber");

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, accentColor, setAccentColor }}
    >
      <Theme
        appearance={theme}
        accentColor={accentColor}
        radius="full"
        className="mx-8 md:mx-32 2xl:mx-40"
      >
        {children}
      </Theme>
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);

export { ThemeContextProvider, useThemeContext };
