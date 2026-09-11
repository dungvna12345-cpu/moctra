import { notFound } from 'next/navigation';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ProductDetailClient from '@/components/ProductDetailClient';
import { findProduct, products } from '@/lib/products';

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const product=findProduct(slug); if(!product) notFound();
 const related=products.filter(p=>p.slug!==slug && (p.kind===product.kind || p.category===product.category)).slice(0,8);
 return <main><div className="breadcrumb"><Link href="/">TRANG CHỦ</Link><i>/</i><Link href="/menu">THỰC ĐƠN</Link><i>/</i><span>{product.categoryLabel.toUpperCase()}</span></div><ProductDetailClient product={product}/><section className="related"><h2>LỰA MÓN HỢP GU</h2><div className="related-grid">{related.slice(0,4).map(p=><ProductCard key={p.slug} p={p}/>)}</div><Link href="/menu" className="more-link">XEM THÊM</Link></section><Footer/></main>
}
