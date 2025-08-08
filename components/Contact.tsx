import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Shield, Award } from "lucide-react";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you within 2 hours.");
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Florida Stucco Project?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with Garcia Professional Stucco today. We're here to answer your questions and provide personalized solutions for your Florida home.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-primary" />
                  Call Us Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-primary">(555) 123-4567</p>
                  <p className="text-gray-600">Available 24/7 for storm emergencies</p>
                  <p className="text-sm text-gray-500">Monday-Friday: 7:00 AM - 7:00 PM<br />Saturday: 8:00 AM - 5:00 PM</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-primary" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">info@garciaprofessionalstucco.com</p>
                  <p className="text-gray-600">We respond within 2 hours</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-3 h-5 w-5 text-primary" />
                  Service Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">South Central Florida</p>
                  <p className="text-gray-600">Okeechobee • Lake Placid • Sebring<br />Avon Park • Moore Haven • Brighton</p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-sm font-semibold">Licensed & Insured</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-sm font-semibold">BBB A+ Rating</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-sm font-semibold">Fast Response</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-primary text-white rounded-t-lg">
                <CardTitle className="text-2xl">Get Your Free Consultation</CardTitle>
                <p className="text-lg opacity-90">Fill out the form below and we'll contact you within 2 hours</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Property Address</Label>
                    <Input id="address" placeholder="Enter property address for accurate estimate" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <select id="projectType" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Select project type</option>
                      <option value="new-installation">New Stucco Installation</option>
                      <option value="repair">Stucco Repair</option>
                      <option value="restoration">Full Restoration</option>
                      <option value="painting">Stucco Painting</option>
                      <option value="emergency">Emergency Service</option>
                      <option value="consultation">Free Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Preferred Timeline</Label>
                    <select id="timeline" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Select timeline</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-2weeks">1-2 weeks</option>
                      <option value="1month">Within 1 month</option>
                      <option value="flexible">Flexible timing</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your project, including any specific requirements, concerns, or questions..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1 rounded border-gray-300" required />
                      <span className="text-sm text-gray-600">
                        I agree to receive communication from StuccoMaster Pro regarding my project. We respect your privacy and will never share your information.
                      </span>
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg py-4">
                    Send Message & Get Free Quote
                  </Button>

                  <div className="text-center text-sm text-gray-500">
                    <p>🔒 Your information is secure and will never be shared with third parties.</p>
                    <p>We typically respond within 2 hours during business hours.</p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}