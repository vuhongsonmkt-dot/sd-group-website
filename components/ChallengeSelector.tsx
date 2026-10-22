"use client";

import { type KeyboardEvent, useRef, useState } from "react";
import type { Locale } from "@/content/site";
import Link from "./HardLink";

export type ChallengeId = "lead-generation" | "branding" | "conversion" | "technology";

export const CHALLENGES: { id: ChallengeId; title: string; summary: string; focus: string[]; services: { label: string; path: string }[] }[] = [
  { id: "lead-generation", title: "Có thêm khách hàng", summary: "Kết nối quảng cáo, nội dung tìm kiếm và trang đích để khách tiềm năng tìm thấy bạn và để lại thông tin.", focus: ["Quảng cáo", "Landing Page", "SEO", "Tracking"], services: [{ label: "Quảng cáo đa nền tảng", path: "/services" }, { label: "SEO Website", path: "/services" }, { label: "Website & Landing Page", path: "/services" }] },
  { id: "branding", title: "Nổi bật thương hiệu", summary: "Xây ngôn ngữ thương hiệu nhất quán từ thông điệp, hình ảnh đến nội dung trên từng kênh.", focus: ["Branding", "Fanpage", "Content", "Video"], services: [{ label: "Xây dựng & chăm sóc Fanpage", path: "/services" }, { label: "Sáng tạo nội dung", path: "/services" }, { label: "Quay chụp & sản xuất video", path: "/services" }] },
  { id: "conversion", title: "Tăng tỷ lệ chuyển đổi", summary: "Rà lại hành trình khách hàng trên website để người xem hiểu nhanh, tin được và biết bước tiếp theo.", focus: ["UX/UI", "CRO", "Analytics", "Tối ưu website"], services: [{ label: "Website & Landing Page", path: "/services" }, { label: "SEO Website", path: "/services" }, { label: "Quản trị đánh giá", path: "/services" }] },
  { id: "technology", title: "Ứng dụng AI / công nghệ", summary: "Chọn công cụ AI và giải pháp vận hành phù hợp quy mô đội nhóm, rõ nguồn cung và điều kiện sử dụng.", focus: ["AI", "Automation", "Website", "Vận hành"], services: [{ label: "Tài khoản AI & phần mềm", path: "/products" }, { label: "Giải pháp đội nhóm", path: "/products" }, { label: "Website & Landing Page", path: "/services" }] },
];

export default function ChallengeSelector({ locale }: { locale: Locale }) {
  const root = locale === "en" ? "/en" : "";
  const [index, setIndex] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = CHALLENGES[index];

  function select(next: number) { setIndex(next); refs.current[next]?.focus(); }
  function onKey(e: KeyboardEvent, i: number) {
    const n = CHALLENGES.length;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); select((i + 1) % n); }
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); select((i + n - 1) % n); }
    else if (e.key === "Home") { e.preventDefault(); select(0); }
    else if (e.key === "End") { e.preventDefault(); select(n - 1); }
  }

  return (
    <section className="sd-challenge" id="challenge" aria-labelledby="challenge-title">
      <div className="section-shell">
        <p className="section-kicker"><span>01</span>Chọn bài toán</p>
        <h2 id="challenge-title">Doanh nghiệp bạn đang cần gì?</h2>
        <div className="sd-challenge-grid">
          <div className="sd-choice-list" role="radiogroup" aria-label="Chọn mục tiêu của doanh nghiệp">
            {CHALLENGES.map((c, i) => (
              <button key={c.id} ref={el => { refs.current[i] = el; }} type="button" role="radio" aria-checked={i === index} tabIndex={i === index ? 0 : -1} className={`sd-choice ${i === index ? "is-active" : ""}`} onClick={() => setIndex(i)} onKeyDown={e => onKey(e, i)}>
                <span>0{i + 1}</span>{c.title}
              </button>
            ))}
          </div>
          <div className="sd-choice-panel" role="region" aria-live="polite" aria-label={`Giải pháp cho: ${current.title}`}>
            <h3>{current.title}</h3>
            <p>{current.summary}</p>
            <ul className="sd-tags">{current.focus.map(f => <li key={f}>{f}</li>)}</ul>
            <p className="sd-panel-label">Dịch vụ liên quan</p>
            <ul className="sd-links">{current.services.map(s => <li key={s.label}><Link href={`${root}${s.path}`}>{s.label} <span aria-hidden="true">→</span></Link></li>)}</ul>
            <Link className="button" href={`${root}/contact/?interest=${current.id}`}>Trao đổi về giải pháp này <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
