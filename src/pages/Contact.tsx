import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guestCount: '',
    eventDate: '',
    customMessage: '',
    cuisinePreferences: '',
    dietaryNeeds: '',
    requiredCourses: '',
    specificDishRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to database
      const { error: dbError } = await supabase
        .from('inquiries')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          event_type: formData.eventType || null,
          guest_count: formData.guestCount ? parseInt(formData.guestCount) : null,
          event_date: formData.eventDate || null,
          custom_message: formData.customMessage || null,
          dietary_preferences: `Cuisine: ${formData.cuisinePreferences} | Dietary Needs: ${formData.dietaryNeeds} | Required Courses: ${formData.requiredCourses} | Specific Dishes: ${formData.specificDishRequests}`,
        });

      if (dbError) {
        throw new Error(`Database error: ${dbError.message}`);
      }

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-inquiry-email', {
        body: formData
      });

      if (emailError) {
        console.warn('Email sending failed:', emailError);
        // Don't throw here - form submission succeeded even if email failed
      }

      toast({
        title: "Inquiry Submitted Successfully!",
        description: "Thank you for your inquiry. We will get back to you within 2-4 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        guestCount: '',
        eventDate: '',
        customMessage: '',
        cuisinePreferences: '',
        dietaryNeeds: '',
        requiredCourses: '',
        specificDishRequests: ''
      });

    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your inquiry. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9980066824",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: "nourishindiainfo@gmail.com",
      description: "Send us your detailed requirements"
    },
    {
      icon: MapPin,
      title: "Service Areas",
      details: "# 49-9, 4th Main, 5th Cross, Chikka Begur Gate, Skoda Service Center, Kudlu Gate, Begur, BENGALURU - 560068",
      description: "We cater events across India"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Sun: 9:00 AM - 9:00 PM",
      description: "Available for consultations"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Ready to create an unforgettable culinary experience? 
            Let's discuss your event and make it extraordinary.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-premium p-8">
              <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                Event & Menu Planner
              </h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Your Event Details Section */}
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                    Your Event Details
                  </h3>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label htmlFor="eventType" className="block text-sm font-medium text-foreground mb-2">
                          Event Type
                        </label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        >
                          <option value="">Select event type</option>
                          <option value="wedding">Wedding</option>
                          <option value="corporate">Corporate Event</option>
                          <option value="birthday">Birthday Party</option>
                          <option value="anniversary">Anniversary</option>
                          <option value="social">Social Gathering</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="guestCount" className="block text-sm font-medium text-foreground mb-2">
                          Number of Guests
                        </label>
                        <input
                          type="number"
                          id="guestCount"
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="50"
                          min="1"
                        />
                      </div>
                      <div>
                        <label htmlFor="eventDate" className="block text-sm font-medium text-foreground mb-2">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          id="eventDate"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Custom Menu Details Section */}
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-4 border-b border-border pb-2">
                    Custom Menu Details
                  </h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cuisinePreferences" className="block text-sm font-medium text-foreground mb-2">
                          Cuisine Preferences
                        </label>
                        <input
                          type="text"
                          id="cuisinePreferences"
                          name="cuisinePreferences"
                          value={formData.cuisinePreferences}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="e.g., North Indian, South Indian, Continental"
                        />
                      </div>
                      <div>
                        <label htmlFor="dietaryNeeds" className="block text-sm font-medium text-foreground mb-2">
                          Dietary Needs
                        </label>
                        <input
                          type="text"
                          id="dietaryNeeds"
                          name="dietaryNeeds"
                          value={formData.dietaryNeeds}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="e.g., Vegetarian, Vegan, Gluten-free, Jain"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="requiredCourses" className="block text-sm font-medium text-foreground mb-2">
                          Required Courses
                        </label>
                        <input
                          type="text"
                          id="requiredCourses"
                          name="requiredCourses"
                          value={formData.requiredCourses}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="e.g., Appetizers, Main Course, Desserts"
                        />
                      </div>
                      <div>
                        <label htmlFor="specificDishRequests" className="block text-sm font-medium text-foreground mb-2">
                          Specific Dish Requests
                        </label>
                        <input
                          type="text"
                          id="specificDishRequests"
                          name="specificDishRequests"
                          value={formData.specificDishRequests}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="e.g., Biryani, Paneer Butter Masala"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="customMessage" className="block text-sm font-medium text-foreground mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="customMessage"
                    name="customMessage"
                    rows={4}
                    value={formData.customMessage}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Any additional details about venue, timing, special arrangements, or other requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-3xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  We're here to help you create the perfect event. Reach out to us through 
                  any of the following channels, and our team will get back to you promptly.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="card-premium p-6 flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-playfair text-xl font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-primary font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Response Promise */}
              <div className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg">
                <h3 className="font-playfair text-xl font-semibold mb-2">
                  Quick Response Guarantee
                </h3>
                <p className="opacity-90">
                  We understand that event planning requires timely decisions. 
                  Our team commits to responding to all inquiries within 2-4 hours 
                  during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Quick answers to common questions about our catering services
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-6">
              <div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                  How far in advance should I book?
                </h3>
                <p className="text-muted-foreground">
                  We recommend booking at least 2-4 weeks in advance for smaller events 
                  and 6-8 weeks for larger events like weddings to ensure availability.
                </p>
              </div>
              
              <div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                  Do you provide serving staff?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we provide professional serving staff, including servers, 
                  bartenders, and event coordinators based on your event requirements.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                  Can you accommodate dietary restrictions?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! We specialize in accommodating various dietary needs including 
                  vegan, gluten-free, keto, and other special requirements.
                </p>
              </div>
              
              <div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                  What is your cancellation policy?
                </h3>
                <p className="text-muted-foreground">
                  Cancellations made 72+ hours before the event receive a full refund. 
                  Cancellations within 72 hours are subject to a 50% cancellation fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;