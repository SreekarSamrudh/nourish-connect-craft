import { useState } from 'react';
import { Leaf, Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Menus = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'vegan', name: 'Vegan Options' }
  ];

  const menuItems = [
    {
      id: 1,
      name: "Tandoori Chicken Skewers",
      description: "Tender chicken marinated in aromatic spices and grilled to perfection",
      price: "₹450",
      category: "appetizers",
      dietary: ["gluten-free"],
      prep_time: "25 mins",
      rating: 4.8,
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      name: "Vegetable Samosas",
      description: "Crispy pastries filled with spiced potatoes and green peas",
      price: "₹180",
      category: "appetizers",
      dietary: ["vegetarian", "vegan"],
      prep_time: "20 mins",
      rating: 4.7,
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      name: "Butter Chicken",
      description: "Rich and creamy tomato-based curry with tender chicken pieces",
      price: "₹650",
      category: "mains",
      dietary: [],
      prep_time: "35 mins",
      rating: 4.9,
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      name: "Dal Makhani",
      description: "Slow-cooked black lentils in a rich, creamy sauce",
      price: "₹420",
      category: "mains",
      dietary: ["vegetarian"],
      prep_time: "45 mins",
      rating: 4.8,
      image: "/api/placeholder/300/200"
    },
    {
      id: 5,
      name: "Quinoa Buddha Bowl",
      description: "Nutritious bowl with quinoa, roasted vegetables, and tahini dressing",
      price: "₹480",
      category: "vegan",
      dietary: ["vegan", "gluten-free"],
      prep_time: "20 mins",
      rating: 4.6,
      image: "/api/placeholder/300/200"
    },
    {
      id: 6,
      name: "Gulab Jamun",
      description: "Traditional Indian sweet dumplings in cardamom-scented syrup",
      price: "₹180",
      category: "desserts",
      dietary: ["vegetarian"],
      prep_time: "15 mins",
      rating: 4.9,
      image: "/api/placeholder/300/200"
    },
    {
      id: 7,
      name: "Coconut Rice Pudding",
      description: "Creamy vegan dessert with coconut milk and aromatic spices",
      price: "₹220",
      category: "desserts",
      dietary: ["vegan", "gluten-free"],
      prep_time: "30 mins",
      rating: 4.5,
      image: "/api/placeholder/300/200"
    },
    {
      id: 8,
      name: "Paneer Tikka Masala",
      description: "Grilled cottage cheese in a rich, spiced tomato gravy",
      price: "₹550",
      category: "mains",
      dietary: ["vegetarian"],
      prep_time: "30 mins",
      rating: 4.7,
      image: "/api/placeholder/300/200"
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Our Culinary Delights
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            From delectable appetizers to rich main courses and mouth-watering desserts, 
            our menu offers something for every taste.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card text-foreground hover:bg-muted border border-border'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="card-premium overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-playfair text-xl font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{item.prep_time}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {item.dietary.includes('vegan') && (
                        <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                          <Leaf className="h-3 w-3" />
                          <span>Vegan</span>
                        </div>
                      )}
                      {item.dietary.includes('vegetarian') && !item.dietary.includes('vegan') && (
                        <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                          Vegetarian
                        </div>
                      )}
                      {item.dietary.includes('gluten-free') && (
                        <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          GF
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Menu CTA */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We specialize in creating custom menus tailored to your specific dietary requirements 
            and cultural preferences. Let us design the perfect menu for your event.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-10 py-4 text-center">
            Request Custom Menu
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Menus;