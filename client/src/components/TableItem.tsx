import React from "react";

export default function TableItem({
  options,
}: {
  options: { title: string; stat: string | number };
}) {
  const { title, stat } = options;
  return (
    <dl className="flex justify-between py-2 px-4 hover:bg-slate-900/50">
      <span className="text-gray-400 text-sm">{title}</span>
      <span>{stat}</span>
    </dl>
  );
}
