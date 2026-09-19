import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import Link from "@/components/HardLink";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description: "Tìm hiểu SD Group — full-service digital agency tại TP.HCM đồng hành cùng SME bằng chiến lược, sáng tạo, truyền thông, công nghệ và sản phẩm số.",
  alternates: { canonical: "/about" },
  openGraph: { title: "Giới thiệu SD Group", description: "Một đối tác gọn, một hệ giải pháp đủ sâu cho doanh nghiệp SME.", url: "/about" },
};

const principles = [
  ["01", "Hiểu trước khi làm", "Mỗi dự án bắt đầu từ bài toán kinh doanh, khách hàng và dữ liệu hiện có — không bắt đầu bằng một danh sách đầu việc."],
  ["02", "Một hướng đi xuyên suốt", "Chiến lược, nội dung, truyền thông và công nghệ được kết nối để mọi điểm chạm cùng phục vụ một mục tiêu."],
  ["03", "Rõ ràng để đi nhanh", "Phạm vi, tiến độ, đầu mối và chỉ số được thống nhất ngay từ đầu để giảm ma sát khi triển khai."],
];

export default function AboutPage() {
  return <main className="inner-main"><Header locale="vi" solid /><JsonLd data={breadcrumbSchema([{name:"Trang chủ",url:"https://sdgr.site"},{name:"Giới thiệu",url:"https://sdgr.site/about"}])} />
    <section className="inner-hero about-hero"><div className="section-shell"><p className="breadcrumb">SD Group / Giới thiệu</p><h1>Một đối tác gọn.<br />Một hệ giải pháp đủ sâu.</h1><p>SD Group đồng hành cùng SME bằng tư duy tích hợp — kết nối chiến lược, sáng tạo, truyền thông, công nghệ và sản phẩm số trong một hướng tăng trưởng rõ ràng.</p></div></section>
    <section className="about-story"><div className="section-shell about-story-grid"><div><p className="section-kicker"><span>01</span>Câu chuyện SD Group</p><h2>Chơi ý tưởng.<br />Chạm thị trường.</h2><p>Thành lập năm 2026 tại TP. Hồ Chí Minh, SD Group được xây dựng để giúp doanh nghiệp SME tiếp cận năng lực agency theo cách linh hoạt, minh bạch và dễ phối hợp hơn.</p><p>Chúng tôi tin một ý tưởng tốt chưa đủ. Ý tưởng cần đúng bài toán, đúng người, đúng thời điểm và được triển khai đủ nhất quán để tạo ra chuyển động thật trên thị trường.</p></div><div className="about-story-image"><Image src="/images/sdg-hero-team.png" alt="Đội ngũ SD Group thảo luận chiến lược" fill sizes="(max-width:720px) 100vw, 48vw" /></div></div></section>
    <section className="about-principles"><div className="section-shell"><p className="section-kicker"><span>02</span>Nguyên tắc làm việc</p><div className="principle-grid">{principles.map(([number,title,text])=><article key={number}><span>{number}</span><h2>{title}</h2><p>{text}</p></article>)}</div></div></section>
    <section className="about-facts"><div className="section-shell"><div><strong>2026</strong><span>Năm thành lập</span></div><div><strong>SME</strong><span>Khách hàng trọng tâm</span></div><div><strong>Toàn quốc</strong><span>Phạm vi phục vụ</span></div><div><strong>TP.HCM</strong><span>Thị trường ưu tiên</span></div></div></section>
    <section className="page-cta"><div className="section-shell"><p className="section-kicker"><span>03</span>Bắt đầu hợp tác</p><h2>Cùng biến bài toán<br />thành hướng đi rõ ràng.</h2><Link className="button" href="/contact">Trao đổi cùng SD Group <span>↗</span></Link></div></section>
    <Footer locale="vi" /></main>;
}
