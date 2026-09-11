'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FallingTeaShowcase() {
  return (
    <section className="about-showcase-stage" aria-label="Khung nghệ thuật thức trà Mộc Phiêu">
      <div className="about-showcase-container">
        {/* Main Artwork Stage (High-Res Figma slice) */}
        <motion.div
          className="about-showcase-art-wrap"
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/assets/about-sec-basket-stage.png"
            width={1200}
            height={688}
            alt="Thúng tre hội tụ thức trà và linh vật Mộc Phiêu"
            priority
            className="about-showcase-main-img"
          />

          {/* Micro-floating animated badges/dishes for dynamic life */}
          <motion.div
            className="floating-micro-dish dish-1"
            animate={{
              y: [-6, 6, -6],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image
              src="/assets/menu/mut-dua.png"
              width={140}
              height={110}
              alt="Mứt dừa thơm bùi"
              className="micro-dish-img"
            />
          </motion.div>

          <motion.div
            className="floating-micro-dish dish-2"
            animate={{
              y: [6, -6, 6],
              rotate: [2, -2, 2],
            }}
            transition={{
              duration: 5.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          >
            <Image
              src="/assets/menu/mut-man.png"
              width={140}
              height={110}
              alt="Mứt táo đỏ truyền thống"
              className="micro-dish-img"
            />
          </motion.div>

          <motion.div
            className="floating-micro-dish dish-3"
            animate={{
              y: [-8, 5, -8],
              rotate: [-3, 3, -3],
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          >
            <Image
              src="/assets/menu/dai-son-khe.png"
              width={160}
              height={125}
              alt="Trà Đại Sơn Khê"
              className="micro-dish-img"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
