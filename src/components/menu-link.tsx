import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  href: string;
  label: string;
}

export const MenuLink: React.FC<Props> = ({ href, label }) => {
  const { pathname } = useRouter();

  return (
    <Link
      href={href}
      className={`${pathname === href ? "active" : "navlink"}`}
      passHref
    >
      {label}
    </Link>
  );
};
