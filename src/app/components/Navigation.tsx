"use client";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Posts",
    href: "/posts",
  },
];

import { Navbar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const path = usePathname();

  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {navLinks.map(({ name, href }, index) => (
            <Navbar.Link href={href} active={path === href} key={index}>
              {name}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
