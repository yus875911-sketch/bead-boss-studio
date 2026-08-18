import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ImagePlus, Sparkles, Scissors, Grid2x2Check, Download } from "lucide-react";
import cat from "@/assets/art-cat.jpg";
import { palette } from "@/data/artworks";

export const Route = createFileRoute("/convert")({
  head: () => ({
    meta: [
      { title: "照片转图纸 · 拼豆编辑器 | 拼豆大师" },
      {
        name: "description",
        content: "上传照片自动生成拼豆图纸，带坐标网格预览、色号用量清单与 AI 增强、抠背景、抖动选项。",
      },
      { property: "og:title", content: "照片转拼豆图纸编辑器" },
      { property: "og:description", content: "网格预览 + 精确色号用量清单，一键导出图纸。" },
    ],
  }),
  component: Convert,
});

const toggles = [
  { key: "ai", title: "AI 智能增强", desc: "锐化边缘、优化配色", icon: Sparkles },
  { key: "bg", title: "去除背景", desc: "只保留主体轮廓", icon: Scissors },
  { key: "dither", title: "抖动处理", desc: "过渡更自然，色号更多", icon: Grid2x2Check },
] as const;

const sizes = ["29 × 29", "48 × 48", "64 × 64", "100 × 100"];

function Convert() {
  const [on, setOn] = useState<Record<string, boolean>>({ ai: true, bg: false, dither: false });
  const [size, setSize] = useState(sizes[2]);
  const total = palette.reduce((s, p) => s + p.count, 0);


  return (
    <div className="pb-56">
      <header className="sticky top-0 z-40 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 bg-background/90 px-4 py-4 backdrop-blur">
        <Link
          to="/tools"
          aria-label="返回"
          className="press grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-card shadow-soft"
        >
          <ArrowLeft className="h-[18px] w-[18px]" />
        </Link>
        <h1 className="min-w-0 truncate text-center text-[17px] font-extrabold">照片转图纸</h1>
        <button className="press shrink-0 rounded-2xl bg-primary px-4 py-2.5 text-[13px] font-bold text-primary-foreground shadow-glow">
          保存
        </button>

      </header>

      <main className="px-4">
        <div className="card-soft p-3">
          <div className="relative overflow-hidden rounded-3xl bg-accent">
            <div className="flex">
              <div className="w-6 shrink-0" />
              <div className="flex min-w-0 flex-1 justify-between px-1 pb-1 pt-2 text-[9px] text-muted-foreground">
                {[0, 8, 16, 24, 32, 40, 48, 56, 64].map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </div>
            </div>
            <div className="flex">
              <div className="flex w-6 shrink-0 flex-col justify-between pb-2 pl-1 pt-1 text-[9px] text-muted-foreground">
                {[0, 8, 16, 24, 32, 40, 48, 56, 64].map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </div>
              <div className="pegboard relative min-w-0 flex-1 overflow-hidden rounded-2xl border border-border bg-card">
                <img
                  src={cat}
                  alt="拼豆图纸网格预览"
                  className="h-full w-full object-contain mix-blend-multiply"
                  style={{ imageRendering: "pixelated", aspectRatio: "1/1" }}
                />
                <div className="pegboard pointer-events-none absolute inset-0" />
              </div>
            </div>
          </div>

          <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={
                  "press shrink-0 rounded-full px-3 py-2 text-[12px] font-semibold transition-all " +
                  (size === s
                    ? "bg-ink text-ink-foreground"
                    : "bg-secondary text-muted-foreground")
                }
              >
                {s}
              </button>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <button className="press flex items-center justify-center gap-2 rounded-2xl bg-secondary px-3 py-3 text-[13px] font-semibold text-secondary-foreground">
              <ImagePlus className="h-4 w-4" /> 重新上传
            </button>
            <button className="press flex items-center justify-center gap-2 rounded-2xl bg-ink px-3 py-3 text-[13px] font-semibold text-ink-foreground">
              <Download className="h-4 w-4" /> 导出图纸
            </button>
          </div>
        </div>


        <div className="card-soft mt-4 divide-y divide-border/70">
          {toggles.map((t) => (
            <label key={t.key} className="flex cursor-pointer items-center gap-3 p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                <t.icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold">{t.title}</span>
                <span className="block truncate text-[11px] text-muted-foreground">{t.desc}</span>
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={on[t.key]}
                aria-label={t.title}
                onClick={() => setOn((p) => ({ ...p, [t.key]: !p[t.key] }))}
                className={
                  "relative h-7 w-12 shrink-0 rounded-full transition-colors " +
                  (on[t.key] ? "bg-primary" : "bg-input")
                }
              >
                <span
                  className={
                    "absolute top-1 h-5 w-5 rounded-full bg-card shadow-soft transition-all " +
                    (on[t.key] ? "left-6" : "left-1")
                  }
                />
              </button>
            </label>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { k: "尺寸", v: size },
            { k: "色号", v: `${palette.length} 种` },
            { k: "总豆数", v: `${total}` },
          ].map((s) => (
            <div key={s.k} className="card-soft px-3 py-3 text-center">
              <div className="text-[15px] font-extrabold">{s.v}</div>
              <div className="mt-0.5 text-[11px] text-muted-foreground">{s.k}</div>
            </div>
          ))}
        </div>
      </main>

      <section className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-[480px]">
        <div className="rounded-t-4xl border-t border-border/60 bg-card px-4 pb-28 pt-3 shadow-lift">
          <div className="mx-auto h-1.5 w-10 rounded-full bg-border" />
          <div className="mt-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
            <h2 className="min-w-0 truncate text-sm font-bold">色号清单</h2>
            <span className="shrink-0 text-[11px] text-muted-foreground">共 {total} 颗</span>
          </div>
          <div className="no-scrollbar mt-3 flex max-h-28 flex-col gap-2 overflow-y-auto pr-1">
            {palette.map((p) => (
              <div key={p.code} className="flex items-center gap-3">
                <span
                  className="h-7 w-7 shrink-0 rounded-xl border border-border"
                  style={{ backgroundColor: p.color }}
                />
                <span className="min-w-0 flex-1 truncate text-[13px] font-semibold">
                  {p.code} · {p.name}
                </span>
                <span className="shrink-0 text-[12px] font-bold text-primary">{p.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
