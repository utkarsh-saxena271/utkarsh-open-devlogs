import { Montserrat, Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function WhoIsThisFor() {
  return (
    <div className="mb-10 py-20 flex flex-col items-center px-6 border-b border-slate-600/30">
      <h2 className={`${montserrat.className} mb-6 text-center text-3xl sm:text-4xl md:text-5xl font-extralight`}>
        Who is this for?
      </h2>
      <div className={`${roboto.className} grid grid-cols-1 gap-4`}>
        <p className="cursor-pointer text-md sm:text-lg md:text-xl font-thin rounded-xl bg-slate-800/60 p-6 backdrop-blur transition-all duration-200 hover:bg-slate-700/60 hover:-translate-y-1">
          Students learning web development, computer science, or programming concepts who want clear, practical explanations that are easy to follow.
        </p>
        <p className="cursor-pointer text-md sm:text-lg md:text-xl font-thin rounded-xl bg-slate-800/60 p-6 backdrop-blur transition-all duration-200 hover:bg-slate-700/60 hover:-translate-y-1">
          Developers building in public or tracking their progress, who value clarity, actionable examples, and learning by doing.
        </p>
        <p className="cursor-pointer text-md sm:text-lg md:text-xl font-thin rounded-xl bg-slate-800/60 p-6 backdrop-blur transition-all duration-200 hover:bg-slate-700/60 hover:-translate-y-1">
          Anyone who prefers simple, structured explanations over hype, overly long tutorials, or confusing guides.
        </p>
      </div>
    </div>
  );
}