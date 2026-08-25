"use client";

import { FormEvent, useState } from "react";
import type { Locale } from "@/content/site";
import { copy } from "@/content/site";

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = copy[locale]; const [status,setStatus] = useState<"idle"|"sent">("idle");
  function submit(event:FormEvent<HTMLFormElement>){ event.preventDefault(); const data=Object.fromEntries(new FormData(event.currentTarget)); const subject=encodeURIComponent(`Yêu cầu tư vấn từ ${String(data.name||"khách hàng")}`); const body=encodeURIComponent(`Họ tên: ${data.name||""}\nDoanh nghiệp: ${data.company||""}\nĐiện thoại: ${data.phone||""}\nEmail: ${data.email||""}\nNhu cầu: ${data.need||""}\n\n${data.message||""}`); setStatus("sent"); window.location.href=`mailto:vuhongsonmkt@gmail.com?subject=${subject}&body=${body}`; }
  return <form className="contact-form" onSubmit={submit}>
    <div className="field-row"><label>{t.name}<input name="name" required autoComplete="name" /></label><label>{t.company}<input name="company" autoComplete="organization" /></label></div>
    <div className="field-row"><label>{t.phone}<input name="phone" required autoComplete="tel" /></label><label>{t.email}<input name="email" type="email" required autoComplete="email" /></label></div>
    <label>{t.need}<select name="need" defaultValue=""><option value="" disabled>—</option><option>Full-service Agency</option><option>Website / Landing Page</option><option>Digital Products / AI</option><option>SEO & Content</option><option>Media Production</option></select></label>
    <label>{t.message}<textarea name="message" rows={3} required /></label>
    <div className="form-submit"><button className="button" type="submit">{t.send}<span>↗</span></button><small>{status==="sent"?(locale==="vi"?"Ứng dụng email đã được mở. Hãy kiểm tra và nhấn Gửi.":"Your email app is open. Review and send the message."):t.privacy}</small></div>
  </form>;
}
