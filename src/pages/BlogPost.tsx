import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

type BlogPost = {
  id: number;
  title: string;
  content: string | null;
  image_url: string | null;
  status: string | null;
  published_at: string | null;
  author_id: string | null;
  is_featured?: boolean | null;
  category?: string | null;
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!id) return;
      
      setLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', parseInt(id))
        .eq('status', 'published')
        .single();

      if (error) {
        console.error('Error fetching blog post:', error);
        toast({
          title: "Error",
          description: "Blog post not found.",
          variant: "destructive",
        });
        navigate('/blog');
      } else {
        setBlogPost(data);
      }
      setLoading(false);
    };

    fetchBlogPost();
  }, [id, navigate, toast]);

  if (loading) {
    return (
      <div className="min-h-screen section-padding bg-background flex items-center justify-center">
        <div className="text-center">Loading article...</div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="min-h-screen section-padding bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
          <button 
            onClick={() => navigate('/blog')}
            className="btn-primary"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <button 
            onClick={() => navigate('/blog')}
            className="flex items-center space-x-2 mb-6 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Blog</span>
          </button>
          
          <div className="max-w-4xl">
            <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-6">
              {blogPost.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-white/90">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Admin</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{blogPost.published_at ? new Date(blogPost.published_at).toLocaleDateString() : 'Recently'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {blogPost.image_url && (
              <div className="mb-8">
                <img 
                  src={blogPost.image_url} 
                  alt={blogPost.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}
            
            <div className="prose prose-lg max-w-none">
              <div className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                {blogPost.content}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles CTA */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-4">
            Explore More Articles
          </h2>
          <p className="text-muted-foreground mb-8">
            Discover more culinary insights and event planning tips
          </p>
          <button 
            onClick={() => navigate('/blog')}
            className="btn-primary"
          >
            Back to Blog
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;