import { Users, Award, Heart, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Excellence",
      description: "Every dish we create is crafted with love, attention to detail, and an unwavering commitment to culinary excellence."
    },
    {
      icon: Leaf,
      title: "Fresh & Local",
      description: "We source the finest, freshest ingredients from local farmers and suppliers, supporting our community while ensuring quality."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We work closely with each client to create personalized experiences that exceed expectations."
    },
    {
      icon: Award,
      title: "Professional Service",
      description: "Our experienced team brings professionalism and expertise to every event, ensuring flawless execution from start to finish."
    }
  ];

  const stats = [
    { number: "60+", label: "Events Catered" },
    { number: "3+", label: "Years Experience" },
    { number: "50+", label: "Signature Dishes" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            About Nourish India
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            A Symphony of Flavours - Where culinary excellence meets exceptional service
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg">
                  Founded with a passion for creating exceptional culinary experiences, Nourish India 
                  has been serving clients across the region for over 15 years. What started as a 
                  small family business has grown into one of the most trusted names in premium catering.
                </p>
                <p className="text-lg">
                  We believe that food is more than just sustenance – it's a way to bring people together, 
                  create memories, and celebrate life's most important moments. Our commitment to using 
                  fresh, locally-sourced ingredients and traditional cooking techniques ensures that every 
                  dish tells a story of flavor and authenticity.
                </p>
                <p className="text-lg">
                  From intimate family gatherings to large corporate events, we've had the privilege 
                  of being part of countless celebrations, always striving to exceed expectations and 
                  create unforgettable dining experiences.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/api/placeholder/600/500" 
                alt="Our kitchen and team"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do, from ingredient selection to service delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-xl opacity-90">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold font-playfair mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our passionate team of culinary experts and service professionals work together 
            to create exceptional experiences for every event.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-premium p-6 text-center">
              <img 
                src="/api/placeholder/200/200" 
                alt="Chef Portrait"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-playfair text-xl font-semibold mb-2">Chef Rajesh Kumar</h3>
              <p className="text-primary font-medium mb-2">Executive Chef</p>
              <p className="text-muted-foreground text-sm">
                20+ years of culinary expertise specializing in traditional and contemporary Indian cuisine.
              </p>
            </div>
            
            <div className="card-premium p-6 text-center">
              <img 
                src="/api/placeholder/200/200" 
                alt="Manager Portrait"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-playfair text-xl font-semibold mb-2">Priya Sharma</h3>
              <p className="text-primary font-medium mb-2">Operations Manager</p>
              <p className="text-muted-foreground text-sm">
                Ensures seamless event coordination and exceptional client service for every occasion.
              </p>
            </div>
            
            <div className="card-premium p-6 text-center">
              <img 
                src="/api/placeholder/200/200" 
                alt="Sous Chef Portrait"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-playfair text-xl font-semibold mb-2">Chef Meera Patel</h3>
              <p className="text-primary font-medium mb-2">Sous Chef</p>
              <p className="text-muted-foreground text-sm">
                Specializes in vegan and health-conscious menu development with creative flair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let us bring our passion for culinary excellence to your next event. 
            Contact us today to start planning your perfect celebration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="btn-primary text-lg px-10 py-4 text-center"
            >
              Get In Touch
            </Link>
            <Link 
              to="/services"
              className="px-10 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg font-medium transition-all duration-300 text-center"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
