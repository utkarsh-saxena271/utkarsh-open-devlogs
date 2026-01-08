import Link from "next/link"
import { Montserrat, Roboto } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] })
const roboto = Roboto({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div className="min-h-140 flex flex-col items-center justify-center gap-10 border-b border-slate-600/30 pb-10">
      <div className="w-full text-center flex flex-col gap-6 justify-center px-10 ">
        <h1 className={`${montserrat.className} font-medium text-4xl sm:text-5xl md:text-6xl`}>
          Utkarsh Open DevLogs
        </h1>
        <h1 className={`${roboto.className} font-extralight text-2xl sm:text-3xl md:text-4xl`}>
          Building in public — daily dev logs, simple explanations, real code.
        </h1>
        <p className={`${roboto.className} font-thin text-md sm:text-lg`}>
          An open-source learning space where I document what I learn every day, in simple language with practical examples.
        </p>
      </div>
      <div className={`${roboto.className} font-thin flex flex-col sm:flex-row items-center justify-center gap-10`}>
        <Link
          href="/devlogs"
          className="bg-slate-600 text-xl px-4 py-2 rounded hover:bg-slate-700"
        >
          DevLogs
        </Link>
        <Link
          href="/learn"
          className="bg-slate-600 text-xl px-4 py-2 rounded hover:bg-slate-700"
        >
          Learn
        </Link>
        <Link
          href="https://github.com/utkarsh-saxena271/utkarsh-open-devlogs"
          target="_blank"
          className="bg-slate-600 text-xl px-4 py-2 rounded flex items-center gap-2 hover:bg-slate-700"
        >
          Star Us
        </Link>
      </div>
    </div>
  )
}
// <section className="text-center mb-20">
//   <h1 className="text-5xl font-bold mb-4">Utkarsh Open DevLogs</h1>
//   <p className="text-xl mb-6">
//     Building in public — daily dev logs, simple explanations, real code.
//   </p>
//   
// </section>