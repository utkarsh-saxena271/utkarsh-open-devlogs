// import type { MDXComponents } from 'mdx/types'
 
// const components: MDXComponents = {}
 
// export function useMDXComponents(): MDXComponents {
//   return components
// }
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 text-white">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-6 mb-3 text-slate-100">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-5 mb-2 text-slate-200">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-base leading-relaxed mb-4 text-slate-300">{children}</p>
    ),
    code: ({ children, className }) => (
      <code className={`${className} bg-slate-800 px-2 py-1 rounded text-sm text-slate-100`}>
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-slate-900 p-4 rounded-lg overflow-x-auto mb-4 border border-slate-700">
        {children}
      </pre>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 text-slate-300 space-y-2">{children}</ul>
    ),
    li: ({ children }) => (
      <li className="ml-4">{children}</li>
    ),
    ...components,
  }
}