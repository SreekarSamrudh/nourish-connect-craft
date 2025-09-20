import { useState, useEffect } from 'react';
import { Star, Clock, Users } from 'lucide-react';
import popularDishesImage from '@/assets/popular-dishes.jpg';
import { Link } from 'react-router-dom';

// Simplified type to avoid TypeScript issues

const PopularDishes = () => {
  const [featuredDishes, setFeaturedDishes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedDishes = async () => {
      setLoading(true);
      try {
        const { createClient } = await import('@supabase/supabase-js');
        const supabaseUrl = "https://dhpjlgsilivjrifsibqd.supabase.co";
        const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRocGpsZ3NpbGl2anJpZnNpYnFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MTk3MDYsImV4cCI6MjA2OTI5NTcwNn0.X1hi0DVTu2V5BRNZuEAUNObD_jCEM2k-sS09ldQuzm4";
        const supabase = createClient(supabaseUrl, supabaseKey);
        
        const { data, error } = await supabase
          .from('menu_items')
          .select('*')
          .eq('is_featured', true)
          .limit(4);

        if (error) {
          console.error('Error fetching featured dishes:', error);
        } else {
          setFeaturedDishes(data || []);
        }
      } catch (error) {
        console.error('Error:', error);
      }
      setLoading(false);
    };

    fetchFeaturedDishes();
  }, []);

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
            {loading ? (
              <div className="text-center py-8">Loading featured dishes...</div>
            ) : featuredDishes.length > 0 ? (
              featuredDishes.map((dish) => (
                <div key={dish.id} className="bg-background p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-playfair text-xl font-semibold text-foreground">
                      {dish.name}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{dish.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>4.8</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>30 mins</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>2-3 people</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {dish.category && (
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full font-medium">
                        {dish.category}
                      </span>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No featured dishes available at the moment.
              </div>
            )}
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
              <Link to="/menus" className="btn-primary text-center">View Full Menu</Link>
              <Link to="/contact" className="btn-secondary text-center">Request Custom Quote</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;