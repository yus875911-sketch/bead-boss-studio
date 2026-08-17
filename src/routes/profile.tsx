import { createFileRoute } from "@tanstack/react-router";
import { Settings, ChevronRight, Boxes, History, Bookmark, Ticket, HelpCircle } from "lucide-react";
import avatar from "@/assets/avatar-me.png";
import { artworks } from "@/data/artworks";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "我的 · 作品与豆仓 | 拼豆大师" },
      {
        name: "description",
        content: "查看你的拼豆作品、获赞收藏数据、材料清单与创作历史记录。",
      },
      { property: "og:title", content: "我的拼豆主页" },
      { property: "og:description", content: "作品、获赞、收藏与材料清单一览。" },
    ],
  }),
  component: Profile,
});

const stats = [
  { label: "作品", value: "36" },
  { label: "获赞", value: "8.4k" },
  { label: "收藏", value: "512" },
  { label: "分享", value: "129" },
];

const menu = [
  { title: "材料清单", icon: Boxes, bg: "bg-amber-soft", fg: "text-amber-ink" },
  { title: "创作历史", icon: History, bg: "bg-blue-soft", fg: "text-blue-ink" },
  { title: "我的收藏", icon: Bookmark, bg: "bg-green-soft", fg: "text-green-ink" },
  { title: "优惠与兑换", icon: Ticket, bg: "bg-rose-soft", fg: "text-rose-ink" },
  { title: "帮助与反馈", icon: HelpCircle, bg: "bg-violet-soft", fg: "text-violet-ink" },
];

function Profile() {
  return (
    <div className="pb-28">
      <header className="rounded-b-4xl bg-gradient-to-br from-primary to-amber-ink px-5 pb-16 pt-7 text-primary-foreground">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={avatar}
              alt="我的头像"
              width={512}
              height={512}
              loading="lazy"
              className="h-16 w-16 shrink-0 rounded-3xl border-2 border-primary-foreground/40 bg-primary-foreground/20 object-cover"
            />
            <div className="min-w-0">
              <h1 className="truncate text-xl font-extrabold">豆豆酱</h1>
              <p className="truncate text-xs opacity-90">拼豆 3 年 · 擅长动物 &amp; 像素风</p>
            </div>
          </div>
          <button
            aria-label="设置"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary-foreground/20"
          >
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div className="-mt-10 px-4">
        <div className="card-soft grid grid-cols-4 px-2 py-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-lg font-extrabold">{s.value}</div>
              <div className="mt-0.5 text-[11px] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="px-4 pt-5">
        <div className="card-soft divide-y divide-border/70">
          {menu.map((m) => (
            <button key={m.title} className="flex w-full items-center gap-3 p-4 text-left">
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl ${m.bg} ${m.fg}`}>
                <m.icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="min-w-0 flex-1 truncate text-sm font-semibold">{m.title}</span>
              <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
            </button>
          ))}
        </div>
      </section>

      <section className="px-4 pt-6">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <h2 className="min-w-0 truncate text-base font-bold">最近作品</h2>
          <button className="shrink-0 text-[12px] font-semibold text-primary">查看全部</button>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {artworks.slice(0, 4).map((a) => (
            <div key={a.id} className="card-soft overflow-hidden">
              <div className="aspect-square bg-accent">
                <img
                  src={a.image}
                  alt={`${a.title} 拼豆作品`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-3">
                <div className="truncate text-[13px] font-bold">{a.title}</div>
                <div className="mt-0.5 text-[11px] text-muted-foreground">{a.likes} 赞</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
