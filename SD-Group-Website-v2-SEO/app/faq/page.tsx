import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import Link from "@/components/HardLink";
import { faqs } from "@/content/details";

export const metadata: Metadata = { title:"Câu hỏi thường gặp", description:"Giải đáp về dịch vụ, quy trình, chi phí và phạm vi hợp tác cùng SD Group.", alternates:{canonical:"/faq"}, openGraph:{title:"Câu hỏi thường gặp | SD Group",url:"/faq"} };

export default function FaqPage(){
  const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(item=>({"@type":"Question",name:item.q,acceptedAnswer:{"@type":"Answer",text:item.a}}))};
  return <main className="inner-main"><Header locale="vi" solid/><JsonLd data={[breadcrumbSchema([{name:"Trang chủ",url:"https://sdgr.site"},{name:"Câu hỏi thường gặp",url:"https://sdgr.site/faq"}]),faqSchema]}/><section className="inner-hero"><div className="section-shell"><p className="breadcrumb">SD Group / FAQ</p><h1>Thông tin rõ trước khi bắt đầu.</h1><p>Những câu hỏi phổ biến về cách SD Group tư vấn, báo giá và đồng hành cùng doanh nghiệp.</p></div></section><section className="faq-section"><div className="section-shell faq-list">{faqs.map((item,index)=><details key={item.q}><summary><span>0{index+1}</span><b>{item.q}</b><i>+</i></summary><p>{item.a}</p></details>)}</div></section><section className="page-cta compact"><div className="section-shell"><h2>Vẫn còn điều bạn muốn hỏi?</h2><Link className="button" href="/contact">Liên hệ SD Group <span>↗</span></Link></div></section><Footer locale="vi"/></main>;
}
