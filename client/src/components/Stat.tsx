import React from "react";

export default function Stat({
  options,
}: {
  options: { title: string; stat: string | number };
}) {
  const { title, stat } = options;
  return (
    <div className="flex flex-col justify-center text-center items-center">
      <span className="text-gray-400 text-sm">{title}</span>
      <span className="font-bold">{stat}</span>
    </div>
  );
}
