import { Star, Clock, Users } from 'lucide-react';
import popularDishesImage from '@/assets/popular-dishes.jpg';

const PopularDishes = () => {
  const dishes = [
    {
      name: "Signature Biryani",
      description: "Aromatic basmati rice layered with tender meat and exotic spices, slow-cooked to perfection.",
      price: "₹450",
      rating: 4.9,
      prepTime: "45 mins",
      serves: "2-3 people",
      dietary: ["Halal", "Gluten-Free"]
    },
    {
      name: "Butter Chicken",
      description: "Creamy tomato-based curry with succulent chicken pieces, our most beloved signature dish.",
      price: "₹380",
      rating: 4.8,
      prepTime: "30 mins",
      serves: "2-3 people",
      dietary: ["Gluten-Free"]
    },
    {
      name: "Paneer Tikka Masala",
      description: "Grilled cottage cheese in rich, creamy gravy with aromatic herbs and spices.",
      price: "₹320",
      rating: 4.7,
      prepTime: "25 mins",
      serves: "2-3 people",
      dietary: ["Vegetarian", "Gluten-Free"]
    },
    {
      name: "Dal Makhani",
      description: "Slow-cooked black lentils in a rich, creamy sauce with butter and aromatic spices.",
      price: "₹280",
      rating: 4.8,
      prepTime: "20 mins",
      serves: "3-4 people",
      dietary: ["Vegetarian", "Protein-Rich"]
    }
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Popular Dishes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the flavors that have made us a favorite choice for discerning food lovers. 
            Each dish is crafted with premium ingredients and authentic recipes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-premium">
              <img 
                src={popularDishesImage} 
                alt="Popular dishes beautifully plated" 
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-90">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Dishes List */}
          <div className="space-y-6">
            {dishes.map((dish, index) => (
              <div key={index} className="bg-background p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-playfair text-xl font-semibold text-foreground">
                    {dish.name}
                  </h3>
                  <span className="text-2xl font-bold text-primary">{dish.price}</span>
                </div>
                
                <p className="text-muted-foreground mb-4">{dish.description}</p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span>{dish.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{dish.prepTime}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{dish.serves}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {dish.dietary.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
              Ready to Experience These Flavors?
            </h3>
            <p className="text-muted-foreground mb-6">
              Browse our complete menu or contact us for custom catering solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">View Full Menu</button>
              <button className="btn-secondary">Request Custom Quote</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;