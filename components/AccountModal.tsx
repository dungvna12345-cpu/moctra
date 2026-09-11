'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AccountModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [isLogin, setIsLogin] = useState(true);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
        <motion.div
          className="modal-card account-modal-card"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 15 }}
          transition={{ type: 'spring', stiffness: 450, damping: 30 }}
        >
          <button className="modal-x" onClick={onClose} aria-label="Đóng">
            ×
          </button>

          <h3>{isLogin ? 'THÀNH VIÊN MỘC PHIÊU' : 'ĐĂNG KÝ THÀNH VIÊN'}</h3>

          {submitted ? (
            <div className="account-success-msg">
              <p>✓ Chào mừng bạn đến với Mộc Phiêu!</p>
              <p className="account-sub">Tài khoản của bạn đã sẵn sàng để tích điểm và nhận ưu đãi.</p>
              <button className="modal-primary" onClick={onClose}>
                TIẾP TỤC
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (phone.trim()) setSubmitted(true);
              }}
              className="account-form"
            >
              {!isLogin && (
                <label className="field full">
                  <span>HỌ VÀ TÊN</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nhập họ và tên..."
                    required
                  />
                </label>
              )}

              <label className="field full">
                <span>SỐ ĐIỆN THOẠI</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Nhập số điện thoại..."
                  required
                />
              </label>

              <div className="modal-actions" style={{ marginTop: '20px' }}>
                <motion.button whileTap={{ scale: 0.95 }} type="submit" className="modal-primary">
                  {isLogin ? 'ĐĂNG NHẬP' : 'TẠO TÀI KHOẢN'}
                </motion.button>
              </div>

              <p className="account-toggle">
                {isLogin ? 'Chưa có tài khoản? ' : 'Đã có tài khoản? '}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="account-switch-btn"
                >
                  {isLogin ? 'Đăng ký ngay' : 'Đăng nhập'}
                </button>
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
