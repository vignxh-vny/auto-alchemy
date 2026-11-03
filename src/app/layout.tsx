import type { Metadata, Viewport } from 'next';
import { Barlow_Condensed, DM_Sans } from 'next/font/google';
import './globals.css';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Paramaathma’s Auto Alchemy',
  description: 'Detailing, coatings and paint protection for cars and bikes in Bengaluru.',
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${dmSans.variable}`}>
      <head>
        <meta name="robots" content="noindex" />
      </head>
      <body>{children}</body>
    </html>
  );
}

