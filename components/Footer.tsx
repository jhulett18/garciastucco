import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Garcia Professional Stucco</h3>
            <p className="text-muted-foreground">
              Professional stucco services serving Okeechobee and South Florida with 25+ years of experience. Licensed, insured, and committed to quality craftsmanship built for Florida&apos;s climate.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Our Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-foreground cursor-pointer transition-colors">New Stucco Installation</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Stucco Repair & Restoration</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Stucco Painting & Finishing</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Emergency Stucco Services</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Commercial Projects</li>
              <li className="hover:text-foreground cursor-pointer transition-colors">Insurance Claims</li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Service Areas</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Okeechobee, FL</li>
              <li>Lake Placid, FL</li>
              <li>Sebring, FL</li>
              <li>Avon Park, FL</li>
              <li>Moore Haven, FL</li>
              <li>Brighton, FL</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              + All of South Central Florida
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold text-foreground">(555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">24/7 Emergency Line</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-foreground">info@garciaprofessionalstucco.com</p>
                  <p className="text-sm text-muted-foreground">Response within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-foreground">Okeechobee, Florida</p>
                  <p className="text-sm text-muted-foreground">Licensed & Insured</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-muted-foreground text-sm">
              <p>&copy; {currentYear} Garcia Professional Stucco. All rights reserved.</p>
              <p>Licensed, Bonded & Insured in Florida • License #FL-123456</p>
            </div>
            
            <div className="text-right text-muted-foreground text-sm">
              <div className="space-x-4">
                <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-foreground transition-colors">Warranty Info</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}