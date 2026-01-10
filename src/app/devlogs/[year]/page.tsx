import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import MDXClient from "@/components/MDXClient"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

interface PageProps {
  params: Promise<{
    year: string
  }>
}

export default async function MonthPage({ params }: PageProps) {
  const { year } = await params

  if (!year) notFound()

  const mdxPath = path.join(
    process.cwd(),
    "src/content/devlogs",
    `${year}.mdx`
  )

  if (!fs.existsSync(mdxPath)) notFound()

  return (
    <article className="px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">
        Devlog · {year}
      </h1>

      <MDXClient year={year} />
    </article>
  )
}