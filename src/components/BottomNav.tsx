import { Link } from "@tanstack/react-router";
import { Home, Wand2, LayoutGrid, User } from "lucide-react";

const items = [
  { to: "/", label: "社区", icon: Home },
  { to: "/tools", label: "工具箱", icon: LayoutGrid },
  { to: "/convert", label: "转换", icon: Wand2 },
  { to: "/profile", label: "我的", icon: User },
] as const;

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-[480px] px-3 pb-3">
      <div className="flex items-center justify-between rounded-4xl border border-border/60 bg-card/95 px-2 py-2 shadow-lift backdrop-blur">
        {items.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            activeOptions={{ exact: to === "/" }}
            className="group flex min-w-0 flex-1 flex-col items-center gap-1 rounded-3xl px-2 py-2 text-muted-foreground transition-colors"
            activeProps={{ className: "text-primary" }}
          >
            {({ isActive }) => (
              <>
                <span
                  className={
                    "grid h-9 w-9 shrink-0 place-items-center rounded-2xl transition-all " +
                    (isActive ? "bg-primary text-primary-foreground shadow-glow" : "bg-transparent")
                  }
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
                </span>
                <span className="text-[11px] font-semibold">{label}</span>
              </>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
