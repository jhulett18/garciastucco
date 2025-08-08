import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Home, Wrench, Paintbrush, Zap } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Home,
      title: "New Stucco Installation",
      description: "Complete stucco installation for new construction and home additions in Florida. Using premium materials engineered to withstand Florida's humid climate and weather.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Florida-grade materials", "Hurricane-resistant", "Custom textures", "15-year warranty"]
    },
    {
      icon: Wrench,
      title: "Stucco Repair & Restoration",
      description: "Expert repair services for cracks, chips, and Florida weather damage including hurricane and storm damage. We restore your stucco to like-new condition.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Storm damage repair", "Color matching", "Texture restoration", "Florida waterproofing"]
    },
    {
      icon: Paintbrush,
      title: "Stucco Painting & Finishing",
      description: "Professional painting and finishing services using UV-resistant paints perfect for Florida's intense sun and humidity.",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Color consultation", "Florida-grade paints", "Surface preparation", "Superior UV protection"]
    },
    {
      icon: Zap,
      title: "Emergency Stucco Services",
      description: "24/7 emergency repair services for Florida storm damage, hurricane damage, structural issues, and urgent stucco problems throughout the Okeechobee area.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["24/7 availability", "Rapid response in Okeechobee area", "Insurance claims assistance", "Storm protection"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Professional Stucco Services in South Florida
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From new installations to emergency storm repairs, Garcia Professional Stucco provides complete solutions for Florida homes with unmatched quality and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border shadow-lg">
              <div className="relative overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-card rounded-full p-3 shadow-lg border border-border">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}