'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product, formatVnd } from '@/lib/products';
import { useCart } from './CartProvider';

export default function ProductDetailClient({ product }: { product: Product }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [selectedThumb, setSelectedThumb] = useState(0);

  // Dynamic unit & options according to product kind
  const getUnit = () => {
    switch (product.kind) {
      case 'snack':
        return '/1 HỘP';
      case 'teaware':
        return '/1 BỘ';
      case 'combo':
        return '/1 SET';
      case 'packaging':
        return '/1 GÓI';
      default:
        return '/1 PHẦN';
    }
  };

  const getOptionConfig = () => {
    switch (product.kind) {
      case 'snack':
        return { label: 'CHỌN KHỐI LƯỢNG', options: ['150G', '250G', '500G'] };
      case 'teaware':
        return { label: 'CHỌN DUNG TÍCH', options: ['180ML', '250ML', '350ML'] };
      case 'combo':
        return { label: 'QUY CÁCH', options: ['TIÊU CHUẨN', 'HỘP QUÀ TẾT', 'CAO CẤP'] };
      case 'packaging':
        return { label: 'CHỌN TRỌNG LƯỢNG', options: ['100G', '200G', '500G'] };
      default:
        return { label: 'CHỌN SỐ GRAM', options: ['100G', '200G', '500G'] };
    }
  };

  const optConfig = getOptionConfig();
  const [selectedOpt, setSelectedOpt] = useState(optConfig.options[0]);

  const doAdd = () => {
    add(product.slug, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <section className="product-detail">
      {/* Gallery */}
      <div className="gallery">
        <motion.div
          className="main-photo"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: -1 }}
            transition={{ duration: 0.35 }}
          >
            <Image
              src={product.image}
              width={760}
              height={520}
              alt={product.name}
              priority
            />
          </motion.div>
        </motion.div>

        <div className="thumbs">
          {[0, 1, 2].map((i) => (
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={selectedThumb === i ? 'selected' : ''}
              key={i}
              onClick={() => setSelectedThumb(i)}
              aria-label={`Ảnh ${i + 1}`}
            >
              <Image src={product.image} width={130} height={100} alt="" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Info & Actions */}
      <motion.div
        className="detail-info"
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1>{product.name}</h1>
        <div className="detail-price">
          {formatVnd(product.price)}
          {getUnit()}
        </div>

        <p className="detail-label">{optConfig.label}</p>
        <div className="gram-options">
          {optConfig.options.map((opt) => (
            <label key={opt} className={selectedOpt === opt ? 'active' : ''}>
              <input
                type="radio"
                name="productOption"
                checked={selectedOpt === opt}
                onChange={() => setSelectedOpt(opt)}
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>

        <p className="detail-label quantity-label">SỐ LƯỢNG</p>
        <div className="detail-actions">
          <div className="quantity">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setQty(Math.max(1, qty - 1))}
              aria-label="Giảm số lượng"
            >
              −
            </motion.button>
            <AnimatePresence mode="wait">
              <motion.b
                key={qty}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.15 }}
              >
                {qty}
              </motion.b>
            </AnimatePresence>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setQty(qty + 1)}
              aria-label="Tăng số lượng"
            >
              +
            </motion.button>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.08 }}
            className="detail-cart"
            onClick={doAdd}
            aria-label="Thêm vào giỏ"
          >
            <span className="cart-lines" />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`outline-buy ${added ? 'done' : ''}`}
            onClick={doAdd}
          >
            {added ? '✓ ĐÃ THÊM' : 'MUA NGAY'}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
