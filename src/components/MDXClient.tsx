"use client"

import dynamic from "next/dynamic"
import { useMemo } from "react"

type Props =
  | { year: string }
  | { year: string; month: string }
  | { year: string; month: string; date: string }

export default function MDXClient(props: Props) {
  const MDXContent = useMemo(() => {
    // 📅 DAY
    if ("date" in props && "month" in props) {
      return dynamic(
        () =>
          import(
            `@/content/devlogs/${props.year}/${props.month}/${props.date}.mdx`
          ),
        { ssr: false }
      )
    }

    // 📆 MONTH
    if ("month" in props) {
      return dynamic(
        () =>
          import(
            `@/content/devlogs/${props.year}/${props.month}.mdx`
          ),
        { ssr: false }
      )
    }

    // 📌 YEAR
    return dynamic(
      () =>
        import(
          `@/content/devlogs/${props.year}.mdx`
        ),
      { ssr: false }
    )
  }, [props])

  return (
    <div className="prose prose-invert max-w-none">
      <MDXContent />
    </div>
  )
}