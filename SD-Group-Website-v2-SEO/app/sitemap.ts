import type { MetadataRoute } from "next";
import { posts } from "@/content/site";
import { productDetails, serviceDetails } from "@/content/details";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap {
  const base="https://sdgr.site";const updated=new Date("2026-09-19");
  const routes=["","/about","/services","/products","/insights","/faq","/contact","/privacy-policy","/terms"];
  const serviceRoutes=Object.keys(serviceDetails).map(slug=>`/services/${slug}`);
  const productRoutes=Object.keys(productDetails).map(slug=>`/products/${slug}`);
  return [
    ...[...routes,...serviceRoutes,...productRoutes].map(route=>({url:`${base}${route}`,lastModified:updated,changeFrequency:route.includes("insights")?"weekly" as const:"monthly" as const,priority:route===""?1:route.split("/").filter(Boolean).length===1?.85:.75})),
    ...posts.map(post=>({url:`${base}/insights/${post.slug}`,lastModified:updated,changeFrequency:"monthly" as const,priority:.75})),
  ];
}
