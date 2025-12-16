import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/navBar';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nisha Raju - Software Engineer',
  description: 'Portfolio of Nisha Raju - Results-driven Software Engineer with 3+ years of experience in React Native development',
  keywords: ['Nisha Raju', 'Software Engineer', 'React Native', 'Mobile Developer', 'Portfolio'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}