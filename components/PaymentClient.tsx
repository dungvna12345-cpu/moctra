'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useCart } from './CartProvider';
import { formatVnd } from '@/lib/products';
import OrderModal from './OrderModal';

type ErrorKind = 'name' | 'phone' | 'address' | 'success' | null;

export default function PaymentClient() {
  const { items, total, clear } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [delivery, setDelivery] = useState('ship');
  const [speed, setSpeed] = useState('fast');
  const [pay, setPay] = useState('bank');
  const [error, setError] = useState<ErrorKind>(null);
  const [receipt, setReceipt] = useState(false);

  const shipping = speed === 'normal' ? 35000 : 0;
  const grand = total + shipping;
  const orderNo = useMemo(() => `MP${String(Date.now()).slice(-7)}`, []);

  const submit = () => {
    if (!name.trim()) return setError('name');
    if (!/^0\d{8,10}$/.test(phone.replace(/\s/g, ''))) return setError('phone');
    if (delivery === 'ship' && !address.trim()) return setError('address');

    // Trigger confetti on order success
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#5c7d35', '#f0dca4', '#8ca074', '#ffffff'],
      });
    } catch {
      // Fallback if canvas-confetti is not loaded
    }

    setError('success');
  };

  const showReceipt = () => {
    setError(null);
    setReceipt(true);
  };

  if (receipt) {
    return (
      <motion.section
        className="payment receipt"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h1>THÔNG TIN ĐƠN HÀNG</h1>
        <p className="receipt-note">CẢM ƠN BẠN ĐÃ GHÉ MỘC. ĐƠN HÀNG ĐÃ ĐƯỢC GHI NHẬN.</p>

        <div className="receipt-head">
          <span>MÃ ĐƠN</span>
          <strong>{orderNo}</strong>
          <span>TRẠNG THÁI</span>
          <strong>ĐANG XỬ LÝ</strong>
        </div>

        <div className="receipt-table">
          <div className="receipt-row head">
            <span>SẢN PHẨM</span>
            <span>GIÁ</span>
            <span>SL</span>
            <span>THÀNH TIỀN</span>
          </div>
          {items.map(({ product, qty }) => (
            <div className="receipt-row" key={product.slug}>
              <div className="receipt-product">
                <Image src={product.image} width={100} height={75} alt="" />
                <b>{product.name}</b>
              </div>
              <span>{formatVnd(product.price)}</span>
              <span>{qty}</span>
              <span>{formatVnd(product.price * qty)}</span>
            </div>
          ))}
        </div>

        <div className="receipt-summary">
          <div>
            <p>TỔNG TIỀN</p>
            <strong>{formatVnd(grand)}</strong>
          </div>
          <div>
            <p>THÔNG TIN GIAO HÀNG</p>
            <span>
              {name}
              <br />
              {phone}
              <br />
              {delivery === 'ship' ? address : 'Nhận tại cửa hàng'}
            </span>
          </div>
          <div>
            <p>VẬN CHUYỂN & THANH TOÁN</p>
            <span>
              {speed === 'fast' ? 'Hỏa tốc - Miễn phí' : '3-5 ngày - 35.000Đ'}
              <br />
              {pay === 'bank'
                ? 'Chuyển khoản QR'
                : pay === 'cod'
                ? 'Thanh toán khi nhận hàng (COD)'
                : 'Thanh toán tại cửa hàng'}
            </span>
          </div>
        </div>

        <Link
          href="/menu"
          className="solid-buy receipt-back"
          onClick={() => clear()}
        >
          TIẾP TỤC MUA SẮM
        </Link>
      </motion.section>
    );
  }

  return (
    <section className="payment">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        THANH TOÁN
      </motion.h1>
      <h2>THÔNG TIN GIAO HÀNG</h2>

      <div className="payment-layout">
        <div className="payment-form">
          <label className="field full">
            <span>TÊN KHÁCH HÀNG</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nguyễn Văn A"
            />
          </label>

          <div className="field-row">
            <label className="field">
              <span>SỐ ĐIỆN THOẠI</span>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                inputMode="tel"
                placeholder="0912 345 678"
              />
            </label>
            <label className="field">
              <span>ĐỊA CHỈ</span>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Số nhà, tên đường, quận/huyện..."
              />
            </label>
          </div>

          <div className="choice-row">
            <fieldset className="choice-box">
              <legend>GIAO HÀNG:</legend>
              <label>
                <input
                  type="radio"
                  name="delivery"
                  checked={delivery === 'ship'}
                  onChange={() => setDelivery('ship')}
                />
                Vận chuyển <span>♧</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="delivery"
                  checked={delivery === 'pickup'}
                  onChange={() => setDelivery('pickup')}
                />
                Lấy tại cửa hàng <span>⌂</span>
              </label>
            </fieldset>

            <fieldset className="choice-box">
              <legend>PHƯƠNG THỨC VẬN CHUYỂN:</legend>
              <label>
                <input
                  type="radio"
                  name="speed"
                  checked={speed === 'fast'}
                  onChange={() => setSpeed('fast')}
                />
                Hỏa tốc <em>Miễn phí</em>
              </label>
              <label>
                <input
                  type="radio"
                  name="speed"
                  checked={speed === 'normal'}
                  onChange={() => setSpeed('normal')}
                />
                3-5 ngày <em>35.000 đ</em>
              </label>
            </fieldset>
          </div>

          <fieldset className="payment-method">
            <legend>PHƯƠNG THỨC THANH TOÁN:</legend>
            <label>
              <input
                type="radio"
                name="pay"
                checked={pay === 'bank'}
                onChange={() => setPay('bank')}
              />
              Chuyển khoản - QUA NGÂN HÀNG QR
            </label>
            <label>
              <input
                type="radio"
                name="pay"
                checked={pay === 'cod'}
                onChange={() => setPay('cod')}
              />
              Thanh toán khi nhận hàng (COD)
            </label>
            <label>
              <input
                type="radio"
                name="pay"
                checked={pay === 'cash'}
                onChange={() => setPay('cash')}
              />
              Thanh toán tại cửa hàng
            </label>
          </fieldset>
        </div>

        <div className="payment-map-wrap">
          <Image
            src="/assets/map.png"
            width={390}
            height={520}
            alt="Bản đồ Mộc Phiêu"
            className="payment-map"
          />
        </div>
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.02 }}
        className="solid-buy place-order"
        onClick={submit}
      >
        ĐẶT HÀNG
      </motion.button>

      {error === 'name' && (
        <OrderModal
          title="BẠN CHƯA NHẬP TÊN KHÁCH HÀNG"
          onClose={() => setError(null)}
          primary="NHẬP TIẾP"
          onPrimary={() => setError(null)}
        />
      )}

      {error === 'phone' && (
        <OrderModal
          title="SỐ ĐIỆN THOẠI CHƯA ĐÚNG"
          onClose={() => setError(null)}
          primary="NHẬP TIẾP"
          onPrimary={() => setError(null)}
        />
      )}

      {error === 'address' && (
        <OrderModal
          title="BẠN CHƯA NHẬP ĐỊA CHỈ GIAO HÀNG"
          onClose={() => setError(null)}
          primary="NHẬP TIẾP"
          onPrimary={() => setError(null)}
        />
      )}

      {error === 'success' && (
        <OrderModal
          title="ĐẶT HÀNG THÀNH CÔNG"
          onClose={() => setError(null)}
          primary="MUA TIẾP"
          secondary="XEM ĐƠN"
          onPrimary={() => {
            clear();
            window.location.href = '/menu';
          }}
          onSecondary={showReceipt}
        >
          <p>
            MÃ ĐƠN: <b>{orderNo}</b>
          </p>
        </OrderModal>
      )}
    </section>
  );
}
