import Image from 'next/image';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import MenuGroup from '@/components/MenuGroup';
import FeaturedTeaShowcase from '@/components/FeaturedTeaShowcase';
import { menuGroups, products } from '@/lib/products';

export default function MenuPage() {
  return (
    <main className="menu-page">
      <section className="menu-hero">
        <Image src="/assets/menu-teapot.png" width={280} height={220} alt="" />
        <h1>thực đơn</h1>
        <Image src="/assets/menu-mascot.png" width={220} height={230} alt="" />
      </section>

      {/* Featured Teas "Trà Ngon Giải Nhiệt" */}
      <Reveal>
        <FeaturedTeaShowcase />
      </Reveal>

      <nav className="category-tabs">
        {menuGroups.map((g) => (
          <a key={g.id} href={`#${g.id}`}>
            {g.label}
          </a>
        ))}
      </nav>

      <section className="menu-groups">
        {menuGroups.map((g, idx) => (
          <Reveal key={g.id} delay={(idx % 3) * 55}>
            <MenuGroup
              id={g.id}
              label={g.label}
              layout={g.layout}
              items={products.filter((p) => p.category === g.id)}
            />
          </Reveal>
        ))}
      </section>
      <Footer />
    </main>
  );
}
