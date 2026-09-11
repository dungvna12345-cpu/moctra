'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FallingTeaShowcase() {
  return (
    <section className="about-showcase-stage" aria-label="Khung nghệ thuật thức trà Mộc Phiêu">
      <div className="about-showcase-container">
        <motion.div
          className="about-showcase-art-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/assets/about-falling-tea-stage-clean.jpg"
            width={1920}
            height={800}
            alt="Thúng tre hội tụ thức trà và linh vật Mộc Phiêu"
            priority
            className="about-showcase-main-img"
          />
        </motion.div>
      </div>
    </section>
  );
}
