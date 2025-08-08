import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { QuoteCalculator } from "./components/QuoteCalculator";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Services />
          <QuoteCalculator />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}