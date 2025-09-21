import { Building, CheckCircle, Calendar, Users, Trophy, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const CorporateServices = () => {
  const features = [
    "Executive lunch meetings",
    "Conference catering packages", 
    "Office party celebrations",
    "Product launch events",
    "Board meeting refreshments",
    "Team building events",
    "Daily cafe management",
    "Employee wellness programs"
  ];

  const solutions = [
    {
      icon: Building,
      title: "Office Cafe Management",
      description: "Complete cafeteria management with fresh, healthy options for your employees",
      details: ["Daily meal service", "Healthy menu options", "Dietary accommodations", "Cost-effective solutions"]
    },
    {
      icon: Calendar,
      title: "Corporate Events",
      description: "Professional catering for meetings, conferences, and special corporate occasions",
      details: ["Meeting packages", "Conference lunch", "Product launches", "Board meetings"]
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Catering services for team building events and employee celebrations",
      details: ["Team lunch events", "Office parties", "Achievement celebrations", "Holiday events"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <Building className="h-16 w-16 mx-auto mb-6 text-white" />
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              Corporate Catering Solutions
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Professional catering services designed to enhance productivity and employee satisfaction 
              with fresh, delicious meals and seamless service.
            </p>
            <Link 
              to="/contact"
              className="btn-primary text-lg px-10 py-4 bg-white text-foreground hover:bg-background"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive catering solutions tailored to meet all your corporate dining needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card-premium p-6 text-center hover:scale-105 transition-all duration-300">
                <CheckCircle className="h-8 w-8 text-secondary mx-auto mb-4" />
                <p className="text-muted-foreground font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            Our Corporate Solutions
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="card-premium p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center justify-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Our Corporate Services?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Trophy className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Professional Excellence</h3>
                    <p className="text-muted-foreground">Years of experience serving corporate clients with exceptional service standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Target className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Customized Solutions</h3>
                    <p className="text-muted-foreground">Tailored menus and services designed to fit your company culture and budget.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Employee Satisfaction</h3>
                    <p className="text-muted-foreground">Boost workplace morale with delicious, healthy meal options that employees love.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-premium p-8">
              <h3 className="font-playfair text-2xl font-semibold mb-6 text-center">Ready to Enhance Your Workplace?</h3>
              <p className="text-muted-foreground text-center mb-8">
                Let's discuss how our corporate catering services can benefit your organization.
              </p>
              <div className="text-center">
                <Link 
                  to="/contact"
                  className="btn-primary text-lg px-8 py-3"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateServices;