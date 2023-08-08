import './globals.css';
import NavBar from './components/NavBar';
import { Lato } from 'next/font/google';
import { ThemeProvider } from './components/ThemeProvider';
import Script from 'next/script';
const vibes = Lato({ subsets: ['latin'], weight: ['400', '700', '900'] });

export const metadata = {
  title: 'Paul Vachon',
  description: 'Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang='en'>
      <body className={`${vibes.className}  `}>
        <ThemeProvider attribute='class' defaultTheme='light' >
        <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
