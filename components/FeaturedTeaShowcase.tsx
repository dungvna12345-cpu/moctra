'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useCart } from './CartProvider';
import { useState } from 'react';

const featuredTeas = [
  {
    slug: 'dai-son-khe',
    name: 'ĐẠI SƠN KHÊ',
    price: 100,
    image: '/assets/menu/dai-son-khe.png',
  },
  {
    slug: 'hong-nu-nhi',
    name: 'HỒNG NỮ NHI',
    price: 100,
    image: '/assets/menu/hong-nu-nhi.png',
  },
  {
    slug: 'hong-tam-giao',
    name: 'HỒNG TÂM GIAO',
    price: 100,
    image: '/assets/menu/hong-tam-giao.png',
  },
];

export default function FeaturedTeaShowcase() {
  const { add } = useCart();
  const [addedSlug, setAddedSlug] = useState<string | null>(null);

  const handleAdd = (slug: string) => {
    add(slug);
    setAddedSlug(slug);
    setTimeout(() => setAddedSlug(null), 900);
  };

  return (
    <section className="featured-tea-section">
      <div className="featured-tea-container">
        {/* Left Column: Title & 3 Tea Items */}
        <div className="featured-tea-left">
          <h2 className="featured-tea-title">
            trà ngon
            <br />
            giải nhiệt
          </h2>

          <div className="featured-tea-list">
            {featuredTeas.map((tea) => (
              <div key={tea.slug} className="featured-tea-item">
                <Link href={`/product/${tea.slug}`} className="featured-tea-dish">
                  <Image
                    src={tea.image}
                    width={110}
                    height={85}
                    alt={tea.name}
                    className="featured-dish-img"
                  />
                </Link>
                <div className="featured-tea-info">
                  <div className="featured-tea-row">
                    <Link href={`/product/${tea.slug}`} className="featured-tea-name">
                      {tea.name}
                    </Link>
                    <span className="featured-tea-price">{tea.price}</span>
                  </div>
                  <div className="featured-tea-actions">
                    <button
                      className={`mini-buy ${addedSlug === tea.slug ? 'done' : ''}`}
                      onClick={() => handleAdd(tea.slug)}
                    >
                      {addedSlug === tea.slug ? '✓ ĐÃ THÊM' : 'MUA NGAY'}
                    </button>
                    <button
                      className="mini-cart"
                      onClick={() => handleAdd(tea.slug)}
                      aria-label={`Thêm ${tea.name} vào giỏ hàng`}
                    >
                      <span className="cart-lines" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Center & Right Column: Badges & Teapot Artwork */}
        <div className="featured-tea-right">
          {/* Floating Badges */}
          <motion.div
            className="tea-badge badge-dam-vi"
            animate={{ y: [-3, 3, -3], rotate: [-14, -12, -14] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            Đậm vị
          </motion.div>

          <motion.div
            className="tea-badge badge-ngot-hau"
            animate={{ y: [3, -3, 3] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            Ngọt hậu
          </motion.div>

          <motion.div
            className="tea-badge badge-thom-thanh"
            animate={{ y: [-4, 4, -4], rotate: [18, 20, 18] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            Thơm thanh
          </motion.div>

          {/* Teapot Artwork */}
          <div className="featured-tea-art">
            <Image
              src="/assets/menu-teapot.png"
              width={560}
              height={380}
              alt="Ấm trà gốm Mộc Phiêu"
              className="featured-art-img"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
