import React from "react";
import Link from "next/link";

export const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Chat",
    path: "/chat",
  },
  {
    name: "Twitch",
    path: "/twitch",
  },
];

export function Navigation() {
  return (
    <nav>
      {navLinks.map((link, index) => {
        return (
          <ul key={`nav-${index}`}>
            <Link href={link.path} passHref>
              <li key={index}>{link.name}</li>
            </Link>
          </ul>
        );
      })}
    </nav>
  );
}
