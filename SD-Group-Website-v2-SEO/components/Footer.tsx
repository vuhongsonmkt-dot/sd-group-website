import Image from "next/image";
import type { Locale } from "@/content/site";
import Link from "./HardLink";

export default function Footer({ locale }: { locale: Locale }) {
  const root = locale === "en" ? "/en" : "";
  return <footer className="footer v3-footer"><div className="footer-top"><div><span className="footer-logo"><Image src="/brand/sd-group-logo.png" alt="SD Group" width={1280} height={1280} /></span><p>Chơi ý tưởng — Chạm thị trường</p></div><div className="footer-links"><Link href={locale === "vi" ? "/about" : "/en/#about"}>{locale === "vi" ? "Giới thiệu" : "About"}</Link><Link href={`${root}/services`}>{locale === "vi" ? "Dịch vụ" : "Services"}</Link><Link href={`${root}/products`}>{locale === "vi" ? "Sản phẩm số" : "Products"}</Link><Link href={`${root}/insights`}>{locale === "vi" ? "Góc nhìn" : "Insights"}</Link>{locale === "vi" && <><Link href="/faq">Câu hỏi thường gặp</Link><Link href="/contact">Liên hệ</Link></>}</div><div className="footer-contact"><a href="tel:0866397978">0866 39 79 78</a><a href="mailto:vuhongsonmkt@gmail.com">vuhongsonmkt@gmail.com</a><span>621/30 Nguyễn Ảnh Thủ,<br />Quận 12, TP. Hồ Chí Minh</span></div></div><div className="footer-bottom"><span>© 2026 SD Group. All rights reserved.</span><div><a href="https://zalo.me/0866397978">Zalo</a><a href="tel:0866397978">Hotline</a>{locale === "vi" && <><Link href="/privacy-policy">Bảo mật</Link><Link href="/terms">Điều khoản</Link></>}</div><span>Digital Agency & Digital Products</span></div></footer>;
}
