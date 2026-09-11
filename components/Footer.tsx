import Image from 'next/image';
export default function Footer(){
  return <>
    <footer className="footer" id="about">
      <div><h4>CỬA HÀNG</h4><p>NAM DƯƠNG, HÒA XÁ</p><p>HÀ NỘI, VIỆT NAM</p><p>THỨ HAI - CHỦ NHẬT</p><p>10:00 - 22:00</p></div>
      <div><h4>LIÊN HỆ</h4><p>E: CAMONBANDAGHE@MOCPHIEU.VN</p><p>T: (+84) 394 049 919</p><p className="socials"><span>◎</span><span>f</span></p></div>
      <div><h4>HỖ TRỢ KHÁCH HÀNG</h4><p>ĐẶT HÀNG VÀ THANH TOÁN</p><p>GIAO NHẬN</p><p>ĐỔI TRẢ - HOÀN TIỀN</p><p>GIẢI QUYẾT KHIẾU NẠI</p></div>
      <div><h4>CÔNG TY TNHH MỘC PHIÊU</h4><p>MST: 001304051167</p><p>GPKD DO SỞ KH&ĐT TP.HN</p><p>CẤP NGÀY 5/9/2026</p><div className="verified-pill">✓ ĐÃ THÔNG BÁO</div><p>© MỘC PHIÊU 2026 - CHẠM VỊ TRÀ<br/>PHIÊU MIỀN AN YÊN</p></div>
    </footer>
    <div className="footer-art"><Image src="/assets/footer-art.png" alt="Thức trà mộc mạc - Mộc Phiêu" fill sizes="100vw" /></div>
  </>
}
