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

  // Parallax layers
  const layer1X = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const layer1Y = useTransform(smoothY, [-0.5, 0.5], [-16, 16]);

  const layer2X = useTransform(smoothX, [-0.5, 0.5], [16, -16]);
  const layer2Y = useTransform(smoothY, [-0.5, 0.5], [14, -14]);

  const layer3X = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const layer3Y = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

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
          initial={{ opacity: 0, y: -70, rotate: -8 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{
              y: [-7, 7, -7],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 4.8,
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
          initial={{ opacity: 0, y: -90, rotate: 4 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{
              y: [6, -8, 6],
              rotate: [2, -2, 2],
            }}
            transition={{
              duration: 5.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.3,
            }}
          >
            <Image
              src="/assets/menu/mut-man.png"
              width={180}
              height={140}
              alt="Mứt táo đỏ đậm vị"
              className="falling-dish-img"
            />
          </motion.div>
        </motion.div>

        {/* 3. Trà Đại Sơn Khê (Top Right) */}
        <motion.div
          className="falling-item item-dai-son-khe-top-right"
          style={{ x: layer1X, y: layer1Y }}
          initial={{ opacity: 0, y: -80, rotate: 10 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.95, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{
              y: [-8, 6, -8],
              rotate: [-2.5, 2, -2.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.6,
            }}
          >
            <Image
              src="/assets/menu/dai-son-khe.png"
              width={200}
              height={155}
              alt="Trà khô Đại Sơn Khê"
              className="falling-dish-img"
            />
          </motion.div>
        </motion.div>

        {/* 4. Trà Hồng Nữ Nhi (Bottom Left) */}
        <motion.div
          className="falling-item item-hong-nu-nhi-bot-left"
          style={{ x: layer3X, y: layer3Y }}
          initial={{ opacity: 0, y: -60, rotate: -6 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{
              y: [5, -7, 5],
              rotate: [2, -2, 2],
            }}
            transition={{
              duration: 4.6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.2,
            }}
          >
            <Image
              src="/assets/menu/hong-nu-nhi.png"
              width={190}
              height={145}
              alt="Búp trà vàng Hồng Nữ Nhi"
              className="falling-dish-img"
            />
          </motion.div>
        </motion.div>

        {/* =========================================================
            CENTER BASKET (Thúng tre lớn trong suốt)
            ========================================================= */}
        <motion.div
          className="falling-center-basket"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
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
              src="/assets/anim-basket.png"
              width={510}
              height={370}
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
          initial={{ opacity: 0, x: 40, scale: 0.92 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={{
              y: [-5, 5, -5],
              rotate: [-1.5, 1.5, -1.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image
              src="/assets/about_mascot_isolated.png"
              width={260}
              height={300}
              alt="Linh vật Mộc Phiêu bưng khay trà"
              className="mascot-img"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
