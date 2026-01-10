// src/components/Devlogs/SideBarWrapper.tsx
"use client"

import { useState } from "react"
import SideBar from "./SideBar"
import type { DevlogsTree } from "@/lib/devlogs"

export default function SideBarWrapper({
  tree,
}: {
  tree: DevlogsTree
}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-black text-white px-3 py-2 rounded"
      >
        Menu
      </button>

      {/* Overlay (mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static z-50
          h-screen w-64
          bg-slate-900 text-white
          transform transition-transform
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <SideBar tree={tree} onNavigate={() => setOpen(false)} />
      </aside>
    </>
  )
}