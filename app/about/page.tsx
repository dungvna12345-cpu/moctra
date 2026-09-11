'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import FallingTeaShowcase from '@/components/FallingTeaShowcase';

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* 1. Hero Section */}
      <section className="about-hero">
        <Image
          src="/assets/about_hero_full.jpg"
          width={1920}
          height={532}
          alt="Về Quán Trà Mộc Phiêu - Gác lại ưu phiền, chạm vị trà"
          priority
          className="about-hero-banner"
        />
      </section>

      {/* 2. Brand Ribbon Top */}
      <div className="brand-ribbon">
        <span>Gác lại ưu phiền</span>
        <i className="clouds">☁ ☁</i>
        <span>Mộc Phiêu</span>
        <i className="clouds">☁ ☁</i>
        <span>CHẠM VỊ TRÀ</span>
        <i className="clouds">☁ ☁</i>
        <span>Mộc Phiêu</span>
      </div>

      {/* 3. Thức Trà Mộc Mạc Intro */}
      <section className="about-intro-section">
        <Reveal>
          <div className="about-intro-content">
            <div className="about-intro-title-wrap">
              <Image
                src="/assets/about-thuc-tra-title.png"
                alt="thức trà mộc mạc"
                width={420}
                height={120}
                className="about-intro-title-img"
              />
            </div>
            <p className="about-intro-text">
              TỪ LÁ CHÈ TƯƠI ĐẾN TÁCH TRÀ AN YÊN.
              <br />
              CHÚNG TÔI MANG HƯƠNG VỊ MỘC MẠC CỦA NƯƠNG ĐỒI VÀO NHỊP SỐNG HIỆN ĐẠI.
              <br />
              TỪNG BÚP CHÈ ĐƯỢC CHẾ BIẾN TỈ MỈ, GIỮ TRỌN VỊ CHÁT NHẸ VÀ NGỌT HẬU NGUYÊN BẢN.
              <br />
              KHÔNG CẦU KỲ HAY XA LẠ, ĐÂY ĐƠN GIẢN LÀ TRẢI NGHIỆM THƯỞNG TRÀ TĨNH LẶNG, GIẢN ĐƠN VÀ
              GẦN GŨI.
            </p>
          </div>
        </Reveal>
      </section>

      {/* 4. Showcase Ingredients Falling & Floating Animation */}
      <FallingTeaShowcase />

      {/* 5. Brand Ribbon Middle */}
      <div className="brand-ribbon">
        <span>Mộc Phiêu</span>
        <i className="clouds">☁ ☁</i>
        <span>Gác lại ưu phiền</span>
        <i className="clouds">☁ ☁</i>
        <span>Mộc Phiêu</span>
        <i className="clouds">☁ ☁</i>
        <span>CHẠM VỊ TRÀ</span>
      </div>

      {/* 6. Tầm Nhìn (Vision) */}
      <section className="about-narrative-section">
        <Reveal>
          <div className="about-narrative-grid grid-left-text">
            <div className="about-narrative-text">
              <h2>tầm nhìn</h2>
              <p>
                TRÀ QUÁN MỘC PHIÊU ĐỊNH HƯỚNG TRỞ THÀNH KHÔNG GIAN THƯỞNG TRÀ MANG ĐẬM BẢN SẮC
                RIÊNG, LÀ CHỐN AN YÊN ĐƯỢC YÊU THÍCH GIỮA LÒNG ĐÔ THỊ. CHÚNG TÔI MONG MUỐN ĐƯA VĂN
                HÓA TRÀ TRUYỀN THỐNG VÀ NHỮNG HƯƠNG VỊ MỘC MẠC HÒA NHỊP VÀO ĐỜI SỐNG HIỆN ĐẠI BẰNG
                MỘT PHONG CÁCH TINH TẾ, GẦN GŨI VÀ PHÁT TRIỂN BỀN VỮNG.
              </p>
            </div>
            <motion.div
              className="about-narrative-photo-wrap"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/assets/about-photo-tamnhin.jpg"
                alt="Đồi chè Mộc Phiêu - Tầm nhìn"
                width={560}
                height={320}
                className="about-narrative-photo"
              />
            </motion.div>
          </div>
        </Reveal>
      </section>

      {/* 7. Sứ Mệnh (Mission) */}
      <section className="about-narrative-section">
        <Reveal>
          <div className="about-narrative-grid grid-right-text">
            <motion.div
              className="about-narrative-photo-wrap"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/assets/about-photo-sumenh.jpg"
                alt="Nghệ nhân thu hoạch trà - Sứ mệnh"
                width={560}
                height={320}
                className="about-narrative-photo"
              />
            </motion.div>
            <div className="about-narrative-text">
              <h2>sứ mệnh</h2>
              <p>
                MỘC PHIÊU TẠO NÊN NHỮNG TÁCH TRÀ ĐƯỢM VỊ TỪ SỰ KẾT HỢP GIỮA LÁ TRÀ TINH TUYỂN VÀ
                NGHỆ THUẬT PHA CHẾ TỈ MỈ. KHÔNG CHỈ MANG ĐẾN TRẢI NGHIỆM THƯỞNG TRÀ TRỌN VẸN VÀ
                CHỈN CHU, THƯƠNG HIỆU CÒN GÓP PHẦN LAN TỎA VĂN HÓA TRÀ TRUYỀN THỐNG THÔNG QUA MỘT
                KHÔNG GIAN AN YÊN, MỘC MẠC VÀ GẦN GŨI VỚI NHỊP SỐNG HIỆN ĐẠI.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 8. Giá Trị (Values) */}
      <section className="about-narrative-section">
        <Reveal>
          <div className="about-narrative-grid grid-left-text">
            <div className="about-narrative-text">
              <h2>giá trị</h2>
              <p>
                MỘC PHIÊU TRÂN TRỌNG HƯƠNG VỊ TRÀ NGUYÊN BẢN VÀ SỰ CHỈN CHU TRONG PHA CHẾ. CHÚNG
                TÔI LÀM MỚI VĂN HÓA THƯỞNG TRÀ TRUYỀN THỐNG BẰNG PHONG CÁCH TINH TẾ, HIỆN ĐẠI MÀ
                VẪN GẦN GŨI. BẰNG TINH THẦN MỘC MẠC, AN YÊN, MỘC PHIÊU DUY TRÌ TRẢI NGHIỆM NHẤT
                QUÁN TỪ HƯƠNG VỊ ĐẾN KHÔNG GIAN, TẠO NÊN MỘT BẢN SẮC RIÊNG KHÓ QUÊN.
              </p>
            </div>
            <motion.div
              className="about-narrative-photo-wrap"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/assets/about-photo-giatri.jpg"
                alt="Đồi chè bát ngát - Giá trị"
                width={560}
                height={320}
                className="about-narrative-photo"
              />
            </motion.div>
          </div>
        </Reveal>
      </section>

      {/* 9. Đội Ngũ (Team Full-width Banner) */}
      <section className="about-team-banner-section">
        <Reveal>
          <div className="about-team-banner-wrap">
            <Image
              src="/assets/about-team-full-banner.jpg"
              width={1920}
              height={580}
              alt="Đội ngũ thợ trà Mộc Phiêu"
              className="about-team-banner-img"
              priority
            />
          </div>
        </Reveal>
      </section>

      {/* 10. Quán Trà (Spaces Grid with 3 Photos) */}
      <section className="about-spaces-section">
        <Reveal>
          <div className="about-spaces-header">
            <h2>quán trà</h2>
          </div>
          <div className="about-spaces-grid">
            <motion.div
              className="about-space-col"
              whileHover={{ translateY: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div className="about-space-img-wrap">
                <Image
                  src="/assets/about-space-1.jpg"
                  width={420}
                  height={500}
                  alt="Mặt tiền quán trà Mộc Phiêu"
                />
              </div>
            </motion.div>
            <motion.div
              className="about-space-col"
              whileHover={{ translateY: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div className="about-space-img-wrap">
                <Image
                  src="/assets/about-space-2.jpg"
                  width={420}
                  height={500}
                  alt="Không gian thưởng trà mây tre"
                />
              </div>
            </motion.div>
            <motion.div
              className="about-space-col"
              whileHover={{ translateY: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div className="about-space-img-wrap">
                <Image
                  src="/assets/about-space-3.jpg"
                  width={420}
                  height={500}
                  alt="Quầy trà truyền thống"
                />
              </div>
            </motion.div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
