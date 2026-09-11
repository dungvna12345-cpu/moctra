'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from './CartProvider';
import AccountModal from './AccountModal';

export default function Header() {
  const pathname = usePathname();
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  // Body scroll lock on mobile menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  const isHome = pathname === '/';
  const isMenu = pathname.startsWith('/menu') || pathname.startsWith('/product');
  const isAbout = pathname === '/about' || pathname === '/ve-quan-tra';
  const isCart = pathname === '/cart';

  return (
    <>
      <header className="site-header">
        <nav className="nav-shell">
          <div className="nav-left">
            <Link className={`nav-link ${isHome ? 'active' : ''}`} href="/">
              Trang chủ
              {isHome && (
                <motion.span
                  layoutId="navUnderline"
                  className="nav-active-bar"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
            <Link className={`nav-link ${isMenu ? 'active' : ''}`} href="/menu">
              Thực đơn
              {isMenu && (
                <motion.span
                  layoutId="navUnderline"
                  className="nav-active-bar"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </div>

          <Link href="/" className="wordmark" aria-label="Mộc Phiêu">
            Mộc Phiêu
          </Link>

          <div className="nav-right">
            <Link className={`nav-link ${isAbout ? 'active' : ''}`} href="/about">
              Về quán trà
              {isAbout && (
                <motion.span
                  layoutId="navUnderline"
                  className="nav-active-bar"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            <button
              className="icon-button user-mark"
              aria-label="Tài khoản"
              onClick={() => setAccountOpen(true)}
            >
              <span />
            </button>

            <Link
              href="/cart"
              className={`cart-mark ${isCart ? 'active' : ''}`}
              aria-label={`Giỏ hàng ${count} sản phẩm`}
            >
              <span className="cart-lines" />
              <AnimatePresence>
                {count > 0 && (
                  <motion.b
                    key={count}
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                  >
                    {count}
                  </motion.b>
                )}
              </AnimatePresence>
            </Link>

            <button
              className={`mobile-toggle ${open ? 'open' : ''}`}
              aria-label={open ? 'Đóng menu' : 'Mở menu'}
              onClick={() => setOpen(!open)}
            >
              <i />
              <i />
              <i />
            </button>
          </div>
        </nav>

        {/* Mobile Drawer with AnimatePresence */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="mobile-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link onClick={() => setOpen(false)} href="/">
                Trang chủ
              </Link>
              <Link onClick={() => setOpen(false)} href="/menu">
                Thực đơn
              </Link>
              <Link onClick={() => setOpen(false)} href="/about">
                Về quán trà
              </Link>
              <Link onClick={() => setOpen(false)} href="/cart">
                Giỏ hàng ({count})
              </Link>
              <button
                className="mobile-drawer-account"
                onClick={() => {
                  setOpen(false);
                  setAccountOpen(true);
                }}
              >
                Tài khoản thành viên
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AccountModal isOpen={accountOpen} onClose={() => setAccountOpen(false)} />
    </>
  );
}
