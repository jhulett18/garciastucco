import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { CheckCircle, Shield, Clock, Award } from "lucide-react";

export function Hero() {
  const scrollToCalculator = () => {
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-20 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Garcia Professional Stucco - South Florida's Trusted Experts
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform your Florida home with our expert stucco installation, repair, and restoration services. Serving Okeechobee, Lake Placid, Sebring, and surrounding areas with quality craftsmanship built for Florida's climate.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <span className="text-foreground">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                <span className="text-foreground">15-Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-600 dark:text-green-400" />
                <span className="text-foreground">Same-Day Quotes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-green-600 dark:text-green-400" />
                <span className="text-foreground">25+ Years Experience</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToCalculator} className="text-lg px-8 py-3">
                Get Instant Quote
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                View Our Work
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div>
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">4.9/5</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/assets/images/stucco-hero-image.jpg"
                alt="Professional stucco work by Garcia Professional Stucco - beautiful Florida home exterior"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-xl p-6 border border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">$2.8M+</div>
                <div className="text-sm text-muted-foreground">Saved for Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}