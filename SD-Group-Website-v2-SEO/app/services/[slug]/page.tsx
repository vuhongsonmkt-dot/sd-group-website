import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import Link from "@/components/HardLink";
import { serviceDetails } from "@/content/details";
import { services } from "@/content/site";

type Props={params:Promise<{slug:string}>};
export const dynamicParams=false;
export function generateStaticParams(){return services.map(item=>({slug:item.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const service=services.find(item=>item.slug===slug);if(!service)return{};return{title:service.vi,description:service.descVi,alternates:{canonical:`/services/${slug}`},openGraph:{title:`${service.vi} | SD Group`,description:service.descVi,url:`/services/${slug}`,images:["/og.png"]}}}

export default async function ServiceDetailPage({params}:Props){
  const {slug}=await params;const service=services.find(item=>item.slug===slug);const detail=serviceDetails[slug as keyof typeof serviceDetails];if(!service||!detail)notFound();
  const schema={"@context":"https://schema.org","@type":"Service",name:service.vi,description:service.descVi,provider:{"@id":"https://sdgr.site/#organization"},areaServed:{"@type":"Country",name:"Vietnam"},url:`https://sdgr.site/services/${slug}`};
  return <main className="inner-main"><Header locale="vi" solid/><JsonLd data={[schema,breadcrumbSchema([{name:"Trang chủ",url:"https://sdgr.site"},{name:"Dịch vụ",url:"https://sdgr.site/services"},{name:service.vi,url:`https://sdgr.site/services/${slug}`}])]}/>
    <section className="detail-hero"><div className="section-shell detail-hero-grid"><div><p className="breadcrumb">Dịch vụ / {service.vi}</p><h1>{service.vi}</h1><p>{detail.promise}</p><Link className="button" href="/contact">Nhận tư vấn <span>↗</span></Link></div><div className="detail-visual"><Image src={slug==="production"?"/images/sdg-production-studio.png":"/images/sdg-strategy-table.png"} alt={`Dịch vụ ${service.vi} tại SD Group`} fill priority sizes="(max-width:720px) 100vw, 48vw"/></div></div></section>
    <section className="detail-section"><div className="section-shell detail-columns"><div><p className="section-kicker"><span>01</span>Phạm vi triển khai</p><h2>Một quy trình rõ.<br/>Một đầu mối gọn.</h2></div><ol>{detail.deliverables.map((item,index)=><li key={item}><span>0{index+1}</span><b>{item}</b></li>)}</ol></div></section>
    <section className="outcome-section"><div className="section-shell"><p className="section-kicker"><span>02</span>Giá trị hướng đến</p><div className="outcome-grid">{detail.outcomes.map((item,index)=><article key={item}><span>0{index+1}</span><h2>{item}</h2><p>Được theo dõi và cải thiện trong suốt quá trình phối hợp cùng SD Group.</p></article>)}</div></div></section>
    <section className="page-cta"><div className="section-shell"><p className="section-kicker"><span>03</span>Trao đổi dự án</p><h2>Bắt đầu từ bài toán<br/>doanh nghiệp của bạn.</h2><p>Chúng tôi sẽ đề xuất phạm vi, tiến độ và cách đo lường phù hợp sau khi hiểu rõ mục tiêu.</p><Link className="button" href="/contact">Liên hệ SD Group <span>↗</span></Link></div></section><Footer locale="vi"/>
  </main>;
}
