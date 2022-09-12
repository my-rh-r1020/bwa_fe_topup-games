// Import Library
import React from "react";
import Link from "next/link";

type NavlinkProps = {
  href: string;
  title: string;
  className: string;
};

export default function NavLink({ href, title, className }: NavlinkProps) {
  return (
    <Link href={href} className="nav-item my-auto">
      <a className={className} aria-current="page">
        {title}
      </a>
    </Link>
  );
}
