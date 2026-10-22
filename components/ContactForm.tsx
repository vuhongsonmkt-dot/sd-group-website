"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import type { Locale } from "@/content/site";
import { copy } from "@/content/site";

// Optional lead endpoint (e.g. Formspree). Inlined at build time; unset => mailto only.
const ENDPOINT = process.env.NEXT_PUBLIC_LEAD_ENDPOINT ?? "";
const HOTLINE = "0866 39 79 78";
const MAIL = "vuhongsonmkt@gmail.com";

// Whitelist: ?interest= only ever selects one of these, never renders raw input.
export const INTERESTS: Record<string, { vi: string; en: string }> = {
  "lead-generation": { vi: "Có thêm khách hàng", en: "Get more customers" },
  branding: { vi: "Nổi bật thương hiệu", en: "Stand out as a brand" },
  conversion: { vi: "Tăng tỷ lệ chuyển đổi", en: "Improve conversion" },
  technology: { vi: "Ứng dụng AI / công nghệ", en: "Apply AI / technology" },
};
const PHONE_RE = /^\+?[0-9][0-9\s().-]{7,17}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const MSG = {
  vi: {
    name: "Vui lòng nhập họ tên.", phone: "Số điện thoại chưa đúng (8–15 chữ số).", email: "Email chưa đúng định dạng.", message: "Vui lòng chia sẻ ngắn về mục tiêu.",
    invalid: "Vui lòng kiểm tra các trường được đánh dấu.", sending: "Đang gửi...",
    sent: "Đã nhận yêu cầu. SD Group sẽ liên hệ lại với bạn sớm.",
    failed: `Chưa gửi được yêu cầu. Vui lòng thử lại, gọi ${HOTLINE} hoặc gửi email tới ${MAIL}.`,
    opened: `Ứng dụng email đã mở với nội dung điền sẵn. Yêu cầu chỉ đến SD Group khi bạn nhấn Gửi trong email. Nếu email không mở, hãy gọi ${HOTLINE} hoặc nhắn Zalo.`,
    choose: "Chọn nhu cầu", goals: "Mục tiêu", services: "Dịch vụ",
    svc: ["Full-service Agency", "Website / Landing Page", "Sản phẩm số / AI", "SEO & Nội dung", "Media Production"], subject: "Yêu cầu tư vấn từ",
  },
  en: {
    name: "Please enter your name.", phone: "Phone number looks invalid (8–15 digits).", email: "Email format looks invalid.", message: "Please briefly describe your goal.",
    invalid: "Please check the highlighted fields.", sending: "Sending...",
    sent: "Request received. SD Group will get back to you soon.",
    failed: `We couldn't send your request. Please retry, call ${HOTLINE} or email ${MAIL}.`,
    opened: `Your email app opened with the message prefilled. SD Group only receives it once you press Send there. If it did not open, call ${HOTLINE} or message us on Zalo.`,
    choose: "Select a need", goals: "Goals", services: "Services",
    svc: ["Full-service Agency", "Website / Landing Page", "Digital products / AI", "SEO & Content", "Media Production"], subject: "Consultation request from",
  },
} as const;

type Status = "idle" | "invalid" | "sending" | "sent" | "failed" | "opened";
type Errors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

export function buildMailto(v: Record<string, string>, subjectPrefix = "Yêu cầu tư vấn từ") {
  const subject = encodeURIComponent(`${subjectPrefix} ${v.name}`.slice(0, 120));
  const body = encodeURIComponent(`Họ tên: ${v.name}\nDoanh nghiệp: ${v.company ?? ""}\nĐiện thoại: ${v.phone}\nEmail: ${v.email}\nNhu cầu: ${v.need ?? ""}\n\n${v.message}`);
  return `mailto:${MAIL}?subject=${subject}&body=${body}`;
}

export function validate(v: Record<string, string>, m: { name: string; phone: string; email: string; message: string }): Errors {
  const e: Errors = {};
  if ((v.name ?? "").trim().length < 2) e.name = m.name;
  if (!PHONE_RE.test((v.phone ?? "").trim())) e.phone = m.phone;
  if (!EMAIL_RE.test((v.email ?? "").trim())) e.email = m.email;
  if ((v.message ?? "").trim().length < 5) e.message = m.message;
  return e;
}

/**
 * With NEXT_PUBLIC_LEAD_ENDPOINT set, the lead is POSTed and "sent" is shown ONLY after an ok response.
 * Without it (static GitHub Pages) the only real channel is the visitor's email app, so we say
 * "email app opened" — never "sent".
 */
export default function ContactForm({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const m = MSG[locale];
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [need, setNeed] = useState("");
  const busy = useRef(false);
  const lastMailto = useRef("");

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("interest") ?? "";
    if (Object.prototype.hasOwnProperty.call(INTERESTS, id)) setNeed(INTERESTS[id][locale]);
  }, [locale]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    const raw = Object.fromEntries(new FormData(event.currentTarget)) as Record<string, string>;
    const v: Record<string, string> = {};
    for (const k of ["name", "company", "phone", "email", "need", "message"]) v[k] = String(raw[k] ?? "").trim();
    if (raw._gotcha) { setStatus("sent"); return; } // honeypot: bots get a silent no-op
    const next = validate(v, m);
    setErrors(next);
    if (Object.keys(next).length) { setStatus("invalid"); return; }
    busy.current = true;
    lastMailto.current = buildMailto(v, m.subject);
    if (!ENDPOINT) {
      window.setTimeout(() => { busy.current = false; }, 4000);
      setStatus("opened");
      window.location.href = lastMailto.current;
      return;
    }
    setStatus("sending");
    const ctl = new AbortController();
    const timer = window.setTimeout(() => ctl.abort(), 10000);
    try {
      const res = await fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ ...v, locale, source: "sdgr.site" }), signal: ctl.signal });
      setStatus(res.ok ? "sent" : "failed");
      if (res.ok) (event.target as HTMLFormElement).reset?.();
    } catch {
      setStatus("failed");
    } finally {
      window.clearTimeout(timer);
      busy.current = false;
    }
  }

  const err = (k: keyof Errors) => errors[k] ? <span className="sd-error" id={`err-${k}`} role="alert">{errors[k]}</span> : null;
  const aria = (k: keyof Errors) => ({ "aria-invalid": errors[k] ? true : undefined, "aria-describedby": errors[k] ? `err-${k}` : undefined });
  const text = status === "idle" ? t.privacy : m[status];

  return (
    <form className="contact-form" onSubmit={submit} noValidate aria-busy={status === "sending"}>
      <div className="field-row">
        <label>{t.name}<input name="name" required maxLength={80} autoComplete="name" {...aria("name")} />{err("name")}</label>
        <label>{t.company}<input name="company" maxLength={100} autoComplete="organization" /></label>
      </div>
      <div className="field-row">
        <label>{t.phone}<input name="phone" type="tel" inputMode="tel" required maxLength={20} autoComplete="tel" {...aria("phone")} />{err("phone")}</label>
        <label>{t.email}<input name="email" type="email" required maxLength={120} autoComplete="email" {...aria("email")} />{err("email")}</label>
      </div>
      <label>{t.need}
        <select name="need" value={need} onChange={e => setNeed(e.target.value)}>
          <option value="">{m.choose}</option>
          <optgroup label={m.goals}>{Object.values(INTERESTS).map(o => <option key={o.vi}>{o[locale]}</option>)}</optgroup>
          <optgroup label={m.services}>{m.svc.map(o => <option key={o}>{o}</option>)}</optgroup>
        </select>
      </label>
      <label>{t.message}<textarea name="message" rows={3} required maxLength={1500} {...aria("message")} />{err("message")}</label>
      <input name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
      <div className="form-submit">
        <button className="button" type="submit" disabled={status === "sending"}>{status === "sending" ? m.sending : t.send}<span aria-hidden="true">↗</span></button>
        <small role="status" aria-live="polite">{text}</small>
        {status === "failed" && <a className="arrow-link" href={lastMailto.current}>{locale === "vi" ? "Gửi bằng email" : "Send by email"} ↗</a>}
      </div>
    </form>
  );
}
