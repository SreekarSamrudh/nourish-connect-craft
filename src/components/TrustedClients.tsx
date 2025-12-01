import { Users, Award, Heart, Leaf } from 'lucide-react';

// IMPORTING CLIENT LOGOS from src/assets
import HPLogo from "../assets/hp.png"; 
import LGLogo from "../assets/lg.png";
import SchneiderLogo from "../assets/schneider.png";
import DocuSignLogo from "../assets/docusign.png";
import ZSLogo from "../assets/zs.png";
import DevRevLogo from "../assets/devrev.png";

const TrustedClients = () => {
  const clients = [
    { name: "HP", logo: HPLogo },
    { name: "LG", logo: LGLogo },
    { name: "Schneider Electric", logo: SchneiderLogo },
    { name: "DocuSign", logo: DocuSignLogo },
    { name: "ZS", logo: ZSLogo },
    { name: "DevRev", logo: DevRevLogo },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted By Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are proud to serve some of the most respected organizations across industries
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="w-full h-24 flex items-center justify-center p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                // UPDATED CLASS: Removed opacity-70 to match the About page style
                className="max-h-12 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Trust Indicators (Verified Stats) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">60+</div>
            <div className="text-muted-foreground">Events Catered</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Signature Dishes</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">99%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
