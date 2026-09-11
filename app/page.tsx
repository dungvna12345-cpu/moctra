'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import AccountModal from '@/components/AccountModal';

export default function HomePage() {
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <main className="home-page">
      {/* 1. Hero Section with Full Uncropped Banner */}
      <section className="hero-banner-section">
        <div className="hero-banner-wrap">
          <Image
            src="/assets/hero-banner-full.jpg"
            alt="Mộc Phiêu — chạm vị trà, phiêu miền an yên"
            width={1920}
            height={532}
            priority
            className="hero-banner-img"
          />
          <Link href="/menu" className="hero-banner-hitbox" aria-label="Điểm trà" />
        </div>
      </section>

      {/* 2. Brand Ribbon */}
      <div className="brand-ribbon">
        <span>CHẠM VỊ TRÀ</span>
        <i className="clouds">☁ ☁</i>
        <span>Mộc Phiêu</span>
        <i className="clouds">☁ ☁</i>
        <span>Gác lại ưu phiền</span>
        <i className="clouds">☁ ☁</i>
      </div>

      {/* 2b. Thưởng thức vị trà thanh mát, đậm đà */}
      <section className="home-intro-cta-section">
        <Reveal>
          <div className="home-intro-cta-content">
            <h2 className="home-intro-cta-title">
              thưởng thức vị trà
              <br />
              thanh mát, đậm đà
            </h2>
            <div className="home-intro-cta-actions">
              <Link href="/menu" className="btn-cta-outline">
                KHÁM PHÁ TRÀ
              </Link>
              <button
                type="button"
                onClick={() => setAccountOpen(true)}
                className="btn-cta-outline"
              >
                ĐĂNG KÝ HỘ TỊCH
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 3. Set Thưởng Trà Section */}
      <section className="tea-set-section">
        <Reveal>
          <div className="section-title">
            <motion.span
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              ☁
            </motion.span>
            <h2>set thưởng trà</h2>
            <motion.span
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              ☁
            </motion.span>
          </div>
        </Reveal>

        <div className="set-grid">
          {/* Hội Ngộ (Wide Top Card) */}
          <Reveal className="set-card set-wide">
            <div className="set-copy">
              <div className="set-heading">
                <h3>Hội Ngộ</h3>
                <strong>285</strong>
              </div>
              <p>
                ẤM TRÀ ĐẬM VỊ CÙNG MỨT
                <br />
                TRUYỀN THỐNG. TRỌN VẸN BUỔI
                <br />
                HỘI NGỘ.
              </p>
              <div className="set-cta">
                <Link href="/product/hoi-ngo" className="set-buy">
                  Mua ngay
                </Link>
                <Link href="/cart" className="set-cart-link" aria-label="Giỏ hàng">
                  <span className="cart-lines"></span>
                </Link>
              </div>
            </div>
            <div className="set-products-row">
              <motion.div
                whileHover={{ scale: 1.08, translateY: -4 }}
                transition={{ duration: 0.3 }}
                className="set-dish-wrap"
              >
                <Image
                  src="/assets/menu/dai-son-khe.png"
                  width={155}
                  height={120}
                  alt="Trà Hội Ngộ"
                  className="set-dish-img"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, translateY: -4 }}
                transition={{ duration: 0.3 }}
                className="set-dish-wrap"
              >
                <Image
                  src="/assets/menu/mut-dua.png"
                  width={155}
                  height={120}
                  alt="Mứt Dừa"
                  className="set-dish-img"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, translateY: -4 }}
                transition={{ duration: 0.3 }}
                className="set-dish-wrap"
              >
                <Image
                  src="/assets/menu/mut-gung.png"
                  width={155}
                  height={120}
                  alt="Mứt Gừng"
                  className="set-dish-img"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, translateY: -4 }}
                transition={{ duration: 0.3 }}
                className="set-dish-wrap"
              >
                <Image
                  src="/assets/menu/mut-quat.png"
                  width={155}
                  height={120}
                  alt="Mứt Quất"
                  className="set-dish-img"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, translateY: -4 }}
                transition={{ duration: 0.3 }}
                className="set-dish-wrap"
              >
                <Image
                  src="/assets/menu/mut-bi.png"
                  width={155}
                  height={120}
                  alt="Mứt Bí"
                  className="set-dish-img"
                />
              </motion.div>
            </div>
          </Reveal>

          {/* Độc Ẩm (Bottom Left Card) */}
          <Reveal className="set-card set-col" delay={120}>
            <div className="set-dish-stack stack-doc">
              <Image
                src="/assets/menu/mut-dua.png"
                width={135}
                height={105}
                alt="Mứt Dừa"
                className="dish-back"
              />
              <Image
                src="/assets/menu/dai-son-khe.png"
                width={165}
                height={125}
                alt="Trà Độc Ẩm"
                className="dish-front"
              />
            </div>
            <div className="set-copy right">
              <div className="set-heading">
                <h3>Độc Ẩm</h3>
                <strong>165</strong>
              </div>
              <p>
                GÓC NHỎ AN YÊN. TRÀ THANH,
                <br />
                BÁNH NGỌT, ĐỦ TĨNH LẶNG
                <br />
                TÂM TRÍ.
              </p>
              <div className="set-cta">
                <Link href="/product/doc-am" className="set-buy">
                  Mua ngay
                </Link>
                <Link href="/cart" className="set-cart-link" aria-label="Giỏ hàng">
                  <span className="cart-lines"></span>
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Đối Ẩm (Bottom Right Card) */}
          <Reveal className="set-card set-col" delay={200}>
            <div className="set-dish-stack stack-doi">
              <Image
                src="/assets/menu/mut-dua.png"
                width={110}
                height={88}
                alt="Mứt Dừa"
                className="dish-back-left"
              />
              <Image
                src="/assets/menu/mut-gung.png"
                width={110}
                height={88}
                alt="Mứt Gừng"
                className="dish-back-right"
              />
              <Image
                src="/assets/menu/dai-son-khe.png"
                width={160}
                height={120}
                alt="Trà Đối Ẩm"
                className="dish-front-center"
              />
            </div>
            <div className="set-copy right">
              <div className="set-heading">
                <h3>Đối Ẩm</h3>
                <strong>185</strong>
              </div>
              <p>
                CHÉN TRÀ ĐỐI ẨM, CHIA SẺ
                <br />
                BUỒN VUI NGÀY THƯỜNG.
              </p>
              <div className="set-cta">
                <Link href="/product/doi-am" className="set-buy">
                  Mua ngay
                </Link>
                <Link href="/cart" className="set-cart-link" aria-label="Giỏ hàng">
                  <span className="cart-lines"></span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Footer */}
      <Footer />

      <AccountModal isOpen={accountOpen} onClose={() => setAccountOpen(false)} />
    </main>
  );
}
