"use client"

import dynamic from "next/dynamic"
import { useMemo } from "react"

export default function MDXClient({
  year,
  month,
  date,
}: {
  year: string
  month: string
  date: string
}) {
  const MDXContent = useMemo(
    () =>
      dynamic(
        () =>
          import(
            `@/content/devlogs/${year}/${month}/${date}.mdx`
          ),
        { ssr: false }
      ),
    [year, month, date]
  )

  return (
    <div className="prose prose-invert max-w-none">
      <MDXContent />
    </div>
  )
}