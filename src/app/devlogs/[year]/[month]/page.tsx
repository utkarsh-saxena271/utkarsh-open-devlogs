import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"

export const runtime = "nodejs"
// export const dynamic = "force-dynamic"
export const revalidate = 3600; //ISR

interface PageProps {
  params: Promise<{
    year: string
    month: string
  }>
}

export default async function DevlogDatePage({ params }: PageProps) {
  const { year, month } = await params
  const path = [year, month]


  // turn ['uk', 'each', 'element'] → 'uk/each/element'
  const main_path = path.join('/')

  try {
    const { default: Post } = await import(`@/content/devlogs/${main_path}.mdx`)

    return (
      <article className="px-6 py-12 max-w-5xl mx-auto">


        {/* ✅ Correct usage */}
        <Post />
      </article>

      //  <Post/>
    )
  } catch (e) {
    console.log(e)
    notFound()
  }
}



export const dynamicParams = true



export async function generateStaticParams() {
  const devlogsDir = path.join(process.cwd(), "src/content/devlogs")
  
  if (!fs.existsSync(devlogsDir)) return []

  const paths: { year: string; month: string }[] = []

  // 1. Get all Year directories
  const years = fs.readdirSync(devlogsDir)

  for (const year of years) {
    const yearPath = path.join(devlogsDir, year)
    
    // Only proceed if it's a directory (skip root files like 2026.mdx)
    if (fs.statSync(yearPath).isDirectory()) {
      const months = fs.readdirSync(yearPath)
      
      for (const monthFile of months) {
        // 2. Look for Month MDX files (e.g., 03.mdx)
        if (monthFile.endsWith(".mdx")) {
          paths.push({
            year: year,
            month: monthFile.replace(".mdx", ""),
          })
        }
      }
    }
  }

  return paths
}