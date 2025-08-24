import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Blog = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    try {
      if (!newsletterEmail || !newsletterEmail.includes('@')) {
        throw new Error('Please enter a valid email address');
      }

      // Send newsletter subscription notification
      const { error } = await supabase.functions.invoke('send-newsletter-email', {
        body: { email: newsletterEmail }
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Newsletter Subscription Successful!",
        description: "Thank you for subscribing to our newsletter. You'll receive the latest updates and culinary tips.",
      });

      setNewsletterEmail('');
    } catch (error: any) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Subscription Failed",
        description: error.message || "There was an error subscribing to the newsletter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Tips for Planning a Corporate Event Menu",
      excerpt: "Discover how to choose the perfect menu for your next business gathering that will impress clients and colleagues alike.",
      author: "Chef Rajesh Kumar",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Corporate Catering",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "The Art of Indian Wedding Feast: Tradition Meets Innovation",
      excerpt: "Explore how modern catering techniques enhance traditional Indian wedding cuisine while preserving authentic flavors.",
      author: "Priya Sharma",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Wedding Catering",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 3,
      title: "Seasonal Ingredients: Why Fresh Matters in Catering",
      excerpt: "Learn about the importance of using seasonal, locally-sourced ingredients and how they elevate your event's dining experience.",
      author: "Chef Meera Patel",
      date: "2024-01-05",
      readTime: "4 min read",
      category: "Culinary Tips",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 4,
      title: "Vegan Catering: Delicious Plant-Based Options for Every Occasion",
      excerpt: "Discover our innovative vegan menu options that satisfy even the most discerning palates at any event.",
      author: "Chef Meera Patel",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "Vegan Options",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 5,
      title: "Event Planning Timeline: When to Book Your Caterer",
      excerpt: "A comprehensive guide to planning your event timeline and securing the best catering services for your special day.",
      author: "Priya Sharma",
      date: "2023-12-20",
      readTime: "3 min read",
      category: "Event Planning",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 6,
      title: "Behind the Scenes: A Day in Our Professional Kitchen",
      excerpt: "Take a peek behind the curtain and see how our culinary team prepares for large-scale events with precision and passion.",
      author: "Chef Rajesh Kumar",
      date: "2023-12-15",
      readTime: "8 min read",
      category: "Behind the Scenes",
      image: "/api/placeholder/400/250",
      featured: false
    }
  ];

  const categories = [
    "All Posts",
    "Corporate Catering",
    "Wedding Catering", 
    "Culinary Tips",
    "Vegan Options",
    "Event Planning",
    "Behind the Scenes"
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Culinary Insights & Tips
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Discover the latest trends, tips, and stories from the world of 
            premium catering and event planning.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Article
              </h2>
            </div>
            
            <div className="card-premium overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-primary font-medium">{featuredPost.category}</span>
                  </div>
                  
                  <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="btn-primary w-fit flex items-center space-x-2">
                    <span>Read Article</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our collection of culinary insights and event planning tips
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-lg border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="card-premium overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-foreground px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <button className="text-primary hover:text-primary/80 font-medium text-sm flex items-center space-x-1">
                      <span>Read More</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container-custom text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest culinary tips, event planning advice, 
            and exclusive offers from Nourish India.
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg text-foreground focus:ring-2 focus:ring-white/50 focus:outline-none"
            />
            <button 
              type="submit"
              disabled={isSubscribing}
              className="px-8 py-3 bg-white text-foreground hover:bg-background rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubscribing ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;