import type { Metadata } from "next";

const repo = "https://github.com/vuhongsonmkt-dot/sd-group-website";

export const metadata: Metadata = {
  title: "Dashboard | SD Group",
  description: "Trung tâm quản trị nội dung website SD Group trên GitHub.",
  robots: { index: false, follow: false },
};

const areas = [
  { number: "01", title: "Thông tin công ty", text: "Slogan, giới thiệu, hotline, email, địa chỉ và nội dung song ngữ.", href: `${repo}/edit/main/content/site.ts`, action: "Chỉnh nội dung" },
  { number: "02", title: "Dịch vụ", text: "Thêm, sửa hoặc sắp xếp các dịch vụ Agency đang hiển thị trên website.", href: `${repo}/edit/main/content/site.ts#L3`, action: "Quản lý dịch vụ" },
  { number: "03", title: "Sản phẩm số", text: "Quản lý tài khoản AI, phần mềm bản quyền và giải pháp đội nhóm.", href: `${repo}/edit/main/content/site.ts#L17`, action: "Quản lý sản phẩm" },
  { number: "04", title: "Bài viết & SEO", text: "Viết bài mới, sửa tiêu đề, mô tả, nội dung và đường dẫn bài viết.", href: `${repo}/edit/main/content/site.ts#L23`, action: "Quản lý bài viết" },
  { number: "05", title: "Hình ảnh", text: "Tải lên hoặc thay thế hình ảnh thương hiệu, dự án và ảnh bài viết.", href: `${repo}/tree/main/public/images`, action: "Mở thư viện ảnh" },
  { number: "06", title: "Xuất bản", text: "Theo dõi trạng thái cập nhật website sau mỗi lần lưu nội dung.", href: `${repo}/actions`, action: "Xem trạng thái" },
];

export default function AdminPage() {
  return <main className="admin-shell">
    <header className="admin-topbar">
      <a className="admin-brand" href="/">SD GROUP <span>Content Center</span></a>
      <div><a href="/" className="admin-quiet">Xem website ↗</a><a href={repo} className="admin-primary">Mở GitHub ↗</a></div>
    </header>
    <section className="admin-intro">
      <p className="admin-kicker"><span /> GitHub-powered publishing</p>
      <h1>Một nơi để quản lý<br /><em>toàn bộ website.</em></h1>
      <p>Nội dung được lưu trực tiếp trong GitHub. Khi bạn chỉnh sửa và bấm <strong>Commit changes</strong>, website sẽ tự động cập nhật — không cần WordPress hay hosting riêng.</p>
      <div className="admin-status"><i /> Hệ thống sẵn sàng <span>Repository: vuhongsonmkt-dot/sd-group-website</span></div>
    </section>
    <section className="admin-grid" aria-label="Khu vực quản trị">
      {areas.map(area => <article className="admin-card" key={area.number}>
        <span>{area.number}</span><h2>{area.title}</h2><p>{area.text}</p><a href={area.href}>{area.action} ↗</a>
      </article>)}
    </section>
    <section className="admin-guide">
      <div><p className="admin-kicker"><span /> Cách cập nhật</p><h2>Ba bước.<br />Không cần kỹ thuật.</h2></div>
      <ol><li><b>01</b><span>Chọn khu vực cần chỉnh</span></li><li><b>02</b><span>Sửa nội dung trên GitHub</span></li><li><b>03</b><span>Bấm Commit changes để xuất bản</span></li></ol>
    </section>
    <footer className="admin-footer"><span>SD GROUP · HỒ CHÍ MINH · 2026</span><a href="mailto:vuhongsonmkt@gmail.com">vuhongsonmkt@gmail.com</a></footer>
  </main>;
}
