"use client";

import React from "react";
import { useMobileMenuStore } from "@/hooks/useMobileMenuStore";
import Close from "@/icons/Close";

export default function MobileMenu() {
  const { isOpen, setIsOpen } = useMobileMenuStore();

  React.useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  });

  return (
    <div
      className={`backdrop-blur fixed inset-0 z-10 transition-transform px-4 ${
        isOpen ? "" : "translate-x-full"
      }`}
    >
      <div className="h-16 flex items-center justify-end">
        <Close onClick={() => setIsOpen(false)} />
      </div>
    </div>
  );
}
