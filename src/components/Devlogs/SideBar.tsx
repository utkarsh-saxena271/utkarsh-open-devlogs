"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useMemo } from "react";
import { ChevronRight, Menu, X, FileText } from "lucide-react";
import type { DevlogsTree } from "@/lib/devlogs";

interface SideBarProps {
  tree: DevlogsTree;
}

/* ================= SidebarContent ================= */

function SidebarContent({
  tree,
  expanded,
  toggle,
  pathname,
  onNavigate,
}: {
  tree: DevlogsTree;
  expanded: Record<string, boolean>;
  toggle: (key: string) => void;
  pathname: string;
  onNavigate?: () => void;
}) {
  const isActive = (path: string) => pathname === path;

  return (
    <div className="h-full p-4 space-y-1 bg-slate-900 text-slate-400 font-sans selection:bg-blue-500/30">
      <Link
        href="/devlogs"
        onClick={onNavigate}
        className="flex items-center px-3 py-2 mb-4 text-sm font-medium rounded-md transition-colors hover:bg-slate-800 hover:text-white"
      >
        All Devlogs
      </Link>

      {tree.map(({ year, months }) => {
        const yearOpen = expanded[year];

        return (
          <div key={year} className="space-y-1">
            <div className="flex items-center group">
              <button
                onClick={() => toggle(year)}
                className="p-1 rounded-md hover:bg-slate-800 transition-colors"
              >
                <ChevronRight
                  size={16}
                  className={`transition-transform duration-200 ${
                    yearOpen ? "rotate-90 text-slate-200" : "text-slate-500"
                  }`}
                />
              </button>
              <Link
                href={`/devlogs/${year}`}
                onClick={onNavigate}
                className="flex-1 px-2 py-1 text-sm font-semibold tracking-wide hover:text-white transition-colors"
              >
                {year}
              </Link>
            </div>

            {yearOpen && (
              <div className="ml-3 pl-3 border-l border-slate-800 space-y-1">
                {months.map(({ month, dates }) => {
                  const key = `${year}-${month}`;
                  const monthOpen = expanded[key];

                  return (
                    <div key={month} className="space-y-1">
                      <div className="flex items-center group">
                        <button
                          onClick={() => toggle(key)}
                          className="p-1 rounded-md hover:bg-slate-800 transition-colors"
                        >
                          <ChevronRight
                            size={14}
                            className={`transition-transform duration-200 ${
                              monthOpen
                                ? "rotate-90 text-slate-200"
                                : "text-slate-500"
                            }`}
                          />
                        </button>
                        <Link
                          href={`/devlogs/${year}/${month}`}
                          onClick={onNavigate}
                          className="flex-1 px-2 py-1 text-sm hover:text-white transition-colors"
                        >
                          {month}
                        </Link>
                      </div>

                      {monthOpen &&
                        dates.map(({ date, title }) => {
                          const path = `/devlogs/${year}/${month}/${date}`;
                          const active = isActive(path);

                          return (
                            <Link
                              key={date}
                              href={path}
                              onClick={onNavigate}
                              className={`ml-5 flex items-center gap-2.5 px-3 py-1.5 rounded-md text-sm transition-all ${
                                active
                                  ? "bg-blue-600/10 text-blue-400 font-medium"
                                  : "hover:bg-slate-800 hover:text-slate-200"
                              }`}
                            >
                              <FileText
                                size={14}
                                className={
                                  active
                                    ? "text-blue-400"
                                    : "text-slate-600"
                                }
                              />
                              <span className="truncate">
                                {title || date}
                              </span>
                            </Link>
                          );
                        })}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ================= Main Sidebar ================= */

export default function SideBar({ tree }: SideBarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const autoExpanded = useMemo(() => {
    const parts = pathname.split("/").filter(Boolean);
    const year = parts[1];
    const month = parts[2];
    const obj: Record<string, boolean> = {};
    if (year) obj[year] = true;
    if (year && month) obj[`${year}-${month}`] = true;
    return obj;
  }, [pathname]);

  const mergedExpanded = { ...autoExpanded, ...expanded };

  const toggle = (key: string) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Mobile open button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-500/20 active:scale-95 transition-transform z-50"
      >
        <Menu size={20} />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40 transition-opacity"
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-slate-900 border-r border-slate-800 z-50 transform transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-slate-800 mb-2">
          <span className="text-sm font-bold tracking-widest text-white uppercase">
            Navigation
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-500 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <SidebarContent
          tree={tree}
          expanded={mergedExpanded}
          toggle={toggle}
          pathname={pathname}
          onNavigate={() => setIsOpen(false)} // 👈 auto close
        />
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden md:block w-64 h-screen sticky top-0 bg-slate-900 border-r border-slate-800">
        <SidebarContent
          tree={tree}
          expanded={mergedExpanded}
          toggle={toggle}
          pathname={pathname}
        />
      </aside>
    </>
  );
}