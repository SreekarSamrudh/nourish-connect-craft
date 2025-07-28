import { Building, Calendar, Users, Utensils, CheckCircle, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Corporate Catering",
      description: "Professional catering solutions for business meetings, conferences, and corporate events with sophisticated menu options.",
      features: [
        "Executive lunch meetings",
        "Conference catering packages", 
        "Office party celebrations",
        "Product launch events",
        "Board meeting refreshments",
        "Team building events"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      icon: Calendar,
      title: "Wedding Catering",
      description: "Make your special day unforgettable with our exquisite wedding feast that blends tradition with contemporary elegance.",
      features: [
        "Multi-course wedding dinners",
        "Traditional ceremony catering",
        "Reception buffet services",
        "Brunch celebrations",
        "Rehearsal dinner packages",
        "Custom dietary accommodations"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      icon: Users,
      title: "Social Events",
      description: "Perfect catering for birthdays, anniversaries, family gatherings, and social celebrations of all sizes.",
      features: [
        "Birthday party catering",
        "Anniversary celebrations",
        "Family reunion meals",
        "Holiday party services",
        "Graduation celebrations",
        "Community events"
      ],
      image: "/api/placeholder/600/400"
    },
    {
      icon: Utensils,
      title: "Custom Menus",
      description: "Tailored culinary experiences designed to meet your specific dietary preferences and event requirements.",
      features: [
        "Dietary restriction accommodations",
        "Themed menu development",
        "Seasonal specialty dishes",
        "Cultural cuisine options",
        "Fusion menu creation",
        "Chef consultation services"
      ],
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Our Catering Services
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Flexible catering solutions for every event, delivering exceptional culinary experiences 
            tailored to your unique needs and preferences.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="card-premium p-8 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-12">
            Why Partner With Us?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Fresh Ingredients</h3>
              <p className="text-muted-foreground">We source only the finest, freshest ingredients to ensure exceptional quality in every dish.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Professional Service</h3>
              <p className="text-muted-foreground">Our experienced team provides flawless service, ensuring your event runs smoothly from start to finish.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Custom Solutions</h3>
              <p className="text-muted-foreground">We work closely with you to create personalized menus that perfectly match your event's theme and requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container-custom text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready to Plan Your Perfect Event?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Let our culinary experts create an unforgettable dining experience for your next celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-white text-foreground hover:bg-background rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              Request a Quote
            </button>
            <button className="px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-foreground rounded-lg font-medium transition-all duration-300">
              View Our Menus
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;