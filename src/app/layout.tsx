import type { Metadata } from 'next';
import { Lexend, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './components/navBar';
import Footer from './components/footer';

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Nisha Raju - Software Engineer',
  description:
    'Software Engineer with 2+ years shipping production React Native apps across iOS and Android in healthcare, social, and fintech domains.',
  keywords: [
    'Nisha Raju',
    'Software Engineer',
    'React Native',
    'Expo',
    'Mobile Developer',
    'TypeScript',
    'Portfolio',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${lexend.variable} ${jetbrains.variable} font-body bg-background text-on-background antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
