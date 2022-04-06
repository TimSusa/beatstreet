import React from "react";
import Link from "next/link";

export const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Twitch",
    path: "/twitch",
  },
  {
    name: "Chat",
    path: "/chat",
  },

];

export function Navigation() {
  return (
    <nav>
      {navLinks.map((link, index) => {
        return (
          <ul key={`nav-${index}`}>
            <Link href={link.path} passHref>
              {link.name}
            </Link>
          </ul>
        );
      })}
    </nav>
  );
}
