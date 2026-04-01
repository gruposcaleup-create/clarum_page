import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GlobalLogic from '../components/GlobalLogic';
import { GeistSans } from 'geist/font/sans';

export const metadata = {
  title: 'Clarum Research Lab',
  description: 'Advancing the frontiers of intelligence and technology',
  icons: {
    icon: '/assets/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable}`} suppressHydrationWarning>
      <body>
        <Header />
        {children}
        <Footer />
        <GlobalLogic />
      </body>
    </html>
  );
}
