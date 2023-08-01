import React from "react";

type Props = {
  selected?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

export function Pill({ selected, children, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={`font-bold text-sm px-3 py-1 rounded-lg inline-flex cursor-pointer ${
        selected
          ? "bg-indigo-600 text-slate-100"
          : "bg-slate-100 text-indigo-600"
      }`}
    >
      {children}
    </div>
  );
}
