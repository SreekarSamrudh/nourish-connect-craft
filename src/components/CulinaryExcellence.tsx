import { Leaf, Drumstick } from 'lucide-react';
import { Link } from 'react-router-dom';

const CulinaryExcellence = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Culinary Excellence for Every Palate
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A complete range of premium Vegetarian and Non-Vegetarian delicacies, 
            crafted with passion and served with perfection.
          </p>
        </div>

        {/* Veg / Non-Veg Split Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vegetarian Section */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-8 md:p-12 text-white group hover:scale-[1.02] transition-all duration-300 shadow-xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-playfair text-3xl font-bold mb-4">
                Vegetarian Delights
              </h3>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Experience the finest vegetarian cuisine with our carefully curated selection 
                of dishes. From traditional Indian classics to contemporary fusion creations, 
                every dish celebrates the vibrant flavors of fresh vegetables, aromatic spices, 
                and premium ingredients.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Farm-fresh vegetables & seasonal produce</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Traditional & contemporary preparations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Jain, Vegan & special dietary options</span>
                </li>
              </ul>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
          </div>

          {/* Non-Vegetarian Section */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 p-8 md:p-12 text-white group hover:scale-[1.02] transition-all duration-300 shadow-xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Drumstick className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-playfair text-3xl font-bold mb-4">
                Non-Vegetarian Specialties
              </h3>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Indulge in our exquisite non-vegetarian offerings, featuring premium meats 
                prepared with authentic recipes passed down through generations. From 
                succulent kebabs to rich curries, we bring you the best of culinary traditions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Premium quality meats & seafood</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Authentic tandoori & kebab selections</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Regional specialties & global cuisines</span>
                </li>
              </ul>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
              Every Menu is Custom-Crafted for Your Event
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We don't believe in one-size-fits-all. Share your vision with us, and our culinary 
              experts will design a bespoke menu that perfectly matches your event's theme and requirements.
            </p>
            <Link to="/contact" className="btn-primary text-center inline-block">
              Request Custom Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulinaryExcellence;
