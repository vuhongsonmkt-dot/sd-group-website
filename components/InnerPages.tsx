import Image from "next/image";
import { notFound } from "next/navigation";
import type { Locale } from "@/content/site";
import { copy, posts, products, services } from "@/content/site";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Header from "./Header";
import Link from "./HardLink";

function Shell({ locale, children }: { locale:Locale; children:React.ReactNode }) { return <main className="inner-main"><Header locale={locale} solid />{children}<Footer locale={locale} /></main>; }

export function ServicesPage({ locale }: { locale:Locale }) {
  const root=locale==="en"?"/en":"";
  return <Shell locale={locale}><section className="inner-hero"><div className="section-shell"><p className="breadcrumb">SD Group / {locale==="vi"?"Dịch vụ":"Services"}</p><h1>{locale==="vi"?"Năng lực toàn diện. Một chiến lược chung.":"Full capability. One shared strategy."}</h1><p>{locale==="vi"?"SD Group đồng hành từ lúc định hình thương hiệu đến khi tăng trưởng đa kênh — linh hoạt theo đúng giai đoạn của doanh nghiệp.":"From shaping the brand to scaling across channels, SD Group adapts to each stage of your business."}</p></div></section><section className="inner-content"><div className="section-shell service-card-grid">{services.map((service,index)=><article className="service-card" key={service.slug}><div className="service-card-image"><Image src={service.slug==="production"?"/images/sdg-production-studio.png":"/images/sdg-strategy-table.png"} alt="" fill sizes="(max-width:720px) 100vw, 170px" /></div><div><span>0{index+1} / Năng lực</span><h2>{locale==="vi"?service.vi:service.en}</h2><p>{locale==="vi"?service.descVi:service.descEn}</p><Link className="arrow-link" href={`${root}/contact`}>{locale==="vi"?"Nhận tư vấn":"Get advice"}<span>↗</span></Link></div></article>)}</div></section></Shell>;
}

export function ProductsPage({ locale }: { locale:Locale }) {
  const root=locale==="en"?"/en":"";
  return <Shell locale={locale}><section className="inner-hero"><div className="section-shell"><p className="breadcrumb">SD Group / Sản phẩm số</p><h1>{locale==="vi"?"Công nghệ đúng cho bước tiến tiếp theo.":"The right technology for your next move."}</h1><p>{locale==="vi"?"Tài khoản AI, phần mềm bản quyền và giải pháp đội nhóm được tư vấn minh bạch, kích hoạt rõ ràng và hỗ trợ trong suốt quá trình sử dụng.":"AI accounts, licensed software and team solutions with transparent guidance, clear activation and ongoing support."}</p></div></section><section className="inner-content"><div className="section-shell products-page-grid">{products.map((product,index)=><article className="product-detail" key={product.code}><div><p className="section-kicker"><span>0{index+1}</span>{product.code}</p><h2>{locale==="vi"?product.vi:product.en}</h2><p>{locale==="vi"?product.descVi:product.descEn} {locale==="vi"?"SD Group ưu tiên nguồn cung hợp lệ, chính sách rõ ràng và phương án phù hợp quy mô sử dụng.":"SD Group prioritizes legitimate sourcing, clear policies and the right fit for your usage scale."}</p><Link className="button" href={`${root}/contact`}>{locale==="vi"?"Yêu cầu tư vấn":"Request consultation"}<span>↗</span></Link></div><div className="inner-product-image"><Image src="/images/sdg-strategy-table.png" alt="Tư vấn giải pháp số cho doanh nghiệp" fill sizes="(max-width:720px) 100vw, 45vw" /></div></article>)}</div></section></Shell>;
}

export function InsightsPage({ locale }: { locale:Locale }) {
  const root=locale==="en"?"/en":"";
  const items = posts.map(post=>({slug:post.slug,title:locale==="vi"?post.titleVi:post.titleEn,excerpt:locale==="vi"?post.excerptVi:post.excerptEn,date:post.date,category:locale==="vi"?post.categoryVi:post.categoryEn}));
  return <Shell locale={locale}><section className="inner-hero"><div className="section-shell"><p className="breadcrumb">SD Journal / 2026</p><h1>{locale==="vi"?"Góc nhìn để đi trước thị trường.":"Perspectives for staying ahead."}</h1><p>{locale==="vi"?"Chiến lược, sáng tạo, AI và tăng trưởng — được viết cho những người đang trực tiếp xây dựng doanh nghiệp.":"Strategy, creativity, AI and growth—written for people building businesses."}</p></div></section><section className="inner-content"><div className="section-shell journal-grid">{items.map((post,index)=><Link className="post-card" href={`${root}/insights/${post.slug}`} key={post.slug}><div className="post-image"><Image src={index===2?"/images/sdg-production-studio.png":"/images/sdg-strategy-table.png"} alt="" fill sizes="(max-width:720px) 100vw, 33vw" /></div><div className="post-meta"><span>{post.category}</span><time>{post.date}</time></div><h3>{post.title}</h3><p>{post.excerpt}</p><b>{locale==="vi"?"Đọc bài viết":"Read insight"} ↗</b></Link>)}</div></section></Shell>;
}

export function ArticlePage({ locale, slug }: { locale:Locale; slug:string }) {
  const staticPost=posts.find(item=>item.slug===slug); if(!staticPost) notFound(); const root=locale==="en"?"/en":"";
  const title=locale==="vi"?staticPost.titleVi:staticPost.titleEn; const excerpt=locale==="vi"?staticPost.excerptVi:staticPost.excerptEn; const category=locale==="vi"?staticPost.categoryVi:staticPost.categoryEn; const date=staticPost.date; const body=locale==="vi"?staticPost.bodyVi:staticPost.bodyEn;
  return <Shell locale={locale}><article className="article-wrap"><header className="article-head"><div className="post-meta"><span>{category}</span><time>{date}</time></div><h1>{title}</h1><p>{excerpt}</p></header><div className="article-cover"><Image src={slug.includes("website")?"/images/sdg-production-studio.png":"/images/sdg-strategy-table.png"} alt="" fill sizes="820px" /></div><div className="article-body">{body.map(paragraph=><p key={paragraph}>{paragraph}</p>)}<div className="article-cta"><h3>{locale==="vi"?"Bạn đang cần một hướng đi rõ hơn?":"Need a clearer path forward?"}</h3><p>{locale==="vi"?"SD Group sẵn sàng cùng bạn chuyển góc nhìn thành kế hoạch có thể triển khai.":"SD Group can help turn perspective into an executable plan."}</p><Link className="button" href={`${root}/contact`}>{copy[locale].cta}<span>↗</span></Link></div></div></article></Shell>;
}

export function ContactPage({ locale }: { locale:Locale }) { const t=copy[locale]; return <main className="contact-page"><Header locale={locale} /><div className="section-shell contact-grid"><div className="contact-copy"><p className="section-kicker"><span>01</span>{t.contactKicker}</p><h1>{t.contactTitle}</h1><p>{t.contactBody}</p><div className="direct-contact"><a href="tel:0866397978">0866 39 79 78</a><a href="mailto:vuhongsonmkt@gmail.com">vuhongsonmkt@gmail.com</a><a href="https://zalo.me/0866397978">Zalo / 0866 39 79 78</a><span>{t.address}</span></div></div><ContactForm locale={locale} /></div></main>; }
