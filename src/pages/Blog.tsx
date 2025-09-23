import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

// Define a type for our blog post data
type BlogPost = {
  id: number;
  title: string;
  content: string | null;
  image_url: string | null;
  published_at: string | null;
  is_featured: boolean | null;
  category: string | null;
  // These fields were in your original static data, so we'll keep them for structure
  author: string; 
  readTime: string;
};

const Blog = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();
  
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All Posts');

  // Fetch blog posts from Supabase when the page loads
  useEffect(() => {
    const fetchBlogPosts = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false });

      if (error) {
        console.error('Error fetching blog posts:', error);
      } else if (data) {
        setAllPosts(data as BlogPost[]);
      }
      setLoading(false);
    };

    fetchBlogPosts();
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    try {
      if (!newsletterEmail || !newsletterEmail.includes('@')) {
        throw new Error('Please enter a valid email address');
      }

      // 1. Save email to the database
      const { error: dbError } = await supabase
        .from('newsletter_subscriptions')
        .insert({ email: newsletterEmail });

      if (dbError) {
        if (dbError.code === '23505') {
          throw new Error('This email is already subscribed.');
        }
        throw new Error(`Database error: ${dbError.message}`);
      }

      // 2. Send notification email
      const { error: emailError } = await supabase.functions.invoke('send-newsletter-email', {
        body: { email: newsletterEmail }
      });

      if (emailError) {
        console.warn('Email sending failed:', emailError);
      }

      toast({
        title: "Subscription Successful!",
        description: "Thank you for subscribing.",
      });

      setNewsletterEmail('');
    } catch (error: any) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Subscription Failed",
        description: error.message || "There was an error subscribing.",
        variant: "destructive",
      });
    } finally {
      setIsSubscribing(false);
    }
  };
  
  // Correctly separate the featured post from the regular posts
  const featuredPost = allPosts.find(post => post.is_featured);
  const regularPosts = allPosts.filter(post => !post.is_featured);

  // Correctly filter the regular posts based on the active category
  const filteredPosts = activeCategory === 'All Posts' 
    ? regularPosts 
    : regularPosts.filter(post => post.category === activeCategory);

  const categories = [
    "All Posts", "Corporate Catering", "Wedding Catering", "Culinary Tips",
    "Vegan Options", "Event Planning", "Behind the Scenes"
  ];

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
      {!loading && featuredPost && (
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Article
              </h2>
            </div>
            
            <Link to={`/blog/${featuredPost.id}`} className="card-premium overflow-hidden group hover:scale-105 transition-all duration-300 block">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={featuredPost.image_url || "/api/placeholder/400/250"} 
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
                    {featuredPost.content?.substring(0, 200)}...
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>Admin</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.published_at || Date.now()).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>5 min read</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-primary font-medium flex items-center">
                    <span>Read Article</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </div>
            </Link>
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
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg border transition-all duration-300 ${activeCategory === category ? 'bg-primary text-primary-foreground' : 'border-border text-foreground hover:bg-muted'}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          {loading ? (
            <div className="text-center py-12">Loading blog posts...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.length > 0 ? filteredPosts.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id} className="card-premium block overflow-hidden group hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={post.image_url || "/api/placeholder/400/250"} 
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
                      {post.content?.substring(0, 150)}...
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>Admin</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>5 min read</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.published_at || Date.now()).toLocaleDateString()}
                      </span>
                      <div className="text-primary hover:text-primary/80 font-medium text-sm flex items-center space-x-1">
                        <span>Read More</span>
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              )) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground">No blog posts found for this category.</p>
                </div>
              )}
            </div>
          )}
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
