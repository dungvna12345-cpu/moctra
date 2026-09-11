'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FallingTeaShowcase() {
  return (
    <section className="about-showcase-stage" aria-label="Khung nghệ thuật thức trà Mộc Phiêu">
      <div className="about-showcase-container">
        <motion.div
          className="about-showcase-art-wrap"
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/assets/about-sec-basket-stage.png"
            width={1200}
            height={688}
            alt="Thúng tre hội tụ thức trà và linh vật Mộc Phiêu"
            priority
            className="about-showcase-main-img"
          />
        </motion.div>
      </div>
    </section>
  );
}
