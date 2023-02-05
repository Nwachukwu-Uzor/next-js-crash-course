import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MenuLink } from "@/components";

export const Header = () => {
  return (
    <header>
      <div className="topNav">
        <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
        <nav>
          <ul>
            <li>
              <MenuLink href="/" label="Home" />
            </li>
            <li>
              <MenuLink href="/events" label="Events" />
            </li>
            <li>
              <MenuLink href="/about-us" label="About Us" />
            </li>
          </ul>
        </nav>
      </div>
      <p className="title">Lorem ipsum dolor sit amet.</p>
    </header>
  );
};
