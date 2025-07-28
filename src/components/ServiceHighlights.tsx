import { Link } from 'react-router-dom';
import { Users, Calendar, Utensils, Building } from 'lucide-react';

const ServiceHighlights = () => {
  const services = [
    {
      icon: Building,
      title: "Corporate Catering",
      description: "Professional catering solutions for business meetings, conferences, and corporate events with sophisticated menu options.",
      features: ["Meeting packages", "Conference lunch", "Office parties", "Product launches"],
      image: "corporate"
    },
    {
      icon: Calendar,
      title: "Wedding Catering",
      description: "Make your special day unforgettable with our exquisite wedding feast that blends tradition with contemporary elegance.",
      features: ["Multi-course dinners", "Traditional ceremonies", "Reception buffets", "Brunch celebrations"],
      image: "wedding"
    },
    {
      icon: Users,
      title: "Social Events",
      description: "Perfect catering for birthdays, anniversaries, family gatherings, and social celebrations of all sizes.",
      features: ["Birthday parties", "Anniversary dinners", "Family reunions", "Holiday celebrations"],
      image: "social"
    },
    {
      icon: Utensils,
      title: "Custom Menus",
      description: "Tailored culinary experiences designed to meet your specific dietary preferences and event requirements.",
      features: ["Dietary accommodations", "Themed menus", "Seasonal specialties", "Cultural cuisines"],
      image: "custom"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Flexible Catering Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we deliver exceptional culinary experiences 
            tailored to your unique event needs and preferences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="card-premium p-8 group hover:scale-105 transition-all duration-300">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to="/services"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-300"
                >
                  Learn More
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link to="/services" className="btn-primary text-lg px-10 py-4">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;