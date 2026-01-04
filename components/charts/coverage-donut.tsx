"use client";

import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from "recharts";

const COLORS = ["hsl(var(--primary))", "hsl(var(--border))"];

export function CoverageDonut({
  covered,
  total,
  label = "Coverage"
}: {
  covered: number;
  total: number;
  label?: string;
}) {
  const uncovered = Math.max(0, total - covered);
  const pct = total > 0 ? Math.round((covered / total) * 100) : 0;
  const data = [
    { name: "Covered", value: covered },
    { name: "Uncovered", value: uncovered }
  ];

  return (
    <div className="relative h-44 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={52}
            outerRadius={72}
            paddingAngle={2}
            stroke="transparent"
          >
            {data.map((_, idx) => (
              <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: 12
            }}
            itemStyle={{ color: "hsl(var(--foreground))" }}
            labelStyle={{ color: "hsl(var(--muted-foreground))" }}
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-2xl font-semibold tracking-tight">{pct}%</div>
        <div className="mt-1 text-xs text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}


