"use client";

import React from "react";
import { ModelResponse } from "ollama";

import { useMobileMenuStore } from "@/hooks/useMobileMenuStore";
import Close from "@/icons/Close";
import Dropdown from "../ui/Dropdown";
import { getLocalModels } from "@/server/getLocalModels";
import { useModelStore } from "@/hooks/useModelStore";

export default function MobileMenu() {
  const { isOpen, setIsOpen } = useMobileMenuStore();
  const [models, setModels] = React.useState<ModelResponse[]>();
  const { model, setModel } = useModelStore();

  React.useEffect(() => {
    let promise = getLocalModels();
    promise.then((res) => setModels(res.models));
  }, []);

  React.useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  });

  return (
    <div
      className={`bg-white flex flex-col gap-12 fixed inset-0 z-10 transition-transform px-4 ${
        isOpen ? "" : "translate-x-full"
      }`}
    >
      <div className="h-16 flex items-center justify-end">
        <Close onClick={() => setIsOpen(false)} />
      </div>
      <div>
        <Dropdown
          label="Model"
          initialValue={model}
          data={models || []}
          hook={setModel}
        />
      </div>
    </div>
  );
}
