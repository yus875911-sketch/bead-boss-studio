import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Heart, Bell, Plus, Sparkles } from "lucide-react";
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
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const list = active === "全部" ? artworks : artworks.filter((a) => a.category === active);
  const columns = [list.filter((_, i) => i % 2 === 0), list.filter((_, i) => i % 2 === 1)];

  return (
    <div className="pb-28">
      <header className="sticky top-0 z-40 bg-background/85 px-4 pb-3 pt-5 backdrop-blur-xl">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 pb-3">
          <div className="min-w-0">
            <p className="truncate text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Perler Master
            </p>
            <h1 className="truncate text-[22px] font-extrabold">今天想拼点什么？</h1>
          </div>
          <button
            aria-label="通知"
            className="press relative grid h-11 w-11 shrink-0 place-items-center rounded-3xl bg-card text-foreground shadow-soft"
          >
            <Bell className="h-[18px] w-[18px]" />
            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-primary" />
          </button>
        </div>

        <div className="flex min-w-0 items-center gap-2 rounded-3xl bg-card px-4 py-3 shadow-soft">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            placeholder="搜索图纸、作者、色号"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <span className="shrink-0 rounded-full bg-primary-soft px-2 py-1 text-[10px] font-bold text-primary">
            AI
          </span>
        </div>

        <div className="no-scrollbar -mx-4 mt-3 flex gap-2 overflow-x-auto px-4">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={
                "press shrink-0 rounded-full px-4 py-2 text-[13px] font-semibold transition-all " +
                (active === c
                  ? "bg-ink text-ink-foreground shadow-lift"
                  : "bg-card text-muted-foreground shadow-soft")
              }
            >
              {c}
            </button>
          ))}
        </div>
      </header>

      <main className="px-4 pt-1">
        <div className="rise card-soft relative mb-4 overflow-hidden px-4 py-4">
          <span className="beadboard absolute inset-0 text-primary opacity-40" aria-hidden="true" />
          <div className="relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
            <div className="min-w-0">
              <h2 className="truncate text-[15px] font-extrabold">本周挑战 · 夏日限定</h2>
              <p className="mt-0.5 truncate text-[11px] text-muted-foreground">
                已有 328 位豆友投稿，参与即得配色礼包
              </p>
            </div>
            <span className="press flex shrink-0 items-center gap-1 rounded-full bg-primary px-3 py-2 text-[12px] font-bold text-primary-foreground shadow-glow">
              <Sparkles className="h-3.5 w-3.5" /> 参加
            </span>
          </div>
        </div>

        <div className="flex gap-3">
          {columns.map((col, ci) => (
            <div key={ci} className="flex min-w-0 flex-1 flex-col gap-3">
              {col.map((a, i) => (
                <article
                  key={a.id}
                  className="rise card-soft press overflow-hidden"
                  style={{ animationDelay: `${(i * 2 + ci) * 60}ms` }}
                >
                  <div className="relative bg-accent" style={{ aspectRatio: a.ratio }}>
                    <img
                      src={a.image}
                      alt={`${a.title} 拼豆像素作品`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute left-2 top-2 rounded-full bg-card/85 px-2 py-1 text-[10px] font-bold text-foreground backdrop-blur">
                      {a.category}
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="truncate text-sm font-bold">{a.title}</h3>
                    <div className="mt-2 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
                      <div className="flex min-w-0 items-center gap-1.5">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary-soft text-[10px] font-bold text-primary">
                          {a.author.slice(0, 1)}
                        </span>
                        <span className="truncate text-[11px] text-muted-foreground">{a.author}</span>
                      </div>
                      <button
                        onClick={() => setLiked((p) => ({ ...p, [a.id]: !p[a.id] }))}
                        aria-pressed={!!liked[a.id]}
                        aria-label={`喜欢 ${a.title}`}
                        className={
                          "press flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold transition-colors " +
                          (liked[a.id]
                            ? "bg-primary-soft text-primary"
                            : "text-muted-foreground")
                        }
                      >
                        <Heart
                          className={"h-3.5 w-3.5 " + (liked[a.id] ? "fill-current" : "")}
                        />
                        {a.likes + (liked[a.id] ? 1 : 0)}
                      </button>
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
        className="press fixed bottom-28 right-5 z-40 grid h-14 w-14 place-items-center rounded-3xl bg-primary text-primary-foreground shadow-glow"
      >
        <Plus className="h-6 w-6" strokeWidth={2.6} />
      </button>
    </div>
  );
}
