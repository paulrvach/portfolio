import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './components/ThemeProvider';
import Script from 'next/script';
const inter = Inter({ subsets: ['latin'] });

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
      <body className={`${inter.className} `}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
