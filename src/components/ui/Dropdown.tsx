"use client";

import React from "react";

import ArrowDown from "@/icons/ArrowDown";

export default function Dropdown({
  label,
  data,
  initialValue,
  hook,
}: {
  label?: string;
  data: any[];
  initialValue: string;
  hook: (string: string) => void;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-2">
      {label && <p className="text-gray-400">{label}</p>}
      <div className="flex justify-between" onClick={() => setIsOpen(!isOpen)}>
        <p>{initialValue ? initialValue : "Select a model"}</p>
        <ArrowDown
          className={`transition-transform ${isOpen && "rotate-180"}`}
        />
      </div>
      <ul
        className={`bg-white rounded-xl border border-gray-200 w-full p-4 transition-all grid grid-cols-1 divide-y ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        {data &&
          data.map((model) => (
            <li
              key={model.name}
              className="py-2"
              onClick={() => {
                hook(model.name);
                setIsOpen(false);
              }}
            >
              <p>{model.name}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
