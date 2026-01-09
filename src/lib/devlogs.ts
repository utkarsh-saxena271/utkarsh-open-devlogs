// src/lib/devlogs.ts

import fs from "fs";
import path from "path";


export type DevlogsTree = {
  year: string
  months: {
    month: string
    dates: {
      date: string
      title: string
    }[]
  }[]
}[]

const DEVLOGS_DIR = path.join(process.cwd(), "src/content/devlogs")

export function getDevlogsTree(): DevlogsTree {
  const years = fs.readdirSync(DEVLOGS_DIR).filter((y) =>
    fs.statSync(path.join(DEVLOGS_DIR, y)).isDirectory()
  )

  return years.map((year) => {
    const monthsDir = path.join(DEVLOGS_DIR, year)
    const months = fs.readdirSync(monthsDir).filter((m) =>
      fs.statSync(path.join(monthsDir, m)).isDirectory()
    )

    return {
      year,
      months: months.map((month) => {
        const monthDir = path.join(monthsDir, month)
        const dates = fs
          .readdirSync(monthDir)
          .filter((f) => f.endsWith(".mdx"))

        return {
          month,
          dates: dates.map((file) => {
            const date = file.replace(".mdx", "")
            const content = fs.readFileSync(path.join(monthDir, file), "utf-8")
            const match = content.match(/title:\s*(.+)/)
            const title = match ? match[1].trim() : `Devlog ${date}`
            return { date, title }
          }),
        }
      }),
    }
  })
}