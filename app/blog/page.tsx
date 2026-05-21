import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const posts = [
  {
    title: "When a Small Stucco Crack Feels Like a Big Warning",
    paragraphs: [
      "Most homeowners know the feeling: you spot one thin crack and suddenly every wall starts to look suspicious. That reaction is not overthinking, it is your home asking for attention before damage grows.",
      "Hairline cracks are common in Florida heat cycles, but they still need to be documented and monitored. What matters is pattern, depth, and whether moisture is getting behind the finish.",
      "A purposeful repair plan starts with inspection, moisture checks, and sealing vulnerable areas before repainting. Quick cosmetic patching without diagnosis often leads to repeat failures.",
      "The emotional relief comes from clarity: once you know what is structural versus surface-level, you can make confident decisions and protect your home budget long-term."
    ]
  },
  {
    title: "Home Repair Is Not Just Cost, It Is Protection",
    paragraphs: [
      "It is easy to delay exterior repairs when life gets busy, especially when walls still look mostly fine from the street. But stucco is your envelope, and envelopes fail quietly before they fail visibly.",
      "Purposeful maintenance means treating stucco like roof care: inspect seasonally, seal penetrations, and resolve water intrusion fast. That discipline prevents mold risk, framing damage, and expensive rework.",
      "If you are comparing bids, look beyond the number. Ask about prep, substrate checks, crack treatment method, and warranty terms tied to workmanship and materials.",
      "Peace of mind is not bought with the cheapest quote. It is built through thorough scope, quality execution, and a contractor who explains exactly what is being protected and why."
    ]
  },
  {
    title: "After Storm Season: What Your Exterior Is Trying to Tell You",
    paragraphs: [
      "After heavy rain and wind, many homeowners only check shingles and gutters. Stucco deserves the same attention because wind-driven rain can exploit tiny openings that looked harmless before the storm.",
      "Walk the perimeter and note fresh stains, bulges, new crack branching, or soft spots near windows and doors. These signs can indicate moisture movement that should be assessed quickly.",
      "A focused post-storm service visit can include moisture meter readings, sealant review, and targeted repairs before repainting. Early action reduces hidden deterioration and shortens project scope.",
      "The goal is not fear, it is control. A timely inspection turns uncertainty into a practical repair roadmap and helps you keep your home resilient through the next season."
    ]
  },
  {
    title: "Choosing Repairs That Match the Life of Your Home",
    paragraphs: [
      "Every house has a timeline, and every repair choice should respect it. If you plan to stay long-term, durable systems and proper layering matter more than temporary visual fixes.",
      "For recurring problem areas, your contractor should evaluate movement joints, drainage paths, and substrate condition, not just surface texture. Lasting stucco work starts beneath the finish coat.",
      "Purposeful planning also means sequencing: address water paths first, then patching, then texture blending, and final coating. Reversing that order can trap problems and shorten lifespan.",
      "Emotionally, this approach replaces repair fatigue with confidence. You stop reacting to symptoms and start investing in solutions that fit your home for the next decade."
    ]
  },
  {
    title: "A Better Quote Conversation for Stucco and Home Repair",
    paragraphs: [
      "A quote should do more than give a number. It should show what is included, what conditions could change price, and how the work protects your home from future moisture issues.",
      "When you request estimates, provide square footage, visible problem locations, and timeline goals. Better input leads to better pricing and fewer surprises after work begins.",
      "Ask each contractor to break out labor, materials, repair depth, and finish options. This makes comparisons fair and helps you choose based on value, not guesswork.",
      "The best outcome is not just an accepted bid. It is a shared understanding of scope, risk, and finish quality so your project moves forward with trust and clear expectations."
    ]
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <section className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">Stucco & Home Repair Blog</h1>
            <p className="text-lg text-muted-foreground">
              Emotional clarity and practical guidance for protecting your home with purposeful repair decisions.
            </p>
          </section>

          <section className="space-y-6">
            {posts.map((post) => (
              <Card key={post.title} className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {post.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
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
