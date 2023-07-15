import './globals.css';
import { Space_Mono } from 'next/font/google';
import { ThemeProvider } from './components/ThemeProvider';
import Script from 'next/script';
const vibes = Space_Mono({ subsets: ['latin'], weight: '400' });

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
      <body className={`${vibes.className} `}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
