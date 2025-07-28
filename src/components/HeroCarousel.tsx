import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-catering.jpg';
import corporateImage from '@/assets/corporate-catering.jpg';
import weddingImage from '@/assets/wedding-catering.jpg';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImage,
      title: "A Symphony of Flavours",
      subtitle: "Premium Catering Services",
      description: "Experience culinary excellence with our bespoke catering solutions for corporate events, weddings, and special occasions.",
      cta: "Explore Services"
    },
    {
      image: corporateImage,
      title: "Corporate Catering Excellence",
      subtitle: "Elevate Your Business Events",
      description: "Impress your clients and colleagues with our sophisticated menu options designed for corporate gatherings and meetings.",
      cta: "Corporate Solutions"
    },
    {
      image: weddingImage,
      title: "Unforgettable Wedding Feasts",
      subtitle: "Make Your Special Day Perfect",
      description: "Create magical moments with our exquisite wedding catering services that blend tradition with contemporary elegance.",
      cta: "Wedding Catering"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent">
              <div className="container-custom h-full flex items-center">
                <div className="max-w-2xl text-white">
                  <h2 className="text-lg font-medium mb-2 text-primary">{slide.subtitle}</h2>
                  <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl mb-8 leading-relaxed opacity-90">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/services" className="btn-primary">
                      {slide.cta}
                    </Link>
                    <Link 
                      to="/contact" 
                      className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-foreground rounded-lg font-medium transition-all duration-300"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;