import type { Metadata } from 'next';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MdxContent } from '@/components/blog/MdxContent';

type BlogPostPageProps = {
  params: {
    slug: string[];
  };
};

type TocItem = {
  level: number;
  text: string;
  slug: string;
};

const posts = allPosts.sort((a, b) => +new Date(b.date) - +new Date(a.date));

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug.split('/')
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const slugPath = params.slug.join('/');
  const post = posts.find((item) => item.slug === slugPath);

  if (!post) {
    return { title: 'Post not found' };
  }

  return {
    title: `${post.title} | Garcia Professional Stucco Blog`,
    description: post.summary
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const slugPath = params.slug.join('/');
  const post = posts.find((item) => item.slug === slugPath);

  if (!post) {
    notFound();
  }

  const toc = post.toc as TocItem[];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_260px] gap-12">
            <div>
              <Link href="/blog" className="inline-flex text-primary font-semibold hover:underline underline-offset-4 mb-8">
                Back to blog
              </Link>
              <header className="space-y-4 mb-10">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">{post.title}</h1>
                <div className="text-muted-foreground flex flex-wrap gap-4">
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>{Math.ceil(post.readingTime.minutes)} min read</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">{post.summary}</p>
              </header>
              <MdxContent code={post.body.code} />
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24 border border-border rounded-lg p-5 bg-card">
                <h2 className="font-semibold text-foreground mb-4">On this page</h2>
                {toc.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No section headings</p>
                ) : (
                  <ul className="space-y-2 text-sm">
                    {toc.map((item) => (
                      <li key={item.slug} className={item.level === 3 ? 'pl-4' : ''}>
                        <a href={`#${item.slug}`} className="text-muted-foreground hover:text-primary transition-colors">
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
