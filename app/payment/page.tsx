import Link from 'next/link';
import Footer from '@/components/Footer';
import PaymentClient from '@/components/PaymentClient';
export default function PaymentPage(){return <main><div className="breadcrumb"><Link href="/">TRANG CHỦ</Link><i>/</i><Link href="/menu">THỰC ĐƠN</Link><i>/</i><Link href="/cart">GIỎ HÀNG</Link><i>/</i><span>THANH TOÁN</span></div><PaymentClient/><Footer/></main>}
