import { Montserrat, Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"] })
const montserrat = Montserrat({ subsets: ["latin"] })

export default function WhatIsThis() {
  return (
    <div className="mb-10 py-20 flex flex-col items-center text-center px-6 border-b border-slate-600/30">
      <h2 className={`${montserrat.className} mb-6 text-3xl sm:text-4xl md:text-5xl font-extralight`}>
        What is this?
      </h2>

      <p className={`${roboto.className} mb-8 max-w-3xl text-md sm:text-lg text-slate-200`}>
        Utkarsh Open DevLogs is an open-source learning space where I publicly
        document my day-to-day journey as a developer — what I learn, how I
        understand it, and how I apply it in real projects.
      </p>

      <p className={`${roboto.className} mb-14 max-w-3xl text-md sm:text-lg text-slate-200`}>
        I also break down development topics for beginners in a straight,
        practical way — no unnecessary theory, no curved explanations,
        just what matters and how it works.
      </p>

      {/* Feature Blocks */}
      <div className={`${roboto.className} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full`}>
        <div className="cursor-pointer rounded-xl bg-slate-800/60 p-6 backdrop-blur
                  transition-all duration-200
                  hover:bg-slate-700/60 hover:-translate-y-1">
          <h3 className="mb-2 text-lg sm:text-xl font-medium text-white">
            Daily DevLogs
          </h3>
          <p className="text-slate-300">
            Honest daily updates on what I worked on, learned, broke, and fixed.
          </p>
        </div>

        <div className="cursor-pointer rounded-xl bg-slate-800/60 p-6 backdrop-blur
                  transition-all duration-200
                  hover:bg-slate-700/60 hover:-translate-y-1">
          <h3 className="mb-2 text-lg sm:text-xl font-medium text-white">
            Beginner-First Learning
          </h3>
          <p className="text-slate-300">
            Straightforward explanations written to actually make sense.
          </p>
        </div>

        <div className="cursor-pointer rounded-xl bg-slate-800/60 p-6 backdrop-blur
                  transition-all duration-200
                  hover:bg-slate-700/60 hover:-translate-y-1">
          <h3 className="mb-2 text-lg sm:text-xl font-medium text-white">
            Real Code Snippets
          </h3>
          <p className="text-slate-300">
            Practical code taken directly from real projects and experiments.
          </p>
        </div>

        <div className="cursor-pointer rounded-xl bg-slate-800/60 p-6 backdrop-blur
                  transition-all duration-200
                  hover:bg-slate-700/60 hover:-translate-y-1">
          <h3 className="mb-2 text-lg sm:text-xl font-medium text-white">
            Project-Based Learning
          </h3>
          <p className="text-slate-300">
            Learning by building, breaking, and improving actual applications.
          </p>
        </div>

        <div className="cursor-pointer rounded-xl bg-slate-800/60 p-6 backdrop-blur
                  transition-all duration-200
                  hover:bg-slate-700/60 hover:-translate-y-1">
          <h3 className="mb-2 text-lg sm:text-xl font-medium text-white">
            Build in Public
          </h3>
          <p className="text-slate-300">
            Progress, mistakes, and lessons shared openly without polishing reality.
          </p>
        </div>

        <div className="cursor-pointer rounded-xl bg-slate-800/60 p-6 backdrop-blur
                  transition-all duration-200
                  hover:bg-slate-700/60 hover:-translate-y-1">
          <h3 className="mb-2 text-lg sm:text-xl font-medium text-white">
            Open Source Forever
          </h3>
          <p className="text-slate-300">
            Fully open-source, free to explore, fork, and contribute anytime.
          </p>
        </div>
      </div>
    </div>
  )
}