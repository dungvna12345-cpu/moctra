'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { products, Product } from '@/lib/products';

type CartLine = { product: Product; qty: number };
type CartCtx = {
  items: CartLine[];
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  count: number;
  total: number;
  hydrated: boolean;
};
const Ctx = createContext<CartCtx | null>(null);
const KEY='moc-phieu-cart-v2';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);
  const [hydrated,setHydrated]=useState(false);
  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY) || localStorage.getItem('moc-phieu-cart');
      if (v) {
        const raw=JSON.parse(v) as CartLine[];
        const safe=raw.map(x=>({product:products.find(p=>p.slug===x.product?.slug) || x.product,qty:Math.max(1,Number(x.qty)||1)})).filter(x=>x.product);
        setItems(safe);
      }
    } catch {}
    setHydrated(true);
  }, []);
  useEffect(() => { if(!hydrated) return; try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {} }, [items,hydrated]);
  const add = (slug: string, qty = 1) => setItems(old => {
    const p = products.find(x => x.slug === slug); if (!p) return old;
    const hit = old.find(x => x.product.slug === slug);
    return hit ? old.map(x => x.product.slug === slug ? { ...x, qty: x.qty + Math.max(1,qty) } : x) : [...old, { product: p, qty: Math.max(1,qty) }];
  });
  const setQty = (slug: string, qty: number) => setItems(old => old.map(x => x.product.slug === slug ? { ...x, qty: Math.max(1, qty) } : x));
  const remove = (slug: string) => setItems(old => old.filter(x => x.product.slug !== slug));
  const clear = () => setItems([]);
  const value = useMemo(() => ({ items, add, setQty, remove, clear, hydrated, count: items.reduce((s,x)=>s+x.qty,0), total: items.reduce((s,x)=>s+x.qty*x.product.price,0) }), [items,hydrated]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export const useCart = () => { const x = useContext(Ctx); if (!x) throw new Error('CartProvider missing'); return x; };
