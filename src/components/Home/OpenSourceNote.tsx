import Link from "next/link";
import { Montserrat, Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function OpenSourceNote() {
  return (
    <section className="px-6 max-w-4xl mx-auto">
      <h2 className={`${montserrat.className} mb-6 text-center text-5xl font-extralight`}>
        Open-source & Build in Public
      </h2>
      <p className={`${roboto.className} mb-4 text-xl leading-relaxed`}>
        This project is fully open-source — you can explore the code, track every commit, 
        and watch the platform evolve over time. Every change, addition, and improvement 
        is visible, so anyone can learn, contribute, or get inspired.
      </p>
      <p className={`${roboto.className} mb-6 text-xl leading-relaxed`}>
        I believe in building in public: sharing progress, lessons learned, and best 
        practices in a transparent way. This makes learning collaborative and accessible 
        for everyone.
      </p>
      <div className="text-center">
        <Link
          href="https://github.com/utkarsh-saxena271/utkarsh-open-devlogs"
          target="_blank"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-800 transition-colors"
        >
          View GitHub Repository
        </Link>
      </div>
    </section>
  );
}