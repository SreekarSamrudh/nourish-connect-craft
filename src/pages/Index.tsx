import HeroCarousel from '@/components/HeroCarousel';
import ServiceHighlights from '@/components/ServiceHighlights';
import CulinaryExcellence from '@/components/CulinaryExcellence';
import TrustedClients from '@/components/TrustedClients';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroCarousel />
      
      {/* Introduction Section */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
            Welcome to Nourish India
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At Nourish India, we believe that every meal is an opportunity to create lasting memories. 
            Our passion for culinary excellence drives us to deliver exceptional catering experiences 
            that celebrate the rich tapestry of Indian flavors while embracing contemporary culinary techniques.
          </p>
        </div>
      </section>

      <ServiceHighlights />
      <CulinaryExcellence />
      <TrustedClients />
      
      {/* CTA Banner */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your Perfect Event?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Let us bring our culinary expertise to your next celebration. From intimate gatherings 
            to grand festivities, we'll make it unforgettable.
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

export default Index;
