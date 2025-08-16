import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Okeechobee, FL",
      rating: 5,
      text: "Garcia Professional Stucco transformed our Florida home's exterior beyond our expectations. The quote calculator was incredibly accurate, and the final result was exactly what we paid for. Professional, reliable, and excellent quality work.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b372?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      project: "Full Home Stucco Installation"
    },
    {
      name: "Michael Chen",
      location: "Lake Placid, FL",
      rating: 5,
      text: "After hurricane damage, Garcia Professional Stucco provided emergency repair services and restored our stucco perfectly. You can't even tell where the damage was. The color matching was spot-on and the texture looks seamless.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      project: "Emergency Stucco Repair"
    },
    {
      name: "Lisa Rodriguez",
      location: "Sebring, FL",
      rating: 5,
      text: "Garcia Professional Stucco was incredibly professional and completed our project ahead of schedule. The quote calculator gave us confidence in the pricing, and there were no surprise costs. Highly recommend for any Florida stucco work.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      project: "Stucco Restoration & Painting"
    },
    {
      name: "David Thompson",
      location: "Avon Park, FL",
      rating: 5,
      text: "Outstanding work on our commercial property. They handled the entire project professionally, from initial quote to final cleanup. The new stucco looks amazing and has significantly improved our building's appearance.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      project: "Commercial Stucco Installation"
    },
    {
      name: "Jennifer Martinez",
      location: "Moore Haven, FL",
      rating: 5,
      text: "From quote to completion, everything was smooth and professional. The online calculator was a great starting point, and the final price was very fair. The quality of work exceeded our expectations.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      project: "Residential Stucco Repair"
    },
    {
      name: "Robert Wilson",
      location: "Brighton, FL",
      rating: 5,
      text: "Garcia Professional Stucco provided excellent craftsmanship and attention to detail. They fixed multiple problem areas and applied a beautiful new finish. The 15-year warranty gives us peace of mind, and the work has held up perfectly through Florida's weather.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      project: "Multi-Surface Stucco Restoration"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. See why hundreds of Florida homeowners and businesses trust Garcia Professional Stucco with their stucco projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
                
                <div className="text-sm text-primary font-medium">
                  Project: {testimonial.project}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 p-6 bg-slate-50 rounded-xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}