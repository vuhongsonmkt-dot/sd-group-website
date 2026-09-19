import type { Metadata, Viewport } from "next";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sdgr.site"),
  title: { default: "SD Group — Chơi ý tưởng, chạm thị trường", template: "%s | SD Group" },
  description: "SD Group là full-service digital agency tại TP.HCM, cung cấp chiến lược, quảng cáo, SEO, website, nội dung, media và sản phẩm số cho doanh nghiệp SME.",
  applicationName: "SD Group",
  authors: [{ name: "SD Group", url: "https://sdgr.site" }],
  creator: "SD Group",
  publisher: "SD Group",
  category: "Digital Marketing Agency",
  keywords:["SD Group","digital agency","marketing agency HCM","agency SME","dịch vụ marketing tổng thể","thiết kế website","SEO website","quảng cáo đa nền tảng","tài khoản AI","sản phẩm số"],
  alternates:{canonical:"/",languages:{"vi-VN":"/","en-US":"/en"}},
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/brand/sd-group-logo.png" },
  manifest: "/site.webmanifest",
  openGraph:{type:"website",locale:"vi_VN",alternateLocale:["en_US"],siteName:"SD Group",title:"SD Group — Chơi ý tưởng, chạm thị trường",description:"Full-service digital agency và sản phẩm số dành cho doanh nghiệp SME tại Việt Nam.",url:"/",images:[{url:"/og.png",width:1200,height:630,alt:"SD Group — Chơi ý tưởng, Chạm thị trường"}]},
  twitter:{card:"summary_large_image",title:"SD Group — Chơi ý tưởng, chạm thị trường",description:"Full-service digital agency và sản phẩm số dành cho SME Việt Nam.",images:["/og.png"]},
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#07163c", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization={"@context":"https://schema.org","@type":["Organization","ProfessionalService"],"@id":"https://sdgr.site/#organization",name:"SD Group",alternateName:"SD GROUP",url:"https://sdgr.site",logo:{"@type":"ImageObject",url:"https://sdgr.site/brand/sd-group-logo.png"},image:"https://sdgr.site/og.png",description:"Full-service digital agency và sản phẩm số dành cho doanh nghiệp SME tại Việt Nam.",slogan:"Chơi ý tưởng - Chạm thị trường",foundingDate:"2026",email:"vuhongsonmkt@gmail.com",telephone:"+84866397978",address:{"@type":"PostalAddress",streetAddress:"621/30 Nguyễn Ảnh Thủ",addressLocality:"Quận 12",addressRegion:"TP. Hồ Chí Minh",addressCountry:"VN"},areaServed:{"@type":"Country",name:"Vietnam"},priceRange:"$$",contactPoint:{"@type":"ContactPoint",telephone:"+84866397978",contactType:"sales",areaServed:"VN",availableLanguage:["Vietnamese","English"]}};
  const website={"@context":"https://schema.org","@type":"WebSite","@id":"https://sdgr.site/#website",url:"https://sdgr.site",name:"SD Group",inLanguage:"vi-VN",publisher:{"@id":"https://sdgr.site/#organization"}};
  return <html lang="vi"><body><JsonLd data={[organization,website]} />{children}</body></html>;
}
