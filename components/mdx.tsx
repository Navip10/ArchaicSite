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
    <article className="prose">
      <Component components={components} />
    </article>
  )
}
