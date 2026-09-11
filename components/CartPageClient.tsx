'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from './CartProvider';
import { formatVnd } from '@/lib/products';
import OrderModal from './OrderModal';

export default function CartPageClient() {
  const { items, setQty, remove, total } = useCart();
  const [pending, setPending] = useState<string | null>(null);
  const [note, setNote] = useState('');

  if (!items.length) {
    return (
      <section className="cart-section empty-state">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          GIỎ HÀNG CỦA BẠN
        </motion.h1>
        <motion.div
          className="empty-cart"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <strong>“HÔNG” CÓ GÌ TRONG GIỎ HẾT</strong>
          <p>LƯỚT MENU CỦA SHOP CHỌN MÓN NGAY!!</p>
          <Link href="/menu" className="outline-buy">
            XEM SẢN PHẨM
          </Link>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="cart-section">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        GIỎ HÀNG CỦA BẠN
      </motion.h1>

      <div className="cart-head">
        <span>SẢN PHẨM</span>
        <span>GIÁ</span>
        <span>SỐ LƯỢNG</span>
        <span>TỔNG</span>
        <span />
      </div>

      <div className="cart-list">
        <AnimatePresence>
          {items.map(({ product, qty }) => (
            <motion.div
              layout
              className="cart-row"
              key={product.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0, overflow: 'hidden' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="cart-product">
                <Image
                  src={product.image}
                  width={150}
                  height={100}
                  alt={product.name}
                  priority
                />
                <div>
                  <b>{product.name}</b>
                  <small>100G</small>
                </div>
              </div>

              <span>{formatVnd(product.price)}</span>

              <div className="quantity">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQty(product.slug, qty - 1)}
                  aria-label="Giảm số lượng"
                >
                  −
                </motion.button>
                <b>{qty}</b>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQty(product.slug, qty + 1)}
                  aria-label="Tăng số lượng"
                >
                  +
                </motion.button>
              </div>

              <span>{formatVnd(product.price * qty)}</span>

              <motion.button
                whileTap={{ scale: 0.88 }}
                className="remove"
                onClick={() => setPending(product.slug)}
                aria-label={`Xóa ${product.name}`}
              >
                ×
              </motion.button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="cart-total">
        <span>THÀNH TIỀN:</span>
        <AnimatePresence mode="wait">
          <motion.strong
            key={total}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.18 }}
          >
            {formatVnd(total)}
          </motion.strong>
        </AnimatePresence>
      </div>

      <div className="cart-bottom">
        <label>
          GHI CHÚ CHO MỘC CÓ
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Ví dụ: Đóng gói cẩn thận, giao giờ hành chính..."
          />
        </label>
        <Link href="/payment" className="solid-buy">
          THANH TOÁN
        </Link>
      </div>

      {pending && (
        <OrderModal
          title="BẠN CÓ MUỐN BỎ 1 SẢN PHẨM KHỎI GIỎ HÀNG CỦA BẠN ?"
          onClose={() => setPending(null)}
          primary="HỦY"
          secondary="ĐỒNG Ý"
          onPrimary={() => setPending(null)}
          onSecondary={() => {
            remove(pending);
            setPending(null);
          }}
        />
      )}
    </section>
  );
}
