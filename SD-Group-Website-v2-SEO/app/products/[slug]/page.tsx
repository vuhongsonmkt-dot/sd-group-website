import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import Link from "@/components/HardLink";
import { productDetails } from "@/content/details";

type Slug=keyof typeof productDetails;type Props={params:Promise<{slug:string}>};
export const dynamicParams=false;
export function generateStaticParams(){return Object.keys(productDetails).map(slug=>({slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const item=productDetails[slug as Slug];if(!item)return{};return{title:item.title,description:item.summary,alternates:{canonical:`/products/${slug}`},openGraph:{title:`${item.title} | SD Group`,description:item.summary,url:`/products/${slug}`}}}

export default async function ProductDetailPage({params}:Props){const {slug}=await params;const item=productDetails[slug as Slug];if(!item)notFound();const schema={"@context":"https://schema.org","@type":"Product",name:item.title,description:item.summary,brand:{"@type":"Brand",name:"SD Group"},category:"Digital product solution",url:`https://sdgr.site/products/${slug}`};return <main className="inner-main"><Header locale="vi" solid/><JsonLd data={[schema,breadcrumbSchema([{name:"Trang chủ",url:"https://sdgr.site"},{name:"Sản phẩm số",url:"https://sdgr.site/products"},{name:item.title,url:`https://sdgr.site/products/${slug}`}])]}/><section className="detail-hero product-detail-hero"><div className="section-shell detail-hero-grid"><div><p className="breadcrumb">Sản phẩm số / {item.code}</p><h1>{item.title}</h1><p>{item.summary}</p><Link className="button" href="/contact">Yêu cầu tư vấn <span>↗</span></Link></div><div className="detail-visual"><Image src="/images/sdg-strategy-table.png" alt={`Tư vấn ${item.title} tại SD Group`} fill priority sizes="(max-width:720px) 100vw, 48vw"/></div></div></section><section className="detail-section"><div className="section-shell detail-columns"><div><p className="section-kicker"><span>01</span>Giải pháp bao gồm</p><h2>Chọn đúng.<br/>Dùng hiệu quả.</h2><p>SD Group tư vấn dựa trên nhu cầu, quy mô sử dụng và điều kiện vận hành thực tế. Thông tin gói, thời hạn và chính sách được trao đổi rõ trước khi kích hoạt.</p></div><ol>{item.features.map((feature,index)=><li key={feature}><span>0{index+1}</span><b>{feature}</b></li>)}</ol></div></section><section className="page-cta"><div className="section-shell"><p className="section-kicker"><span>02</span>Tư vấn sản phẩm</p><h2>Cho chúng tôi biết<br/>bạn đang cần gì.</h2><Link className="button" href="/contact">Liên hệ SD Group <span>↗</span></Link></div></section><Footer locale="vi"/></main>}
