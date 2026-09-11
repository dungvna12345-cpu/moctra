import Link from 'next/link';
import Footer from '@/components/Footer';
import CartPageClient from '@/components/CartPageClient';

export default function CartPage() {
  return (
    <main>
      <div className="breadcrumb">
        <Link href="/">TRANG CHỦ</Link>
        <i>/</i>
        <Link href="/menu">THỰC ĐƠN</Link>
        <i>/</i>
        <span>GIỎ HÀNG</span>
      </div>
      <CartPageClient />
      <Footer />
    </main>
  );
}
