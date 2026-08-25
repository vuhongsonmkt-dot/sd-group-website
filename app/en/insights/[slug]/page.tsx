import type { Metadata } from "next";
import { ArticlePage } from "@/components/InnerPages";
import { posts } from "@/content/site";
export async function generateStaticParams(){return posts.map(post=>({slug:post.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const post=posts.find(item=>item.slug===slug);return post?{title:`${post.titleEn} | SD Group`,description:post.excerptEn,openGraph:{title:post.titleEn,description:post.excerptEn,images:[]},twitter:{card:"summary",title:post.titleEn,description:post.excerptEn,images:[]}}:{}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <ArticlePage locale="en" slug={slug}/>}
