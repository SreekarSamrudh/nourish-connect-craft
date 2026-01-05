import { Users, Award, Heart, Leaf, CheckCircle, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import OurTeam from "../assets/ourteam.jpg";
import Director from "../assets/director.jpg";

// IMPORTING CLIENT LOGOS
import HPLogo from "../assets/hp.png"; 
import LGLogo from "../assets/lg.png";
import SchneiderLogo from "../assets/schneider.png";
import DocuSignLogo from "../assets/docusign.png";
import ZSLogo from "../assets/zs.png";
import DevRevLogo from "../assets/devrev.png";

// NEW IMAGE IMPORT
// Please rename your uploaded WhatsApp image to 'partners.jpg' and put it in assets
import PartnersImage from "../assets/partners.png"; 

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
    { number: "25+", label: "Years Experience" },
    { number: "50+", label: "Signature Dishes" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  const clients = [
    { name: "HP", logo: HPLogo },
    { name: "LG", logo: LGLogo },
    { name: "Schneider Electric", logo: SchneiderLogo },
    { name: "DocuSign", logo: DocuSignLogo },
    { name: "ZS", logo: ZSLogo },
    { name: "DevRev", logo: DevRevLogo },
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
                  At Nourish India, we help corporates and MNCs seamlessly manage their daily employee meals, 
                  meetings, and event catering requirements through a single, accountable platform. In addition 
                  to aggregating trusted, FSSAI-certified partner kitchens and premium caterers, we also operate 
                  our own in-house kitchen, enabling us to ensure superior quality, hygiene, customization, and cost efficiency.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={OurTeam}
                alt="Our kitchen and team"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: What Sets Us Apart */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A full-service corporate food solutions company operating as both a food aggregator and an owner 
              of our own professionally managed kitchen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dual Model Advantage",
                desc: "Our own kitchen for quality control and flexibility, combined with a strong aggregator network for scalability."
              },
              {
                title: "End-to-End Management",
                desc: "Complete food management including menu planning, vendor coordination, ordering, delivery, and feedback management."
              },
              {
                title: "Strict Hygiene Standards",
                desc: "FSSAI compliance, standardized processes, and regular quality audits ensuring top-tier safety."
              },
              {
                title: "Customizable Menus",
                desc: "Tailored options to suit diverse tastes, dietary needs, and corporate budgets."
              },
              {
                title: "Bulk & Recurring Expertise",
                desc: "Ideal for daily meal programs, team meetings, leadership events, and large-scale corporate gatherings."
              },
              {
                title: "Pan-India Capability",
                desc: "Reliable support and operational capability across multiple locations nationwide."
              }
            ].map((item, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
                <CheckCircle className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-playfair text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: In-House Kitchen Facility */}
      <section className="section-padding bg-gradient-to-b from-background to-card">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
               {/* You can add a specific kitchen image here if available, using a placeholder for now or reuse existing */}
               <div className="bg-primary/5 p-8 rounded-2xl border-2 border-primary/20">
                  <ChefHat className="h-16 w-16 text-primary mb-6" />
                  <h3 className="font-playfair text-2xl font-bold mb-4">Quality Control Center</h3>
                  <p className="text-muted-foreground mb-4">
                    Having our own kitchen enables us to deliver reliable, high-quality catering services for events of all sizes, ensuring that every meal served meets our rigorous standards.
                  </p>
               </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our In-House Kitchen Facility
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We operate from our own fully equipped, in-house kitchen, allowing us complete control over quality, hygiene, and consistency. This dual capability allows us to offer unmatched reliability in corporate food services.
              </p>
              <ul className="space-y-4">
                {[
                  "Strict food safety and hygiene standards",
                  "Fresh preparation for every event",
                  "Consistent taste and presentation across all services",
                  "Flexibility to customize menus for different occasions"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-foreground text-lg">{item}</span>
                  </li>
                ))}
              </ul>
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

      {/* Trusted By Industry Leaders */}
      <section className="section-padding bg-white">
        <div className="container-custom">
            <div className="text-center mb-12">
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Trusted By Industry Leaders
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    We are proud to serve some of the world's most innovative companies.
                </p>
            </div>
            
            {/* Logo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-16">
                {clients.map((client, index) => (
                    <div key={index} className="w-full h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 p-4">
                        <img 
                            src={client.logo} 
                            alt={`${client.name} logo`} 
                            className="max-h-16 w-auto object-contain"
                        />
                    </div>
                ))}
            </div>

            {/* NEW: Partners Image */}
            <div className="mt-16 text-center border-t border-gray-100 pt-16">
                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-8">
                    Our Partners
                </h3>
                <div className="flex justify-center">
                    <img 
                        src={PartnersImage} 
                        alt="Our Partners - KFC, Domino's, Taco Bell and others" 
                        className="rounded-lg shadow-md max-w-full md:max-w-4xl hover:scale-[1.01] transition-transform duration-300"
                    />
                </div>
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
            Our passionate leadership inspires excellence and ensures exceptional experiences for every event.
          </p>
            
          <div className="flex justify-center">
            <div className="card-premium p-6 text-center max-w-sm">
              <img 
                src={Director} 
                alt="Director"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-playfair text-xl font-semibold mb-2">J Rekha</h3>
              <p className="text-primary font-medium mb-2">Director</p>
              <p className="text-muted-foreground text-sm">
                Leading with vision and dedication to deliver unmatched culinary and service excellence.
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
