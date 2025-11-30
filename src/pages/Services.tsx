import { Building, GraduationCap, Heart, CheckCircle, Star, ArrowRight, Users, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Corporate Services",
      description: "Professional catering solutions for businesses, offices, and corporate events. From daily cafe management to executive meetings.",
      features: [
        "Office cafe management",
        "Executive lunch meetings",
        "Conference catering",
        "Team building events"
      ],
      link: "/services/corporate",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      icon: GraduationCap,
      title: "Universities",
      description: "Comprehensive dining solutions for educational institutions, student meal plans, and campus events.",
      features: [
        "Student meal plans",
        "Campus cafe management",
        "Faculty dining services",
        "Graduation ceremonies"
      ],
      link: "/services/universities",
      gradient: "from-green-500 to-green-700"
    },
    {
      icon: Heart,
      title: "Live Events",
      description: "Make your special occasions unforgettable with our wedding catering, private celebrations, and milestone events.",
      features: [
        "Wedding ceremonies",
        "Private celebrations",
        "Anniversary dinners",
        "Cultural events"
      ],
      link: "/services/live-events",
      gradient: "from-rose-500 to-rose-700"
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
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Service Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized catering solutions designed for different environments and occasions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.gradient} text-white group hover:scale-105 transition-all duration-300 shadow-xl`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative p-8 h-full flex flex-col">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="font-playfair text-2xl font-bold mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-white/90 mb-6 flex-grow">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-white/80 flex-shrink-0" />
                          <span className="text-sm text-white/90">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to={service.link}
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 group-hover:shadow-lg"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
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
            <Link 
              to="/contact"
              className="px-10 py-4 bg-white text-foreground hover:bg-background rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-center"
            >
              Request a Quote
            </Link>
            <Link 
              to="/contact"
              className="px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-foreground rounded-lg font-medium transition-all duration-300 text-center"
            >
              Request Custom Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
