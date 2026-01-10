"use client"

import Link from "next/link"
import { useState } from "react"
import type { DevlogsTree } from "@/lib/devlogs"
import { MONTH_NAMES } from "@/lib/months"
import { BiChevronDown, BiChevronRight } from "react-icons/bi"

interface SideBarProps {
  tree: DevlogsTree
  onNavigate?: () => void
}

export default function SideBar({ tree, onNavigate }: SideBarProps) {
  const [openYears, setOpenYears] = useState<Record<string, boolean>>({})
  const [openMonths, setOpenMonths] = useState<Record<string, boolean>>({})

  return (
    <aside className="p-4 space-y-4 h-full overflow-y-auto bg-slate-900 text-white">
      {tree.map(({ year, months }) => {
        const yearOpen = openYears[year]

        return (
          <div key={year}>
            {/* YEAR */}
            <Link
              href={`/devlogs/${year}`}
              onClick={() => {
                setOpenYears((p) => ({ ...p, [year]: !yearOpen }))
                onNavigate?.()
              }}
              className="flex items-center gap-2 font-bold text-lg hover:underline"
            >
              {yearOpen ? <BiChevronDown /> : <BiChevronRight />}
              {year}
            </Link>

            {/* MONTHS */}
            {yearOpen && (
              <div className="pl-6 mt-2 space-y-2">
                {months.map(({ month, dates }) => {
                  const key = `${year}-${month}`
                  const monthOpen = openMonths[key]

                  return (
                    <div key={month}>
                      {/* MONTH */}
                      <Link
                        href={`/devlogs/${year}/${month}`}
                        onClick={() => {
                          setOpenMonths((p) => ({
                            ...p,
                            [key]: !monthOpen,
                          }))
                          onNavigate?.()
                        }}
                        className="flex items-center gap-2 font-medium hover:underline"
                      >
                        {monthOpen ? (
                          <BiChevronDown />
                        ) : (
                          <BiChevronRight />
                        )}
                        {MONTH_NAMES[month] ?? month}
                      </Link>

                      {/* DATES */}
                      {monthOpen && (
                        <ul className="pl-6 mt-1 space-y-1 text-sm">
                          {dates.map(({ date, title }) => (
                            <li key={date}>
                              <Link
                                href={`/devlogs/${year}/${month}/${date}`}
                                onClick={onNavigate}
                                title={title}
                                className="hover:underline opacity-90"
                              >
                                {date}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </aside>
  )
}