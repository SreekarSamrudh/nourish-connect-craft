import { useState, useEffect } from 'react';
import { Leaf, Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

// Type that matches what we actually get from the database
type MenuItem = {
  id: number;
  name: string;
  description: string | null;
  price: string | null;
  category: string | null;
  image_url: string | null;
  is_featured: boolean;
  created_at: string;
};

const Menus = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // This hook will fetch menu data from Supabase when the page loads
  useEffect(() => {
    const fetchMenuItems = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('menu_items')
        .select('*');

      if (error) {
        console.error('Error fetching menu items:', error);
      } else {
        setMenuItems(data);
      }
      setLoading(false);
    };

    fetchMenuItems();
  }, []);

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Courses' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'vegetarian', name: 'Vegetarian' }
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
          {loading ? (
            <div className="text-center">Loading menu...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div key={item.id} className="card-premium overflow-hidden group hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={item.image_url || "/api/placeholder/300/200"} 
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-playfair text-xl font-semibold text-foreground">
                        {item.name}
                      </h3>
                      {/* Only display the price if it exists */}
                      {item.price && (
                        <span className="text-lg font-bold text-primary">{item.price}</span>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground mb-4 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
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
