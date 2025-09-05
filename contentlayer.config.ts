import { defineDocumentType, makeSource } from "contentlayer/source-files"
import remarkGfm from "remark-gfm"

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    published: { type: "boolean", required: false, default: true },
  },
  computedFields: {
    slug: { type: "string", resolve: (doc) => doc._raw.flattenedPath },
    route: {
      type: "string",
      resolve: (doc) => {
        const s = doc._raw.flattenedPath
        if (s === "about") return "/about"
        if (s === "vision") return "/vision"
        if (s.startsWith("projects/")) return `/${s}`
        return `/${s}`
      },
    },
  },
}))

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Page],
  mdx: { remarkPlugins: [remarkGfm] },
})
