import type { AnchorHTMLAttributes, ReactNode } from "react";

type HardLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

/** Native navigation stays reliable when the site runs on a custom domain. */
export default function HardLink({ href, children, ...props }: HardLinkProps) {
  return <a href={href} {...props}>{children}</a>;
}
