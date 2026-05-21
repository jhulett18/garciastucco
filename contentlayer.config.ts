import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import readingTime from 'reading-time';
import { defineDocumentType, makeSource } from 'contentlayer2/source-files';

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

const extractToc = (raw: string) => {
  const headingRegex = /^(##|###)\s+(.+)$/gm;
  const toc: Array<{ level: number; text: string; slug: string }> = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(raw)) !== null) {
    const level = match[1] === '##' ? 2 : 3;
    const text = match[2].trim();
    toc.push({ level, text, slug: toSlug(text) });
  }

  return toc;
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    summary: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: false }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath
    },
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath}`
    },
    readingTime: {
      type: 'json',
      resolve: (post) => readingTime(post.body.raw)
    },
    toc: {
      type: 'json',
      resolve: (post) => extractToc(post.body.raw)
    }
  }
}));

export default makeSource({
  contentDirPath: 'data/blog',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]
  }
});
