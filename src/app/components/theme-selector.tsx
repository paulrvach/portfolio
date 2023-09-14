"use client";
import { useThemeContext } from "../context/store";
import {
  MoonIcon,
  SunIcon,
  DividerHorizontalIcon,
} from "@radix-ui/react-icons";
import { DropdownMenu, Text, Container, Box } from "@radix-ui/themes";

type Props = {};

const ThemeSelector = (props: Props) => {
  const { theme, setTheme } = useThemeContext();

  const themeButton: { dark: JSX.Element; light: JSX.Element } = {
    dark: (
      <Text size={"2"} className="hover:bg-gray-700/5 rounded-full px-2 py-2">
        <MoonIcon className="w-4 h-4 inline-block" /> Dark Mode
      </Text>
    ),
    light: (
      <Text size={"2"} className="hover:bg-gray-700/5 rounded-full px-2 py-2">
        <SunIcon className="w-4 h-4 inline-block" /> Light Mode
      </Text>
    ),
  };

  return (
    <Container className="group fixed bottom-0    select-none">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Box className="flex flex-col items-center relative  translate-y-[6.5rem] hover:-translate-y-0 focus:-translate-y-0 transition-transform duration-1000 border-[0.1px] border-[#e5e7eb] bg-neutral-600/20 backdrop-blur-xl  shadow-2xl px-12 pb-8 rounded-t-xl">
            <DividerHorizontalIcon className=" w-12 h-12  animate-bounce group-hover:animate-none transition-transform duration-500" />
            <Text weight={"bold"} className="pb-2">Toggle Mode</Text>
            {themeButton[theme as never]}
          </Box>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item onClick={() => setTheme("dark")}>
            {themeButton.dark}
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => setTheme("light")}>
            {themeButton.light}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Container>
  );
};

export { ThemeSelector };
