// /components/tableofcontent.tsx
// Reusable, integrated Table of Contents (modern right rail)
// npm i react-scrollspy clsx
import { useEffect } from "react";
import Scrollspy from "react-scrollspy";
import { ListTree, ChevronRight, ArrowUp } from "lucide-react";
import clsx from "clsx";

type TocItem = {
  id: string;        // DOM id of the section
  label: string;     // Text to show
  level?: 1 | 2 | 3; // Optional visual indent based on heading level
};

type TableOfContentProps = {
  title?: string;
  items: TocItem[];
  offset?: number;               // active highlight offset (px)
  className?: string;            // extra classes for the outer container
  onNavigate?: (id: string) => void;
};

export default function TableOfContent({
  title = "On this page",
  items,
  offset = -120,
  className,
  onNavigate,
}: TableOfContentProps) {
  // Global smooth scroll for internal anchors
  useEffect(() => {
    const handler = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const a = t.closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      e.preventDefault();
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 100,
          behavior: "smooth",
        });
        onNavigate?.(id);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [onNavigate]);

  const ids = items.map((i) => i.id);

  return (
    <nav
      aria-label="Table of contents"
      className={clsx(
        // Give the rail its own stacking context and background so it never "overlays" content
        "relative z-0 bg-transparent",
        // Keep rail scrollable, but discreet
        "max-h-[78vh] overflow-auto pr-2",
        // Native scrollbar light touch
        "[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full",
        "[&::-webkit-scrollbar-thumb]:bg-slate-300/60 hover:[&::-webkit-scrollbar-thumb]:bg-slate-400/80",
        // Own border-left (instead of absolute line from parent)
        "border-l border-slate-200/80 pl-3",
        className
      )}
    >
      {/* Rail header — compact */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-slate-800">
          <ListTree className="w-5 h-5 text-sky-700" />
          <h4 className="font-semibold text-base md:text-lg">{title}</h4>
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-1 text-xs md:text-[13px] font-medium text-slate-600 hover:text-slate-900"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
          Top
        </a>
      </div>

      {/* ToC list */}
      <Scrollspy
        items={ids}
        currentClassName="toc-active"
        componentTag="ul"
        className="relative space-y-0.5 text-[15px] md:text-[16px] leading-7 md:leading-8 text-slate-800"
        offset={offset}
      >
        {items.map(({ id, label, level = 1 }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={clsx(
                "group relative flex items-center gap-2 rounded-lg px-2 py-2 transition-colors",
                "hover:bg-slate-50/60 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
                level === 1 && "pl-2",
                level === 2 && "pl-6 text-[15px]",
                level === 3 && "pl-9 text-[14.5px]"
              )}
            >
              <ChevronRight className="w-4 h-4 opacity-60 group-hover:opacity-100 shrink-0" />
              <span className="truncate">{label}</span>
            </a>
          </li>
        ))}
      </Scrollspy>

      {/* Active item indicator */}
      <style>
        {`
          .toc-active > a {
            color: #0f172a;
            background: linear-gradient(90deg, rgba(14,165,233,0.08), rgba(99,102,241,0.06));
            font-weight: 600;
          }
          .toc-active > a::before {
            content: "";
            position: absolute;
            left: -12px;
            top: 10px;
            height: 22px;
            width: 3px;
            border-radius: 999px;
            background: linear-gradient(180deg, #0ea5e9, #6366f1);
          }
        `}
      </style>
    </nav>
  );
}
