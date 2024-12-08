"use client";

import Settings from "@/icons/Settings";
import { useMobileMenuStore } from "@/hooks/useMobileMenuStore";

export default function Navbar() {
  const { setIsOpen } = useMobileMenuStore();

  return (
    <div className="bg-gradient-to-b from-white via-white fixed w-full h-24">
      <nav className="h-16 flex items-center justify-between px-4 fixed w-full">
        <a className="font-bold text-[24px]">
          <strong className="text-blue-500">/</strong>Naviant
          <strong className="text-blue-500">.</strong>
        </a>
        <Settings onClick={() => setIsOpen(true)} />
      </nav>
    </div>
  );
}
