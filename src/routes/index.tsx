import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Heart, Bell, Plus } from "lucide-react";
import { artworks, categories } from "@/data/artworks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "拼豆大师 · 社区灵感墙 | Perler Master" },
      {
        name: "description",
        content: "浏览拼豆爱好者的像素作品，收藏喜欢的图纸灵感，一键转换照片为拼豆图纸。",
      },
      { property: "og:title", content: "拼豆大师 · 社区灵感墙" },
      {
        property: "og:description",
        content: "浏览拼豆爱好者的像素作品，收藏喜欢的图纸灵感。",
      },
    ],
  }),
  component: Community,
});

function Community() {
  const [active, setActive] = useState("全部");
  const list = active === "全部" ? artworks : artworks.filter((a) => a.category === active);
  const columns = [list.filter((_, i) => i % 2 === 0), list.filter((_, i) => i % 2 === 1)];

  return (
    <div className="pb-28">
      <header className="sticky top-0 z-40 bg-background/90 px-4 pb-3 pt-5 backdrop-blur">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <div className="flex min-w-0 items-center gap-2 rounded-3xl bg-card px-4 py-3 shadow-soft">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              placeholder="搜索图纸、作者、色号"
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <button
            aria-label="通知"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-3xl bg-card text-foreground shadow-soft"
          >
            <Bell className="h-[18px] w-[18px]" />
          </button>
        </div>

        <div className="no-scrollbar -mx-4 mt-3 flex gap-2 overflow-x-auto px-4">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={
                "shrink-0 rounded-full px-4 py-2 text-[13px] font-semibold transition-all " +
                (active === c
                  ? "bg-ink text-ink-foreground shadow-soft"
                  : "bg-card text-muted-foreground shadow-soft")
              }
            >
              {c}
            </button>
          ))}
        </div>
      </header>

      <main className="px-4 pt-2">
        <h1 className="pb-3 text-[22px] font-extrabold">今日灵感墙</h1>
        <div className="flex gap-3">
          {columns.map((col, ci) => (
            <div key={ci} className="flex min-w-0 flex-1 flex-col gap-3">
              {col.map((a) => (
                <article key={a.id} className="card-soft overflow-hidden">
                  <div className="bg-accent" style={{ aspectRatio: a.ratio }}>
                    <img
                      src={a.image}
                      alt={`${a.title} 拼豆像素作品`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h2 className="truncate text-sm font-bold">{a.title}</h2>
                    <div className="mt-2 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
                      <div className="flex min-w-0 items-center gap-1.5">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary-soft text-[10px] font-bold text-primary">
                          {a.author.slice(0, 1)}
                        </span>
                        <span className="truncate text-[11px] text-muted-foreground">{a.author}</span>
                      </div>
                      <span className="flex shrink-0 items-center gap-1 text-[11px] font-semibold text-primary">
                        <Heart className="h-3.5 w-3.5 fill-current" />
                        {a.likes}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </main>

      <button
        aria-label="发布作品"
        className="fixed bottom-28 right-5 z-40 grid h-14 w-14 place-items-center rounded-3xl bg-primary text-primary-foreground shadow-glow"
      >
        <Plus className="h-6 w-6" strokeWidth={2.6} />
      </button>
    </div>
  );
}
