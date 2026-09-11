'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function FallingTeaShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={containerRef}
      className={`tea-fall-stage ${inView ? 'is-active' : ''}`}
      onMouseMove={handleMouseMove}
      aria-label="Thức trà Mộc Phiêu hội tụ"
    >
      {/* Background ambient decorative glow */}
      <div className="tea-fall-ambient" />

      {/* Floating Tea Ingredients */}
      {/* 1. Yellow tea bowl top */}
      <div
        className="falling-item item-tea-top"
        style={{
          transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
        }}
      >
        <Image
          src="/assets/anim-tea-top.png"
          width={220}
          height={210}
          alt="Trà vàng tinh tuyển"
          priority
        />
      </div>

      {/* 2. Mut dua left */}
      <div
        className="falling-item item-mut-left"
        style={{
          transform: `translate(${mousePos.x * -18}px, ${mousePos.y * -14}px)`,
        }}
      >
        <Image
          src="/assets/anim-mut-dua-left.png"
          width={170}
          height={170}
          alt="Mứt dừa truyền thống"
        />
      </div>

      {/* 3. Mut dua center */}
      <div
        className="falling-item item-mut-center"
        style={{
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 22}px)`,
        }}
      >
        <Image
          src="/assets/anim-mut-dua-center.png"
          width={240}
          height={230}
          alt="Mứt dừa thơm bùi"
        />
      </div>

      {/* 4. Teapot and Cup */}
      <div
        className="falling-item item-teapot"
        style={{
          transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -16}px)`,
        }}
      >
        <Image
          src="/assets/anim-teapot.png"
          width={210}
          height={180}
          alt="Ấm trà gốm ngọc"
        />
      </div>

      {/* 5. Black tea bowl right */}
      <div
        className="falling-item item-tea-black"
        style={{
          transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 18}px)`,
        }}
      >
        <Image
          src="/assets/anim-tea-black.png"
          width={230}
          height={200}
          alt="Trà đen đậm vị"
        />
      </div>

      {/* 6. Yellow tea bowl bottom left */}
      <div
        className="falling-item item-tea-bot-left"
        style={{
          transform: `translate(${mousePos.x * -22}px, ${mousePos.y * -20}px)`,
        }}
      >
        <Image
          src="/assets/anim-tea-bot-left.png"
          width={240}
          height={230}
          alt="Trà búp cổ thụ"
        />
      </div>

      {/* 7. Large Woven Bamboo Basket at Bottom Center */}
      <div className="falling-basket">
        <Image
          src="/assets/anim-basket.png"
          width={540}
          height={380}
          alt="Thúng tre Mộc Phiêu"
          priority
        />
      </div>

      {/* 8. Mascot Carrying Wooden Tray on Right */}
      <div className="falling-mascot">
        <Image
          src="/assets/anim-mascot.png"
          width={290}
          height={330}
          alt="Mascot Mộc Phiêu bưng khay trà"
        />
      </div>
    </section>
  );
}
