import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Home, FileText, Phone } from "lucide-react";

interface QuoteData {
  projectType: string;
  surfaceArea: number;
  stuccoType: string;
  textureType: string;
  wallHeight: string;
  accessibility: string;
  includeRepairs: boolean;
  includePainting: boolean;
  timeline: string;
}

export function QuoteCalculator() {
  const [activeTab, setActiveTab] = useState("calculator");
  const [quoteData, setQuoteData] = useState<QuoteData>({
    projectType: "",
    surfaceArea: 0,
    stuccoType: "",
    textureType: "",
    wallHeight: "",
    accessibility: "",
    includeRepairs: false,
    includePainting: false,
    timeline: ""
  });

  const [calculatedQuote, setCalculatedQuote] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  const calculateQuote = () => {
    if (!quoteData.projectType || !quoteData.surfaceArea || !quoteData.stuccoType) {
      alert("Please fill in all required fields");
      return;
    }

    let basePrice = 0;
    
    // Base pricing per square foot by project type
    switch (quoteData.projectType) {
      case "new-installation":
        basePrice = 8.50;
        break;
      case "repair":
        basePrice = 12.00;
        break;
      case "restoration":
        basePrice = 15.00;
        break;
      case "painting":
        basePrice = 4.50;
        break;
      default:
        basePrice = 8.50;
    }

    // Stucco type multipliers
    const stuccoMultipliers = {
      "traditional": 1.0,
      "acrylic": 1.2,
      "synthetic": 1.4,
      "cement": 0.9
    };

    // Texture type multipliers
    const textureMultipliers = {
      "smooth": 1.0,
      "sand": 1.1,
      "dash": 1.2,
      "lace": 1.3,
      "spanish-lace": 1.4
    };

    // Height multipliers
    const heightMultipliers = {
      "single-story": 1.0,
      "two-story": 1.3,
      "three-story": 1.6
    };

    // Accessibility multipliers
    const accessibilityMultipliers = {
      "easy": 1.0,
      "moderate": 1.2,
      "difficult": 1.5
    };

    let finalPrice = basePrice * quoteData.surfaceArea;
    
    // Apply multipliers
    if (quoteData.stuccoType && stuccoMultipliers[quoteData.stuccoType as keyof typeof stuccoMultipliers]) {
      finalPrice *= stuccoMultipliers[quoteData.stuccoType as keyof typeof stuccoMultipliers];
    }
    
    if (quoteData.textureType && textureMultipliers[quoteData.textureType as keyof typeof textureMultipliers]) {
      finalPrice *= textureMultipliers[quoteData.textureType as keyof typeof textureMultipliers];
    }
    
    if (quoteData.wallHeight && heightMultipliers[quoteData.wallHeight as keyof typeof heightMultipliers]) {
      finalPrice *= heightMultipliers[quoteData.wallHeight as keyof typeof heightMultipliers];
    }
    
    if (quoteData.accessibility && accessibilityMultipliers[quoteData.accessibility as keyof typeof accessibilityMultipliers]) {
      finalPrice *= accessibilityMultipliers[quoteData.accessibility as keyof typeof accessibilityMultipliers];
    }

    // Add-ons
    if (quoteData.includeRepairs) {
      finalPrice += quoteData.surfaceArea * 3.50;
    }
    
    if (quoteData.includePainting) {
      finalPrice += quoteData.surfaceArea * 2.75;
    }

    // Timeline adjustments
    if (quoteData.timeline === "rush") {
      finalPrice *= 1.25;
    } else if (quoteData.timeline === "flexible") {
      finalPrice *= 0.95;
    }

    setCalculatedQuote(Math.round(finalPrice));
    setShowResults(true);
  };

  const resetCalculator = () => {
    setQuoteData({
      projectType: "",
      surfaceArea: 0,
      stuccoType: "",
      textureType: "",
      wallHeight: "",
      accessibility: "",
      includeRepairs: false,
      includePainting: false,
      timeline: ""
    });
    setCalculatedQuote(null);
    setShowResults(false);
  };

  return (
    <section id="calculator" className="py-20 bg-muted/50 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get Your Instant Stucco Quote
          </h2>
          <p className="text-xl text-muted-foreground">
            Use our advanced calculator to get an accurate estimate for your stucco project in seconds.
          </p>
        </div>

        <Card className="shadow-xl border-border">
          <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
            <CardTitle className="text-2xl flex items-center">
              <Calculator className="mr-3 h-6 w-6" />
              Professional Quote Calculator
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="calculator">Calculator</TabsTrigger>
                <TabsTrigger value="results" disabled={!showResults}>Results</TabsTrigger>
              </TabsList>

              <TabsContent value="calculator" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select value={quoteData.projectType} onValueChange={(value) => setQuoteData({...quoteData, projectType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new-installation">New Installation</SelectItem>
                        <SelectItem value="repair">Repair Work</SelectItem>
                        <SelectItem value="restoration">Full Restoration</SelectItem>
                        <SelectItem value="painting">Stucco Painting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="surfaceArea">Surface Area (sq ft) *</Label>
                    <Input
                      id="surfaceArea"
                      type="number"
                      placeholder="e.g., 1500"
                      value={quoteData.surfaceArea || ""}
                      onChange={(e) => setQuoteData({...quoteData, surfaceArea: Number(e.target.value)})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="stuccoType">Stucco Type *</Label>
                    <Select value={quoteData.stuccoType} onValueChange={(value) => setQuoteData({...quoteData, stuccoType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select stucco type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="traditional">Traditional Stucco</SelectItem>
                        <SelectItem value="acrylic">Acrylic Stucco</SelectItem>
                        <SelectItem value="synthetic">Synthetic Stucco (EIFS)</SelectItem>
                        <SelectItem value="cement">Cement Stucco</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="textureType">Texture Type</Label>
                    <Select value={quoteData.textureType} onValueChange={(value) => setQuoteData({...quoteData, textureType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select texture" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="smooth">Smooth</SelectItem>
                        <SelectItem value="sand">Sand Finish</SelectItem>
                        <SelectItem value="dash">Dash Finish</SelectItem>
                        <SelectItem value="lace">Lace Texture</SelectItem>
                        <SelectItem value="spanish-lace">Spanish Lace</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="wallHeight">Wall Height</Label>
                    <Select value={quoteData.wallHeight} onValueChange={(value) => setQuoteData({...quoteData, wallHeight: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select height" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single-story">Single Story (8-10ft)</SelectItem>
                        <SelectItem value="two-story">Two Story (16-20ft)</SelectItem>
                        <SelectItem value="three-story">Three Story (24-30ft)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="accessibility">Site Accessibility</Label>
                    <Select value={quoteData.accessibility} onValueChange={(value) => setQuoteData({...quoteData, accessibility: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select accessibility" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easy">Easy Access</SelectItem>
                        <SelectItem value="moderate">Moderate Access</SelectItem>
                        <SelectItem value="difficult">Difficult Access</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-foreground">Additional Services</h4>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={quoteData.includeRepairs}
                        onChange={(e) => setQuoteData({...quoteData, includeRepairs: e.target.checked})}
                        className="rounded border-border"
                      />
                      <span className="text-foreground">Include surface repairs (+$3.50/sq ft)</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={quoteData.includePainting}
                        onChange={(e) => setQuoteData({...quoteData, includePainting: e.target.checked})}
                        className="rounded border-border"
                      />
                      <span className="text-foreground">Include painting (+$2.75/sq ft)</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <Select value={quoteData.timeline} onValueChange={(value) => setQuoteData({...quoteData, timeline: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flexible">Flexible (5% discount)</SelectItem>
                      <SelectItem value="standard">Standard Timeline</SelectItem>
                      <SelectItem value="rush">Rush Job (+25%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-4 pt-6">
                  <Button onClick={calculateQuote} className="flex-1" size="lg">
                    Calculate Quote
                  </Button>
                  <Button variant="outline" onClick={resetCalculator} size="lg">
                    Reset
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="results" className="space-y-6">
                {showResults && calculatedQuote && (
                  <div className="text-center space-y-6">
                    <div className="bg-primary text-primary-foreground rounded-xl p-8">
                      <h3 className="text-2xl font-bold mb-2">Your Estimated Quote</h3>
                      <div className="text-5xl font-bold">${calculatedQuote.toLocaleString()}</div>
                      <p className="text-lg mt-2 opacity-90">
                        For {quoteData.surfaceArea} sq ft of {quoteData.projectType.replace('-', ' ')}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-muted rounded-lg">
                        <Home className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <div className="font-semibold text-foreground">Professional Grade</div>
                        <div className="text-sm text-muted-foreground">Premium materials included</div>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <FileText className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <div className="font-semibold text-foreground">15-Year Warranty</div>
                        <div className="text-sm text-muted-foreground">Full coverage included</div>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <Phone className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <div className="font-semibold text-foreground">Free Consultation</div>
                        <div className="text-sm text-muted-foreground">On-site assessment</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        This estimate includes materials, labor, and our standard warranty. 
                        Final pricing may vary based on site conditions and specific requirements.
                      </p>
                      
                      <div className="flex gap-4">
                        <Button size="lg" className="flex-1">
                          Schedule Consultation
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => setActiveTab("calculator")}>
                          Modify Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}