import type { Locale } from "@/content/site";
import { services } from "@/content/site";
import Link from "./HardLink";

const GROUPS = [
  { key: "GROW", note: "Kéo đúng khách hàng về", slugs: ["performance", "seo", "growth"] },
  { key: "CREATE", note: "Nội dung và hình ảnh có dấu ấn", slugs: ["social", "content", "production"] },
  { key: "BUILD", note: "Nền tảng để chuyển đổi", slugs: ["website"] },
  { key: "OPERATE", note: "Vận hành và giữ chân", slugs: ["ecommerce", "livestream", "reputation"] },
];

/** Native <details>: keyboard + touch accessible, content stays in the HTML for crawlers. */
export default function CapabilityEngine({ locale, linkServices = false }: { locale: Locale; linkServices?: boolean }) {
  const root = locale === "en" ? "/en" : "";
  return (
    <section className="sd-capability" id="capability" aria-labelledby="cap-title">
      <div className="section-shell">
        <p className="section-kicker"><span>02</span>Capability Engine</p>
        <h2 id="cap-title">Bốn hướng tiếp cận.<br />Một mục tiêu: tăng trưởng đúng cách.</h2>
        <div className="sd-cap-list">
          {GROUPS.map((g, i) => {
            const items = g.slugs.map(s => services.find(x => x.slug === s)).filter((x): x is (typeof services)[number] => Boolean(x));
            return (
              <details className="sd-cap" key={g.key} open={i === 0}>
                <summary><b>0{i + 1}</b><span className="sd-cap-name">{g.key}</span><em>{g.note}</em><i aria-hidden="true" /></summary>
                <ul>{items.map(s => <li key={s.slug}><h3>{locale === "vi" ? s.vi : s.en}</h3><p>{locale === "vi" ? s.descVi : s.descEn}</p>{linkServices && <Link className="arrow-link" href={`${root}/services/${s.slug}`}>{locale === "vi" ? "Xem chi tiết" : "Details"} <span aria-hidden="true">→</span></Link>}</li>)}</ul>
              </details>
            );
          })}
        </div>
        <Link className="outline-button" href={`${root}/services`}>Xem toàn bộ dịch vụ <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}
