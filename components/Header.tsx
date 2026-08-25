"use client";
import Image from "next/image";
import { type MouseEvent, useEffect, useState } from "react";
import type { Locale } from "@/content/site";
import Link from "./HardLink";

export default function Header({ locale, solid = false }: { locale: Locale; solid?: boolean }) {
  const [open, setOpen] = useState(false);
  const root = locale === "en" ? "/en" : "";
  const links = [{ href: `${root}/#about`, label: "Giới thiệu" }, { href: `${root}/services`, label: "Dịch vụ" }, { href: `${root}/products`, label: "Sản phẩm số" }, { href: `${root}/insights`, label: "Góc nhìn" }];
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  useEffect(() => {
    if (window.location.hash === "#about") {
      window.setTimeout(() => document.getElementById("about")?.scrollIntoView({ block: "start" }), 120);
    }
  }, []);
  function navigate(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (href.endsWith("#about") && document.getElementById("about")) {
      event.preventDefault();
      window.history.pushState(null, "", href);
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  }
  return <header className={`site-header v3-header ${solid ? "header-solid" : ""}`}><Link className="brand-lockup" href={root || "/"} aria-label="SD Group — Trang chủ"><span className="brand-crop"><Image src="/brand/sd-group-logo.png" alt="SD Group" width={1280} height={1280} priority /></span></Link><nav className="desktop-nav" aria-label="Điều hướng chính">{links.map(link => <Link key={link.href} href={link.href} onClick={event=>navigate(event,link.href)}>{link.label}</Link>)}</nav><div className="header-actions"><a className="header-phone" href="tel:0866397978">0866 39 79 78</a><Link className="button button-small" href={`${root}/contact`}>Liên hệ <span aria-hidden="true">↗</span></Link><button className={`menu-button ${open ? "is-open" : ""}`} type="button" aria-expanded={open} aria-label="Mở menu" onClick={() => setOpen(!open)}><i /><i /></button></div><div className={`mobile-menu ${open ? "is-open" : ""}`}><nav>{links.map((link, index) => <Link key={link.href} href={link.href} onClick={event=>navigate(event,link.href)}><span>0{index + 1}</span>{link.label}</Link>)}</nav><div className="mobile-menu-foot"><a href="tel:0866397978">0866 39 79 78</a><a href="mailto:vuhongsonmkt@gmail.com">vuhongsonmkt@gmail.com</a></div></div></header>;
}
