import { getDevlogsTree } from "@/lib/devlogs"
import Link from "next/link"

export default function SideBar() {
  const tree = getDevlogsTree()

  return (
    <div className="p-4 bg-slate-900 min-h-screen text-white">
      {tree.map(({ year, months }) => (
        <div key={year}>
          <h3 className="font-bold cursor-pointer">{year}</h3>
          <div className="pl-4">
            {months.map(({ month, dates }) => (
              <div key={month}>
                <h4 className="font-medium cursor-pointer">{month}</h4>
                <ul className="pl-4">
                  {dates.map(({ date, title }) => (
                    <li key={date}>
                      <Link href={`/devlogs/${year}/${month}/${date}`}>
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}