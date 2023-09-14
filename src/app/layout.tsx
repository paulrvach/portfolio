import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Lato } from "next/font/google";
import localFont from "next/font/local";
import { GlobalContextProvider } from "./context/store";
import { NavBar } from "./components";
const vibes = Lato({ subsets: ["latin"], weight: ["400", "700", "900"] });
export const sfPro = localFont({
  src: [
    {
      path: "../../public/SF-Pro-Text-Regular.otf",
      weight: "400",
    },
  ],
});

export const metadata = {
  title: "Paul Vachon",
  description: "Portfolio",
};

// define callback function in server component pass callbackfunction

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sfPro.className}`}>
        <GlobalContextProvider>
          <NavBar />

          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
