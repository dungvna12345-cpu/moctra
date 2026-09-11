'use client';
import Image from 'next/image';
import Link from 'next/link';
import ProductCard from './ProductCard';
import { Product } from '@/lib/products';
import { useCart } from './CartProvider';
import { useState } from 'react';

function CartGlyph() {
  return <span className="cart-lines" />;
}

function TeawareItem({ p }: { p: Product }) {
  const { add } = useCart();
  const [ok, setOk] = useState(false);
  return (
    <div className="teaware-item">
      <Link href={`/product/${p.slug}`} className="teaware-visual">
        <Image src={p.image} width={150} height={110} alt={p.name} />
      </Link>
      <Link href={`/product/${p.slug}`} className="teaware-name">
        {p.name}
      </Link>
      <button
        className={`teaware-cart ${ok ? 'done' : ''}`}
        onClick={() => {
          add(p.slug);
          setOk(true);
          setTimeout(() => setOk(false), 800);
        }}
        aria-label={`Thêm ${p.name}`}
      >
        <CartGlyph />
      </button>
    </div>
  );
}

function TrayItem({ p }: { p: Product }) {
  const { add } = useCart();
  const [ok, setOk] = useState(false);
  return (
    <div className="tray-item">
      <Link href={`/product/${p.slug}`} className="tray-image">
        <Image src={p.image} width={260} height={175} alt={p.name} />
      </Link>
      <div className="tray-copy">
        <div className="tray-name-price">
          <Link href={`/product/${p.slug}`}>{p.name}</Link>
          <strong>{Math.round(p.price / 1000)}</strong>
        </div>
        <div className="tray-actions">
          <button
            className={ok ? 'done' : ''}
            onClick={() => {
              add(p.slug);
              setOk(true);
              setTimeout(() => setOk(false), 800);
            }}
          >
            {ok ? 'ĐÃ THÊM' : 'MUA NGAY'}
          </button>
          <button onClick={() => add(p.slug)} aria-label={`Thêm ${p.name}`}>
            <CartGlyph />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MenuGroup({
  id,
  label,
  layout,
  items,
}: {
  id: string;
  label: string;
  layout?: 'teaware' | 'tray';
  items: Product[];
}) {
  if (layout === 'teaware') {
    return (
      <div id={id} className="special-menu-group teaware-row">
        <div className="special-title">{label}</div>
        <div className="teaware-matrix">
          {items.map((p) => (
            <TeawareItem key={p.slug} p={p} />
          ))}
        </div>
      </div>
    );
  }

  if (layout === 'tray') {
    return (
      <div id={id} className="special-menu-group tray-row">
        <div className="tray-matrix">
          {items.map((p) => (
            <TrayItem key={p.slug} p={p} />
          ))}
        </div>
        <div className="special-title tray-title">{label}</div>
      </div>
    );
  }

  // Chunk products in rows of 3
  const rows: Product[][] = [];
  for (let i = 0; i < items.length; i += 3) {
    rows.push(items.slice(i, i + 3));
  }

  return (
    <div id={id} className="menu-group-block">
      {rows.map((row, ri) => (
        <div className="menu-row" key={ri}>
          <div className={`group-title ${ri > 0 ? 'blank' : ''}`}>
            {ri === 0 &&
              label.split(' ').map((word, wi) => <span key={wi}>{word}</span>)}
          </div>
          {[0, 1, 2].map((colIdx) =>
            row[colIdx] ? (
              <ProductCard key={row[colIdx].slug} p={row[colIdx]} />
            ) : (
              <div key={colIdx} className="empty-product-cell" />
            )
          )}
        </div>
      ))}
    </div>
  );
}
