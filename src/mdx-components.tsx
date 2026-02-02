// import type { MDXComponents } from 'mdx/types'

// const components: MDXComponents = {}

// export function useMDXComponents(): MDXComponents {
//   return components
// }
import type { MDXComponents } from 'mdx/types'
import { Montserrat, Roboto } from "next/font/google";
import CopyButton from './components/CopyButton';
const montserrat = Montserrat({ subsets: ["latin"] })
const roboto = Roboto({ subsets: ["latin"] });

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className={`${montserrat.className} text-5xl font-bold mt-8 mb-4 text-white`}>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className={`${montserrat.className} text-4xl font-bold mt-6 mb-3 text-slate-100`}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className={`${montserrat.className} text-3xl font-semibold mt-5 mb-2 text-slate-200`}>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className={`${montserrat.className} text-2xl font-semibold mt-5 mb-2 text-slate-200`}>{children}</h4>
    ),
    p: ({ children }) => (
      <p className={`${roboto.className} text-base leading-relaxed mb-4 text-slate-300`}>{children}</p>
    ),
    code: ({ children, className }) => (
      <code
        className={`${className} block w-full bg-transparent text-sm text-slate-100 font-mono leading-relaxed`}
      >
        {children}
      </code>
    ),
    pre: ({ children }) => {
      const codeText = String(children?.props?.children || "");

      return (
        <div className="relative mb-4">
          <CopyButton text={codeText} />
          <pre className="bg-slate-900 px-4 py-3 rounded-lg overflow-x-auto border border-slate-700">
            {children}
          </pre>
        </div>
      );
    },
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 text-slate-300 space-y-2">{children}</ul>
    ),
    li: ({ children }) => (
      <li className="ml-4">{children}</li>
    ),
    ...components,
  }
}