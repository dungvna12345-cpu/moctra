'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/lib/products';
import { useCart } from './CartProvider';

export default function ProductCard({
  p,
  compact = false,
}: {
  p: Product;
  compact?: boolean;
}) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    add(p.slug);
    setAdded(true);
    setTimeout(() => setAdded(false), 900);
  };

  return (
    <article className={`product-card ${compact ? 'compact' : ''}`}>
      <div className="product-meta">
        <h3>{p.name}</h3>
        <span>{Math.round(p.price / 1000)}</span>
      </div>

      <Link href={`/product/${p.slug}`} className="product-image-wrap">
        <motion.div
          className="product-image-motion"
          whileHover={{ scale: 1.07, rotate: -1.2 }}
          transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <Image
            src={p.image}
            alt={p.name}
            width={420}
            height={290}
            className="product-image"
            priority={compact}
          />
        </motion.div>
      </Link>

      <div className="product-actions">
        <motion.button
          whileTap={{ scale: 0.94 }}
          onClick={handleAdd}
          className={`mini-buy ${added ? 'done' : ''}`}
        >
          {added ? '✓ ĐÃ THÊM' : 'MUA NGAY'}
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.88 }}
          whileHover={{ scale: 1.15 }}
          onClick={handleAdd}
          className="mini-cart"
          aria-label={`Thêm ${p.name} vào giỏ hàng`}
        >
          <span className="cart-lines" />
        </motion.button>
      </div>
    </article>
  );
}
