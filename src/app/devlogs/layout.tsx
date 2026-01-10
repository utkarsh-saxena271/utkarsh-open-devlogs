// src/app/devlogs/layout.tsx
import SideBarWrapper from "@/components/Devlogs/SideBarWrapper"
import { getDevlogsTree } from "@/lib/devlogs"
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Utkarsh ODL | Devlogs",
};

export default function DevlogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const tree = getDevlogsTree()

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <SideBarWrapper tree={tree} />

      {/* Content */}
      <main className="flex-1 h-screen overflow-auto">
        {children}
      </main>
    </div>
  )
}