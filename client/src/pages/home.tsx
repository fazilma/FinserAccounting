import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Menu,
  X,
  Building,
  Calendar,
  MapPin,
  Award,
  FileText,
  File,
  Calculator,
  Laptop,
  Phone,
  Mail,
  Clock,
  Check,
  Users,
  Target,
  Globe,
  MessageCircle,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message with form data
    const message = encodeURIComponent(`Hello Finser Associates! 

I'm interested in your accounting services.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service || "General Inquiry"}

Message: ${formData.message}`);

    // WhatsApp number: +971509598825
    window.open(`https://wa.me/971509598825?text=${message}`, "_blank");

    // Clear form
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              {/* Logo */}
              <img
                src="/finser-logo.png"
                alt="Finser Associates Logo"
                className="h-12 w-auto md:h-16 lg:h-20 rounded-lg"
              />
              <div className="ml-3">
                <h1 className="text-xl md:text-2xl font-bold text-grey-dark">
                  Finser Associates
                </h1>
                <p className="text-sm text-grey-medium">FZE LLC</p>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-grey-medium hover:text-primary"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-grey-medium hover:text-primary transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#sectors"
                className="text-grey-medium hover:text-primary transition-colors font-medium"
              >
                Sectors
              </a>
              <a
                href="#plans"
                className="text-grey-medium hover:text-primary transition-colors font-medium"
              >
                Plans
              </a>
              <a
                href="#about"
                className="text-grey-medium hover:text-primary transition-colors font-medium"
              >
                About
              </a>
              <Button
                asChild
                className="bg-primary text-white hover:bg-purple-700 rounded-lg"
              >
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-50">
              <div className="px-4 py-6 space-y-4">
                <a
                  href="#services"
                  className="block text-grey-medium hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#sectors"
                  className="block text-grey-medium hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sectors
                </a>
                <a
                  href="#plans"
                  className="block text-grey-medium hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Plans
                </a>
                <a
                  href="#about"
                  className="block text-grey-medium hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <Button
                  asChild
                  className="w-full bg-primary text-white hover:bg-purple-700 rounded-lg"
                >
                  <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                    Contact Us
                  </a>
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-grey-light to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Large logo display for mobile emphasis */}
              <div className="flex items-center mb-8 lg:hidden">
                <img
                  src="/finser-logo.png"
                  alt="Finser Associates Logo"
                  className="h-20 w-auto rounded-xl"
                />
                <div className="ml-4">
                  <h1 className="text-3xl font-bold text-grey-dark">
                    Finser Associates
                  </h1>
                  <p className="text-lg text-grey-medium">FZE LLC</p>
                </div>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-grey-dark mb-6 leading-tight">
                Professional{" "}
                <span className="text-primary">Accounting & Bookkeeping</span>{" "}
                Solutions
              </h2>
              <p className="text-xl text-grey-medium mb-8 leading-relaxed">
                Reliable and efficient bookkeeping and accounting solutions for
                businesses across the UAE. Specializing in SMEs with services
                tailored to meet compliance requirements and enhance operational
                efficiency through digitalization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-primary text-white hover:bg-purple-700 rounded-xl px-8 py-4 text-lg"
                >
                  <a href="#contact">Get Started Today</a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-2 border-primary text-primary hover:bg-primary-light rounded-xl px-8 py-4 text-lg"
                >
                  <a href="#services">View Services</a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Professional accounting office with calculator and documents"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-light rounded-2xl p-6 mb-4">
                <Building className="h-8 w-8 text-primary mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-grey-dark">150+</h3>
              <p className="text-grey-medium">Clients Served</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-light rounded-2xl p-6 mb-4">
                <Calendar className="h-8 w-8 text-primary mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-grey-dark">5+</h3>
              <p className="text-grey-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-light rounded-2xl p-6 mb-4">
                <MapPin className="h-8 w-8 text-primary mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-grey-dark">7</h3>
              <p className="text-grey-medium">UAE Emirates</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-light rounded-2xl p-6 mb-4">
                <Award className="h-8 w-8 text-primary mx-auto" />
              </div>
              <h3 className="text-3xl font-bold text-grey-dark">100%</h3>
              <p className="text-grey-medium">Compliance Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-grey-dark mb-4">
              Our Services
            </h2>
            <p className="text-xl text-grey-medium max-w-3xl mx-auto">
              Comprehensive accounting and bookkeeping solutions tailored to
              meet your business compliance requirements and operational
              efficiency goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-primary-light rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-grey-dark mb-4">
                  VAT Registration
                </h3>
                <p className="text-grey-medium">
                  Complete VAT registration services to ensure your business
                  complies with UAE tax regulations from day one.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-primary-light rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <File className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-grey-dark mb-4">
                  VAT Filing
                </h3>
                <p className="text-grey-medium">
                  Accurate and timely VAT return filing services to keep your
                  business compliant with all deadlines.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-primary-light rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-grey-dark mb-4">
                  Corporate Tax Registration & Filing
                </h3>
                <p className="text-grey-medium">
                  Expert handling of corporate tax registration and filing
                  requirements for UAE businesses.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-primary-light rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <Laptop className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-grey-dark mb-4">
                  Accounting Software Implementation
                </h3>
                <p className="text-grey-medium">
                  Seamless integration of modern accounting software to
                  digitalize and streamline your financial processes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
              <CardContent className="p-8">
                <div className="bg-primary-light rounded-xl p-4 w-16 h-16 flex items-center justify-center mb-6">
                  <Calculator className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-grey-dark mb-4">
                  General Accounting & Bookkeeping
                </h3>
                <p className="text-grey-medium">
                  Complete accounting and bookkeeping services to maintain
                  accurate financial records and support business decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section id="sectors" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-grey-dark mb-4">
              Sectors We Serve
            </h2>
            <p className="text-xl text-grey-medium max-w-3xl mx-auto">
              Specialized expertise across diverse industries, from restaurants
              to retail, ensuring tailored solutions for your business sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group cursor-pointer">
              <CardContent className="bg-grey-light rounded-2xl p-8 group-hover:bg-primary-light transition-colors">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                  alt="Modern restaurant interior with professional dining setup"
                  className="rounded-xl w-full h-48 object-cover mb-6"
                />
                <h3 className="text-xl font-semibold text-grey-dark mb-4">
                  Restaurants & Cafes
                </h3>
                <p className="text-grey-medium">
                  Specialized accounting for food service businesses, including
                  inventory management and compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer">
              <CardContent className="bg-grey-light rounded-2xl p-8 group-hover:bg-primary-light transition-colors">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                  alt="Supermarket product racks with organized shelving systems"
                  className="rounded-xl w-full h-48 object-cover mb-6"
                />
                <h3 className="text-xl font-semibold text-grey-dark mb-4">
                  Supermarkets & Hypermarkets
                </h3>
                <p className="text-grey-medium">
                  Complex retail accounting solutions for large-scale retail
                  operations and inventory management.
                </p>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer">
              <CardContent className="bg-grey-light rounded-2xl p-8 group-hover:bg-primary-light transition-colors">
                <img
                  src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                  alt="Clean modern office workspace with laptop and professional setup"
                  className="rounded-xl w-full h-48 object-cover mb-6"
                />
                <h3 className="text-xl font-semibold text-grey-dark mb-4">
                  Freelancers & Consultants
                </h3>
                <p className="text-grey-medium">
                  Simplified accounting solutions for independent professionals
                  and consulting businesses.
                </p>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer">
              <CardContent className="bg-grey-light rounded-2xl p-8 group-hover:bg-primary-light transition-colors">
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                  alt="Fresh grocery store produce section with organized fruits and vegetables"
                  className="rounded-xl w-full h-48 object-cover mb-6"
                />
                <h3 className="text-xl font-semibold text-grey-dark mb-4">
                  Grocery Stores
                </h3>
                <p className="text-grey-medium">
                  Tailored accounting for grocery operations with focus on
                  perishable inventory and daily transactions.
                </p>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer">
              <CardContent className="bg-grey-light rounded-2xl p-8 group-hover:bg-primary-light transition-colors">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                  alt="Professional business meeting with team members discussing strategy"
                  className="rounded-xl w-full h-48 object-cover mb-6"
                />
                <h3 className="text-xl font-semibold text-grey-dark mb-4">
                  Service-based Businesses
                </h3>
                <p className="text-grey-medium">
                  Comprehensive accounting for service providers, focusing on
                  time tracking and project-based billing.
                </p>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer">
              <CardContent className="bg-grey-light rounded-2xl p-8 group-hover:bg-primary-light transition-colors">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                  alt="Contemporary retail store interior with clothing displays and modern fixtures"
                  className="rounded-xl w-full h-48 object-cover mb-6"
                />
                <h3 className="text-xl font-semibold text-grey-dark mb-4">
                  Retail Outlets
                </h3>
                <p className="text-grey-medium">
                  Retail-focused accounting solutions including point-of-sale
                  integration and sales analysis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Plans */}
      <section id="plans" className="py-16 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-grey-dark mb-4">
              Our Service Plans
            </h2>
            <p className="text-xl text-grey-medium max-w-3xl mx-auto">
              Flexible pricing plans designed to meet the unique needs of
              businesses at every stage of growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-grey-dark mb-4">
                    Starter Package
                  </h3>
                  <div className="mb-4">
                    <span className="text-lg text-grey-medium line-through">
                      AED 150
                    </span>
                    <span className="text-4xl font-bold text-primary ml-2">
                      AED 100
                    </span>
                    <span className="text-grey-medium">/month</span>
                  </div>
                  <div className="bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm font-medium">
                    Limited Time Offer
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3" />
                    <span className="text-grey-medium">
                      Basic bookkeeping services
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3" />
                    <span className="text-grey-medium">
                      Monthly financial statements
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3" />
                    <span className="text-grey-medium">VAT filing support</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3" />
                    <span className="text-grey-medium">Email support</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3" />
                    <span className="text-grey-medium">
                      Software setup assistance
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-yellow-400 text-grey-dark px-6 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              </div>

              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Enterprise Package
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">Custom</span>
                    <span className="text-purple-200 ml-2">Pricing</span>
                  </div>
                  <div className="bg-purple-800 px-4 py-2 rounded-lg text-sm font-medium">
                    Tailored to Your Needs
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-yellow-400 mr-3" />
                    <span className="text-purple-100">
                      All Starter features included
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-yellow-400 mr-3" />
                    <span className="text-purple-100">
                      Dedicated account manager
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-yellow-400 mr-3" />
                    <span className="text-purple-100">
                      Priority support (24/7)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-yellow-400 mr-3" />
                    <span className="text-purple-100">
                      Custom reporting solutions
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-yellow-400 mr-3" />
                    <span className="text-purple-100">
                      Multi-location support
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-yellow-400 mr-3" />
                    <span className="text-purple-100">
                      Advanced analytics & insights
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-grey-dark mb-6">
                About Finser Associates
              </h2>
              <p className="text-lg text-grey-medium mb-6 leading-relaxed">
                Finser Associates FZE LLC is a service-oriented firm established
                to provide reliable and efficient bookkeeping and accounting
                solutions to businesses across the UAE. We specialize in
                supporting small and medium-sized enterprises (SMEs) with
                services tailored to meet compliance requirements.
              </p>
              <p className="text-lg text-grey-medium mb-8 leading-relaxed">
                Operating across all seven UAE emirates, we enhance operational
                efficiency through digitalization, helping businesses streamline
                their financial processes and maintain accurate records for
                informed decision-making.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-grey-light rounded-xl text-center">
                  <CardContent className="p-6">
                    <Globe className="h-8 w-8 text-primary mb-3 mx-auto" />
                    <h4 className="font-semibold text-grey-dark mb-2">
                      UAE Coverage
                    </h4>
                    <p className="text-sm text-grey-medium">All 7 Emirates</p>
                  </CardContent>
                </Card>
                <Card className="bg-grey-light rounded-xl text-center">
                  <CardContent className="p-6">
                    <Target className="h-8 w-8 text-primary mb-3 mx-auto" />
                    <h4 className="font-semibold text-grey-dark mb-2">
                      Expertise
                    </h4>
                    <p className="text-sm text-grey-medium">SME Specialists</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Professional accounting team collaborating on financial documents in modern office"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-grey-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-grey-dark mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-grey-medium max-w-3xl mx-auto">
              Ready to streamline your accounting processes? Contact our expert
              team for a consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-light rounded-xl p-3 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-grey-dark mb-2">
                    Our Office
                  </h3>
                  <p className="text-grey-medium">
                    26th Floor, Amber Gem Tower
                    <br />
                    Ajman, UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-light rounded-xl p-3 flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-grey-dark mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+971509598825"
                    className="text-grey-medium hover:text-primary transition-colors"
                  >
                    +971 50 959 8825
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-light rounded-xl p-3 flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-grey-dark mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:finserbooks@gmail.com"
                    className="text-grey-medium hover:text-primary transition-colors"
                  >
                    finserbooks@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-light rounded-xl p-3 flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-grey-dark mb-2">
                    Business Hours
                  </h3>
                  <p className="text-grey-medium">
                    Sunday - Thursday: 9:00 AM - 6:00 PM
                    <br />
                    Friday - Saturday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label
                      htmlFor="name"
                      className="block text-sm font-medium text-grey-dark mb-2"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="Your full name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="block text-sm font-medium text-grey-dark mb-2"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="phone"
                      className="block text-sm font-medium text-grey-dark mb-2"
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      required
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="+971 XX XXX XXXX"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="service"
                      className="block text-sm font-medium text-grey-dark mb-2"
                    >
                      Service Interested In
                    </Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        handleInputChange("service", value)
                      }
                    >
                      <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vat-registration">
                          VAT Registration
                        </SelectItem>
                        <SelectItem value="vat-filing">VAT Filing</SelectItem>
                        <SelectItem value="corporate-tax">
                          Corporate Tax Registration & Filing
                        </SelectItem>
                        <SelectItem value="software-implementation">
                          Accounting Software Implementation
                        </SelectItem>
                        <SelectItem value="general-accounting">
                          General Accounting & Bookkeeping
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label
                      htmlFor="message"
                      className="block text-sm font-medium text-grey-dark mb-2"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      rows={4}
                      placeholder="Tell us about your business and requirements..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] rounded-xl px-8 py-4 text-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    Send WhatsApp Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-grey-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <img
                  src="/finser-logo.png"
                  alt="Finser Associates Logo"
                  className="h-12 w-auto rounded-lg"
                />
                <div className="ml-3">
                  <h3 className="text-xl font-bold">Finser Associates</h3>
                  <p className="text-gray-400">FZE LLC</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Professional accounting and bookkeeping solutions for businesses
                across the UAE. Specializing in SMEs with services tailored to
                meet compliance requirements and enhance operational efficiency.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <div className="space-y-3">
                <a
                  href="#services"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Our Services
                </a>
                <a
                  href="#sectors"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Sectors We Serve
                </a>
                <a
                  href="#plans"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Service Plans
                </a>
                <a
                  href="#about"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#contact"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-start">
                  <MapPin className="h-4 w-4 mr-3 mt-1 flex-shrink-0" />
                  <span>
                    26th Floor, Amber Gem Tower
                    <br />
                    Ajman, UAE
                  </span>
                </p>
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                  <a
                    href="tel:+971509598825"
                    className="hover:text-white transition-colors"
                  >
                    +971 50 959 8825
                  </a>
                </p>
                <p className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                  <a
                    href="mailto:finserbooks@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    finserbooks@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2024 Finser Associates FZE LLC. All rights reserved. |
              Operating across all UAE Emirates
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
