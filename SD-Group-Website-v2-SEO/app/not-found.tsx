import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "@/components/HardLink";

export default function NotFound(){return <main className="inner-main"><Header locale="vi" solid/><section className="not-found section-shell"><span>404</span><h1>Trang bạn tìm<br/>chưa tồn tại.</h1><p>Đường dẫn có thể đã thay đổi. Hãy quay về trang chủ hoặc khám phá năng lực của SD Group.</p><div><Link className="button" href="/">Về trang chủ <span>↗</span></Link><Link className="outline-button" href="/services">Xem dịch vụ <span>↗</span></Link></div></section><Footer locale="vi"/></main>}
