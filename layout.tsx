import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sdgr.site"),
  title: "SD Group — Chơi ý tưởng, chạm thị trường",
  description: "Full-service digital agency và sản phẩm số dành cho doanh nghiệp SME tại Việt Nam.",
  keywords:["SD Group","digital agency","marketing agency HCM","website SME","tài khoản AI","digital products"],
  alternates:{canonical:"/",languages:{"vi-VN":"/","en":"/en"}},
  openGraph:{type:"website",locale:"vi_VN",siteName:"SD Group",title:"SD Group — Chơi ý tưởng, chạm thị trường",description:"Digital Agency & Digital Products for SMEs across Vietnam.",url:"/",images:[{url:"/og.png",width:1200,height:630,alt:"SD Group — Chơi ý tưởng, Chạm thị trường"}]},
  twitter:{card:"summary_large_image",title:"SD Group — Chơi ý tưởng, chạm thị trường",description:"Digital Agency & Digital Products for SMEs across Vietnam.",images:["/og.png"]},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization={"@context":"https://schema.org","@type":"Organization",name:"SD Group",url:"https://sdgr.site",logo:"https://sdgr.site/icon.png",foundingDate:"2026",email:"vuhongsonmkt@gmail.com",telephone:"+84866397978",address:{"@type":"PostalAddress",streetAddress:"621/30 Nguyễn Ảnh Thủ",addressLocality:"Quận 12",addressRegion:"TP. Hồ Chí Minh",addressCountry:"VN"},areaServed:"Vietnam"};
  return <html lang="vi"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization)}} />{children}</body></html>;
}
