import React from "react";
import Stat from "../components/Stat";

type Props = {
  title: string;
  stats: {
    title: string;
    stat: string | number;
  }[];
};

export default function StatDisplay({ props }: { props: Props }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2 text-center">{props.title}</h3>
      <div className="flex justify-center gap-4 flex-wrap bg-slate-900 rounded p-2 max-w-[420px]">
        {props.stats.map((s, i) => (
          <Stat options={{ title: s.title, stat: s.stat }} key={`${s}${i}`} />
        ))}
      </div>
    </div>
  );
}
