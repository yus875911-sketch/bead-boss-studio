import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  Boxes,
  Calculator,
  BookImage,
  ChevronRight,
  Ruler,
  Palette,
  ArrowRight,
} from "lucide-react";
import cat from "@/assets/art-cat.jpg";
import dino from "@/assets/art-dino.jpg";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "工具箱 · 照片转拼豆图纸 | 拼豆大师" },
      {
        name: "description",
        content: "照片一键转拼豆图纸、豆仓库存管理、缺色计算与图纸库，拼豆创作全流程工具。",
      },
      { property: "og:title", content: "拼豆工具箱 · 照片转图纸" },
      { property: "og:description", content: "照片转图纸、豆仓管理、缺色计算、图纸库。" },
    ],
  }),
  component: Tools,
});

const tools = [
  { title: "我的豆仓", desc: "库存 3,240 颗", icon: Boxes, bg: "bg-amber-soft", fg: "text-amber-ink" },
  { title: "缺色计算", desc: "对比图纸差额", icon: Calculator, bg: "bg-blue-soft", fg: "text-blue-ink" },
  { title: "图纸库", desc: "1.2 万份图纸", icon: BookImage, bg: "bg-green-soft", fg: "text-green-ink" },
  { title: "色卡对照", desc: "跨品牌换色", icon: Palette, bg: "bg-rose-soft", fg: "text-rose-ink" },
];

const shortcuts = [
  { title: "尺寸换算器", desc: "按拼板计算成品尺寸", icon: Ruler },
  { title: "熨烫参数指南", desc: "不同豆子的温度与时间", icon: Sparkles },
];

function Tools() {
  return (
    <div className="px-4 pb-28 pt-6">
      <h1 className="text-[26px] font-extrabold">工具箱</h1>
      <p className="mt-1 text-sm text-muted-foreground">从照片到成品，一站式拼豆创作</p>

      <Link
        to="/convert"
        className="rise press relative mt-5 block overflow-hidden rounded-4xl bg-primary p-5 text-primary-foreground shadow-glow"
      >
        <span
          className="beadboard absolute inset-0 text-primary-foreground opacity-30"
          aria-hidden="true"
        />
        <span className="relative flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-3xl bg-primary-foreground/20">
            <Sparkles className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-xl font-extrabold">照片转图纸</span>
            <span className="block truncate text-xs opacity-90">AI 像素化 · 自动匹配色号</span>
          </span>
        </span>

        <span className="relative mt-4 flex items-center gap-3">
          <span className="min-w-0 flex-1 overflow-hidden rounded-3xl border border-primary-foreground/30 bg-primary-foreground/15">
            <img
              src={cat}
              alt="原始照片示例"
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
            <span className="block py-1.5 text-center text-[10px] font-bold">原图</span>
          </span>
          <ArrowRight className="h-5 w-5 shrink-0 opacity-80" />
          <span className="min-w-0 flex-1 overflow-hidden rounded-3xl border border-primary-foreground/30 bg-primary-foreground/15">
            <span className="pegboard block">
              <img
                src={dino}
                alt="生成的拼豆图纸示例"
                loading="lazy"
                className="aspect-square w-full object-cover mix-blend-multiply"
                style={{ imageRendering: "pixelated" }}
              />
            </span>
            <span className="block py-1.5 text-center text-[10px] font-bold">图纸</span>
          </span>
        </span>

        <span className="relative mt-4 inline-flex items-center gap-1 rounded-full bg-primary-foreground/20 px-3 py-1.5 text-[13px] font-semibold">
          开始转换 <ChevronRight className="h-4 w-4" />
        </span>
      </Link>

      <h2 className="mt-7 text-base font-bold">常用工具</h2>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {tools.map((t, i) => (
          <button
            key={t.title}
            className="rise card-soft press p-4 text-left"
            style={{ animationDelay: `${60 + i * 60}ms` }}
          >
            <span className={`grid h-11 w-11 place-items-center rounded-2xl ${t.bg} ${t.fg}`}>
              <t.icon className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <span className="mt-3 block text-sm font-bold">{t.title}</span>
            <span className="mt-0.5 block text-[11px] text-muted-foreground">{t.desc}</span>
          </button>
        ))}
      </div>

      <h2 className="mt-7 text-base font-bold">小帮手</h2>
      <div className="card-soft mt-3 divide-y divide-border/70">
        {shortcuts.map((s) => (
          <button key={s.title} className="press flex w-full items-center gap-3 p-4 text-left">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-violet-soft text-violet-ink">
              <s.icon className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold">{s.title}</span>
              <span className="block truncate text-[11px] text-muted-foreground">{s.desc}</span>
            </span>
            <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
          </button>
        ))}
      </div>
    </div>
  );
}
