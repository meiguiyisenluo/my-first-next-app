"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function ListLink({
  children,
  ...props
}: {
  children: React.ReactNode;
  href: string;
}) {
  const pathname = usePathname();
  return (
    <Link {...props} replace={pathname !== "/list"}>
      {children}
    </Link>
  );
}
