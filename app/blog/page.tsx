import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const posts = allPosts.sort((a, b) => +new Date(b.date) - +new Date(a.date));

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <section className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">Stucco & Home Repair Blog</h1>
            <p className="text-lg text-muted-foreground">
              Purposeful guidance, emotional clarity, and practical repair insights for Florida homeowners.
            </p>
          </section>

          <section className="grid gap-6">
            {posts.map((post) => (
              <Card key={post.slug} className="border-border">
                <CardHeader className="space-y-3">
                  <div className="text-sm text-muted-foreground flex flex-wrap gap-4">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>{Math.ceil(post.readingTime.minutes)} min read</span>
                  </div>
                  <CardTitle className="text-2xl leading-tight">
                    <Link href={post.url} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{post.summary}</p>
                  <Link href={post.url} className="inline-flex text-primary font-semibold hover:underline underline-offset-4">
                    Read article
                  </Link>
                </CardContent>
              </Card>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
