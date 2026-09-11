'use client';

import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function FallingTeaShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth mouse parallax physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax layers with different depth factors
  const layer1X = useTransform(smoothX, [-0.5, 0.5], [-24, 24]);
  const layer1Y = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

  const layer2X = useTransform(smoothX, [-0.5, 0.5], [20, -20]);
  const layer2Y = useTransform(smoothY, [-0.5, 0.5], [18, -18]);

  const layer3X = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);
  const layer3Y = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="falling-tea-stage"
      aria-label="Thức trà Mộc Phiêu hội tụ vào giỏ tre"
    >
      <div className="falling-tea-stage-inner">
        {/* =========================================================
            FLOATING INGREDIENTS (Individually animated with physics)
            ========================================================= */}

        {/* 1. Mứt Dừa (Top Left) */}
        <motion.div
          className="falling-item item-mut-dua-top-left"
          style={{ x: layer1X, y: layer1Y }}
          initial={{ opacity: 0, y: -90, rotate: -10 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{
              y: [-8, 8, -8],
              rotate: [-2.5, 2.5, -2.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image
              src="/assets/menu/mut-dua.png"
              width={160}
              height={125}
              alt="Mứt dừa tươi nguyên bản"
              className="falling-dish-img"
            />
          </motion.div>
        </motion.div>

        {/* 2. Mứt Táo Đỏ (Top Center) */}
        <motion.div
          className="falling-item item-tao-do-top-center"
          style={{ x: layer2X, y: layer2Y }}
          initial={{ opacity: 0, y: -110, rotate: 6 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{
              y: [7, -9, 7],
              rotate: [2, -2, 2],
            }}
            transition={{
              duration: 5.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.4,
            }}
          >
            <Image
              src="/assets/menu/mut-man.png"
              width={190}
              height={145}
              alt="Mứt táo đỏ đậm vị"
              className="falling-dish-img"
            />
          </motion.div>
        </motion.div>

        {/* 3. Trà Đại Sơn Khê (Top Right) */}
        <motion.div
          className="falling-item item-dai-son-khe-top-right"
          style={{ x: layer1X, y: layer1Y }}
          initial={{ opacity: 0, y: -95, rotate: 12 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.05, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{
              y: [-10, 6, -10],
              rotate: [-3, 2, -3],
            }}
            transition={{
              duration: 5.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.8,
            }}
          >
            <Image
              src="/assets/menu/dai-son-khe.png"
              width={210}
              height={160}
              alt="Trà khô Đại Sơn Khê"
              className="falling-dish-img"
            />
          </motion.div>
        </motion.div>

        {/* 4. Trà Hồng Nữ Nhi (Bottom Left) */}
        <motion.div
          className="falling-item item-hong-nu-nhi-bot-left"
          style={{ x: layer3X, y: layer3Y }}
          initial={{ opacity: 0, y: -70, rotate: -8 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.95, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{
              y: [6, -8, 6],
              rotate: [2.5, -2.5, 2.5],
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.2,
            }}
          >
            <Image
              src="/assets/menu/hong-nu-nhi.png"
              width={200}
              height={155}
              alt="Búp trà vàng Hồng Nữ Nhi"
              className="falling-dish-img"
            />
          </motion.div>
        </motion.div>

        {/* =========================================================
            CENTER BASKET (Thúng tre lớn hội tụ nguyên liệu)
            ========================================================= */}
        <motion.div
          className="falling-center-basket"
          initial={{ opacity: 0, scale: 0.92, y: 35 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{
              scale: [1, 1.012, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="basket-img-wrap"
          >
            <Image
              src="/assets/about_basket_isolated.png"
              width={560}
              height={450}
              alt="Thúng tre Mộc Phiêu hội tụ thức trà"
              priority
              className="main-basket-img"
            />
          </motion.div>
        </motion.div>

        {/* =========================================================
            MASCOT (Linh vật chú bé lá chè bên phải)
            ========================================================= */}
        <motion.div
          className="falling-mascot-wrap"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{
              y: [-6, 6, -6],
              rotate: [-1.5, 1.5, -1.5],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image
              src="/assets/about_mascot_isolated.png"
              width={280}
              height={330}
              alt="Linh vật Mộc Phiêu bưng khay trà"
              className="mascot-img"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
