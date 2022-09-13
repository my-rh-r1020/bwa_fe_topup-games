// Import Library
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

type MenuLinkProps = {
  className: string;
  nameIcon: string;
  sidebarName: string;
  href: string;
};

export default function MenuLink({ className, nameIcon, sidebarName, href }: MenuLinkProps) {
  const router = useRouter();

  return (
    <div className={className}>
      <img src={`/icons/${nameIcon}.svg`} className="icon me-3"></img>
      <p className="item-title m-0">
        <Link href={href}>
          <a className="text-lg text-decoration-none">{sidebarName}</a>
        </Link>
      </p>
    </div>
  );
}
