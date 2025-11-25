import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Test Coffee Shop | Artisan Coffee & Fresh Pastries',
  description: 'Experience the finest artisan coffee and fresh pastries at Test Coffee Shop. Visit us for a warm atmosphere and exceptional service.',
  keywords: 'coffee shop, artisan coffee, fresh pastries, cafe, espresso, latte, cappuccino',
  openGraph: {
    title: 'Test Coffee Shop | Artisan Coffee & Fresh Pastries',
    description: 'Experience the finest artisan coffee and fresh pastries at Test Coffee Shop.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Coffee Shop | Artisan Coffee & Fresh Pastries',
    description: 'Experience the finest artisan coffee and fresh pastries at Test Coffee Shop.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}