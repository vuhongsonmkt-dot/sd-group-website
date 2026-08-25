"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import type { Locale } from "@/content/site";
import { copy, posts, products, services } from "@/content/site";
import Header from "./Header";
import Footer from "./Footer";
import Link from "./HardLink";

const values = [
  { number: "01", title: "Hiểu đúng bài toán", text: "Bắt đầu từ mục tiêu kinh doanh, không bắt đầu bằng một danh sách hạng mục." },
  { number: "02", title: "Một chiến lược xuyên suốt", text: "Thương hiệu, nội dung, quảng cáo và công nghệ cùng phục vụ một hướng tăng trưởng." },
  { number: "03", title: "Làm rõ, đo thật", text: "Phạm vi, tiến độ và chỉ số được thống nhất để mỗi quyết định đều có cơ sở." },
];

export default function MarketingHome({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const root = locale === "en" ? "/en" : "";
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const githubPosts = posts.slice(0, 3).map(post => ({
    slug: post.slug,
    title: locale === "vi" ? post.titleVi : post.titleEn,
    excerpt: locale === "vi" ? post.excerptVi : post.excerptEn,
    date: post.date,
    category: locale === "vi" ? post.categoryVi : post.categoryEn,
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const subject = encodeURIComponent(`Yêu cầu tư vấn từ ${String(data.name || "khách hàng")}`);
    const body = encodeURIComponent(`Họ tên: ${data.name || ""}\nDoanh nghiệp: ${data.company || ""}\nĐiện thoại: ${data.phone || ""}\nEmail: ${data.email || ""}\nNhu cầu: ${data.need || ""}\n\n${data.message || ""}`);
    setStatus("sent");
    window.location.href = `mailto:vuhongsonmkt@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <Header locale={locale} />
      <section className="v3-hero" id="top">
        <Image className="v3-hero-image" src="/images/sdg-hero-team.png" alt="Đội ngũ sáng tạo đang cùng xây dựng chiến lược" fill priority sizes="100vw" />
        <div className="v3-hero-shade" />
        <div className="v3-hero-content section-shell">
          <p className="v3-eyebrow"><span /> Digital agency dành cho SME Việt Nam</p>
          <h1>Chơi ý tưởng.<br /><em>Chạm thị trường.</em></h1>
          <p className="v3-hero-lead">SD Group kết nối chiến lược, sáng tạo, truyền thông và công nghệ để biến một bài toán kinh doanh thành hướng đi rõ ràng.</p>
          <div className="v3-actions"><Link className="button" href={`${root}/contact`}>Trao đổi dự án <span>↗</span></Link><Link className="light-link" href={`${root}/services`}>Khám phá năng lực <span>→</span></Link></div>
        </div>
        <div className="v3-hero-note"><span>SD GROUP</span><span>HỒ CHÍ MINH · 2026</span></div>
      </section>

      <section className="v3-trust-strip" aria-label="Thông tin SD Group"><div className="section-shell"><div><strong>SME</strong><span>Khách hàng trọng tâm</span></div><div><strong>Full-service</strong><span>Một đầu mối triển khai</span></div><div><strong>Toàn quốc</strong><span>Ưu tiên TP. Hồ Chí Minh</span></div><div><strong>Agency + Tech</strong><span>Sáng tạo đi cùng công nghệ</span></div></div></section>

      <section className="v3-about" id="about"><div className="section-shell v3-about-grid"><div className="v3-about-photo reveal"><Image src="/images/sdg-strategy-table.png" alt="Buổi xây dựng chiến lược thương hiệu và truyền thông" fill sizes="(max-width: 760px) 100vw, 48vw" /><span>Strategy / Creative / Technology</span></div><div className="v3-about-copy reveal"><p className="section-kicker"><span>01</span>Về SD Group</p><h2>Một đối tác gọn.<br />Một hệ giải pháp đủ sâu.</h2><p>Chúng tôi đồng hành cùng doanh nghiệp SME từ lúc xác định vấn đề, định hình thông điệp đến triển khai trên từng điểm chạm. Không phô trương quy trình; SD Group tập trung vào sự rõ ràng, tốc độ phối hợp và kết quả có thể theo dõi.</p><blockquote>“Ý tưởng chỉ thật sự có giá trị khi chạm được đúng người và tạo ra chuyển động trên thị trường.”</blockquote><Link className="arrow-link" href={`${root}/services`}>Xem cách chúng tôi làm việc <span>↗</span></Link></div></div></section>

      <section className="v3-services" id="services"><div className="section-shell"><div className="v3-heading reveal"><div><p className="section-kicker"><span>02</span>Năng lực</p><h2>Đủ rộng để đồng hành.<br />Đủ gọn để linh hoạt.</h2></div><p>Mỗi dịch vụ là một phần của cùng một hệ thống tăng trưởng, được lựa chọn theo đúng giai đoạn của doanh nghiệp.</p></div><div className="v3-service-grid">{services.slice(0, 6).map((service, index) => <article className={`v3-service-card reveal ${index === 0 ? "featured" : ""}`} key={service.slug}>{index === 0 && <Image src="/images/sdg-strategy-table.png" alt="" fill sizes="(max-width: 760px) 100vw, 50vw" />}<div className="v3-service-card-inner"><span>0{index + 1}</span><h3>{locale === "vi" ? service.vi : service.en}</h3><p>{locale === "vi" ? service.descVi : service.descEn}</p><Link href={`${root}/contact`} aria-label={`Tư vấn ${locale === "vi" ? service.vi : service.en}`}>Trao đổi cùng SD Group ↗</Link></div></article>)}</div><Link className="outline-button" href={`${root}/services`}>Xem toàn bộ dịch vụ <span>↗</span></Link></div></section>

      <section className="v3-production"><Image src="/images/sdg-production-studio.png" alt="Quá trình sản xuất hình ảnh chuyên nghiệp" fill sizes="100vw" /><div className="v3-production-shade" /><div className="section-shell v3-production-copy reveal"><p className="section-kicker"><span>03</span>Media production</p><h2>Từ ý tưởng trên giấy<br />đến hình ảnh có sức nặng.</h2><p>Concept, kịch bản, quay chụp và hậu kỳ được giữ trong một ngôn ngữ hình ảnh nhất quán với thương hiệu.</p><Link className="button button-light" href={`${root}/contact`}>Bắt đầu một dự án <span>↗</span></Link></div></section>

      <section className="v3-products" id="products"><div className="section-shell"><div className="v3-heading light reveal"><div><p className="section-kicker"><span>04</span>Sản phẩm số</p><h2>Công cụ đúng.<br />Vận hành nhẹ hơn.</h2></div><p>Tư vấn minh bạch, lựa chọn phù hợp quy mô và hỗ trợ trong quá trình sử dụng.</p></div><div className="v3-product-list">{products.map((product, index) => <Link href={`${root}/products`} className="v3-product-item reveal" key={product.code}><span>0{index + 1}</span><div><small>{product.code}</small><h3>{locale === "vi" ? product.vi : product.en}</h3><p>{locale === "vi" ? product.descVi : product.descEn}</p></div><b>↗</b></Link>)}</div><p className="v3-product-note">SD Group ưu tiên nguồn cung hợp lệ, điều kiện sử dụng rõ ràng và phương án phù hợp với từng cá nhân, đội nhóm hoặc doanh nghiệp.</p></div></section>

      <section className="v3-process"><div className="section-shell"><div className="v3-heading reveal"><div><p className="section-kicker"><span>05</span>Cách chúng tôi làm việc</p><h2>Rõ từ đầu.<br />Chắc từng bước.</h2></div><p>Một quy trình đủ chặt để kiểm soát chất lượng, đủ linh hoạt để theo kịp thị trường.</p></div><div className="v3-process-grid">{t.process.map((step, index) => <article className="reveal" key={step}><span>0{index + 1}</span><h3>{step}</h3><p>{["Lắng nghe, đọc dữ liệu và xác định mục tiêu ưu tiên.", "Xây dựng hướng tiếp cận, phạm vi và chỉ số theo dõi.", "Triển khai nhất quán trên từng điểm chạm đã chọn.", "Đánh giá kết quả, học nhanh và cải thiện liên tục."][index]}</p></article>)}</div></div></section>

      <section className="v3-values"><div className="section-shell"><div className="v3-heading reveal"><div><p className="section-kicker"><span>06</span>Nguyên tắc hợp tác</p><h2>Không chỉ đẹp.<br />Phải đúng và dùng được.</h2></div></div><div className="v3-value-grid">{values.map(value => <article className="reveal" key={value.number}><span>{value.number}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}</div></div></section>

      <section className="v3-insights" id="insights"><div className="section-shell"><div className="v3-heading reveal"><div><p className="section-kicker"><span>07</span>Góc nhìn</p><h2>Kiến thức để<br />ra quyết định tốt hơn.</h2></div><Link className="arrow-link" href={`${root}/insights`}>Xem tất cả bài viết <span>↗</span></Link></div><div className="v3-post-grid">{githubPosts.map((post, index) => <Link className="v3-post-card reveal" href={`${root}/insights/${post.slug}`} key={post.slug}><div className="v3-post-image"><Image src={index === 2 ? "/images/sdg-production-studio.png" : "/images/sdg-strategy-table.png"} alt="" fill sizes="(max-width:760px) 100vw, 33vw" /></div><div className="post-meta"><span>{post.category}</span><time>{post.date}</time></div><h3>{post.title}</h3><p>{post.excerpt}</p><b>Đọc bài viết ↗</b></Link>)}</div></div></section>

      <section className="v3-contact" id="contact"><div className="section-shell contact-grid"><div className="contact-copy reveal"><p className="section-kicker"><span>08</span>Kết nối</p><h2>Có một bài toán<br />cần bứt phá?</h2><p>Kể SD Group nghe về mục tiêu tiếp theo. Chúng tôi sẽ phản hồi bằng một góc nhìn rõ ràng và hướng đi thực tế.</p><div className="direct-contact"><a href="tel:0866397978">0866 39 79 78</a><a href="mailto:vuhongsonmkt@gmail.com">vuhongsonmkt@gmail.com</a><span>{t.address}</span></div></div><form className="contact-form reveal" onSubmit={submitContact}><div className="field-row"><label>{t.name}<input name="name" required autoComplete="name" /></label><label>{t.company}<input name="company" autoComplete="organization" /></label></div><div className="field-row"><label>{t.phone}<input name="phone" required autoComplete="tel" /></label><label>{t.email}<input name="email" type="email" required autoComplete="email" /></label></div><label>{t.need}<select name="need" defaultValue=""><option value="" disabled>Chọn nhu cầu</option><option>Full-service Agency</option><option>Website / Landing Page</option><option>Sản phẩm số / AI</option><option>SEO & Nội dung</option><option>Media Production</option></select></label><label>{t.message}<textarea name="message" rows={3} required /></label><div className="form-submit"><button className="button" type="submit" disabled={status === "sending"}>{status === "sending" ? "Đang gửi..." : "Gửi yêu cầu"}<span>↗</span></button><small>{status === "sent" ? "Đã nhận yêu cầu. SD Group sẽ sớm liên hệ!" : status === "error" ? "Chưa gửi được. Vui lòng gọi trực tiếp cho chúng tôi." : t.privacy}</small></div></form></div></section>
      <Footer locale={locale} />
    </main>
  );
}
