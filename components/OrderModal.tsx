'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OrderModal({
  title,
  children,
  primary,
  secondary,
  onPrimary,
  onSecondary,
  onClose,
}: {
  title: string;
  children?: React.ReactNode;
  primary?: string;
  secondary?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  onClose: () => void;
}) {
  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Escape key closes modal, Enter key triggers primary/secondary
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'Enter') {
        if (onSecondary) onSecondary();
        else if (onPrimary) onPrimary();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrimary, onSecondary]);

  return (
    <AnimatePresence>
      <div
        className="modal-backdrop"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <motion.div
          className="modal-card"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 15 }}
          transition={{ type: 'spring', stiffness: 450, damping: 30 }}
        >
          <button className="modal-x" onClick={onClose} aria-label="Đóng">
            ×
          </button>
          <h3 id="modal-title">{title}</h3>
          {children && <div className="modal-copy">{children}</div>}
          <div className="modal-actions">
            {primary && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="modal-primary"
                onClick={onPrimary || onClose}
              >
                {primary}
              </motion.button>
            )}
            {secondary && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="modal-secondary"
                onClick={onSecondary}
              >
                {secondary}
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
