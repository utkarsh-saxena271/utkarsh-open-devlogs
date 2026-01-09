import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import MDXClient from "@/components/MDXClient"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

interface PageProps {
  params: Promise<{
    year: string
    month: string
    date: string
  }>
}

export default async function DevlogDatePage({ params }: PageProps) {
  const { year, month, date } = await params

  if (!year || !month || !date) notFound()

  const mdxPath = path.join(
    process.cwd(),
    "src/content/devlogs",
    year,
    month,
    `${date}.mdx`
  )

  if (!fs.existsSync(mdxPath)) notFound()

  return (
    <article className="px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">
        Devlog · {year}/{month}/{date}
      </h1>

      {/* ✅ MDX imported ONLY in client */}
      <MDXClient year={year} month={month} date={date} />
    </article>
  )
}