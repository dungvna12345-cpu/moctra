import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { CartProvider } from '@/components/CartProvider';
import BrandPreloader from '@/components/BrandPreloader';
import PageTransition from '@/components/PageTransition';

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Mộc Phiêu — Chạm vị trà, phiêu miền an yên',
  description: 'Trà truyền thống, bánh mứt thủ công và không gian thưởng trà an yên.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={beVietnamPro.variable}>
      <body className={beVietnamPro.className}>
        <BrandPreloader />
        <CartProvider>
          <Header />
          <PageTransition>{children}</PageTransition>
        </CartProvider>
      </body>
    </html>
  );
}
