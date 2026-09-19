import type { Metadata } from "next";
import { ArticlePage } from "@/components/InnerPages";
import { posts } from "@/content/site";
export async function generateStaticParams(){return posts.map(post=>({slug:post.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const post=posts.find(item=>item.slug===slug);return post?{title:post.titleEn,description:post.excerptEn,alternates:{canonical:`/en/insights/${slug}`,languages:{"vi-VN":`/insights/${slug}`,"en-US":`/en/insights/${slug}`}},openGraph:{type:"article",url:`/en/insights/${slug}`,title:post.titleEn,description:post.excerptEn,images:[{url:"/og.png",width:1200,height:630}]},twitter:{card:"summary_large_image",title:post.titleEn,description:post.excerptEn,images:["/og.png"]}}:{}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <ArticlePage locale="en" slug={slug}/>}
