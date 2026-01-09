"use client"

import { MDXProvider } from "@mdx-js/react"

export default function MDXRenderer({
  Content,
}: {
  Content: React.ComponentType
}) {
  return (
    <MDXProvider>
      <Content />
    </MDXProvider>
  )
}