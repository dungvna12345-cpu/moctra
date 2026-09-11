# Mộc Phiêu — Figma → Next.js frontend

Bản dựng lại dựa trên toàn bộ bộ export Figma `Mộc Phiêu.zip` (52 frame/state) và link thiết kế người dùng cung cấp.

## Stack
- Next.js 15 / App Router
- React 19 + TypeScript
- CSS thuần, không phụ thuộc animation library
- `next/image`
- State giỏ hàng + `localStorage`

## Routes
- `/` — Landing page
- `/menu` — Menu đầy đủ các nhóm sản phẩm
- `/product/[slug]` — Chi tiết sản phẩm động
- `/cart` — Giỏ hàng: empty / one item / multi item / delete-confirm modal
- `/payment` — Checkout: form, delivery, shipping, payment choice, validation modal, success modal, order receipt

## Các state Figma đã được chuyển thành interaction
- 4 Menu variants → cùng một menu động, trạng thái giỏ hàng thay đổi trực tiếp trên header.
- Product variants → dynamic route theo từng product, ảnh / tên / giá / related items thay đổi.
- Cart empty / 1 item / multi-item / remove dialog → state thật trong React.
- Payment input states → form controlled.
- Chọn giao hàng / vận chuyển / phương thức thanh toán → radio interaction thật.
- Thiếu tên / sai số điện thoại / thiếu địa chỉ → modal tương ứng.
- Đặt hàng thành công / xem thông tin đơn → modal + receipt state.

## Motion / UX
- Sticky navigation
- Nav underline transition
- Hero tea floating motion
- Cloud drift / quiet-space subtle parallax
- Scroll reveal sections
- Product image hover zoom/tilt
- Button hover/press states
- Add-to-cart visual confirmation
- Modal fade + scale animation
- Responsive mobile menu
- `prefers-reduced-motion` support

## Chạy local
```bash
npm install
npm run dev
```
Sau đó mở `http://localhost:3000`.

## Lưu ý nguồn Figma
Môi trường build không thể gọi trực tiếp nội dung private/restricted từ URL Figma, vì vậy UI được dựng theo toàn bộ PNG/state export trong `Mộc Phiêu.zip`. Các state của bộ export được chuyển thành interaction thật thay vì tạo từng trang ảnh tĩnh.
