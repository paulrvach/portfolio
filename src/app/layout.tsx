import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Lato } from "next/font/google";
import { Theme } from "@radix-ui/themes";
const vibes = Lato({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata = {
  title: "Paul Vachon",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${vibes.className}  `}>
        <Theme appearance="light" accentColor="amber" radius="full">
          {children}
        </Theme>
      </body>
    </html>
  );
}
