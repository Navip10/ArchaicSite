"use client"

import { useMDXComponent } from "next-contentlayer/hooks"
import type { MDXComponents } from "mdx/types"
import { Callout, ButtonLink, MdxLink } from "./mdx-components"

const components: MDXComponents = {
  a: MdxLink,
  Callout,
  ButtonLink,
}

export default function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code)
  return (
    <div className="prose prose-invert max-w-none">
      <Component components={components} />
    </div>
  )
}
