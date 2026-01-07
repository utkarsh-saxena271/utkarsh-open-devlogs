import { Montserrat, Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function HowItWorks() {
  return (
    <div className="mb-10 py-20 flex flex-col items-center px-6 border-b border-slate-600/30">
      <h2 className={`${montserrat.className} mb-6 text-center text-5xl font-extralight`}>
        How it works
      </h2>
      <div className={`${roboto.className} grid grid-cols-1 gap-4`}>
        <p className="cursor-pointer text-xl font-thin rounded-xl bg-slate-800/60 p-6 backdrop-blur transition-all duration-200 hover:bg-slate-700/60 hover:-translate-y-1">
          Every day, I learn something new — a concept, a library, a framework, or a pattern from real-world development.
        </p>
        <p className="cursor-pointer text-xl font-thin rounded-xl bg-slate-800/60 p-6 backdrop-blur transition-all duration-200 hover:bg-slate-700/60 hover:-translate-y-1">
          I document my understanding through short, clear dev logs instead of keeping notes private, so I can track progress and share insights.
        </p>
        <p className="cursor-pointer text-xl font-thin rounded-xl bg-slate-800/60 p-6 backdrop-blur transition-all duration-200 hover:bg-slate-700/60 hover:-translate-y-1">
          Topics that are tricky or important are expanded into step-by-step tutorials, complete with examples and explanations.
        </p>
        <p className="cursor-pointer text-xl font-thin rounded-xl bg-slate-800/60 p-6 backdrop-blur transition-all duration-200 hover:bg-slate-700/60 hover:-translate-y-1">
          Everything stays open-source, so anyone can learn, fork, or contribute to my projects freely.
        </p>
      </div>
    </div>
  );
}