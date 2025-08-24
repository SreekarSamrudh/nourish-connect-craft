import { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "General Information",
      faqs: [
        {
          question: "What types of events do you cater?",
          answer: "We provide catering services for a wide range of events including corporate meetings, conferences, weddings, birthday parties, anniversary celebrations, social gatherings, and cultural events. Whether it's an intimate gathering for 20 people or a grand celebration for 500+ guests, we can accommodate your needs."
        },
        {
          question: "How far in advance should I book your services?",
          answer: "We recommend booking at least 2-4 weeks in advance for smaller events (under 50 guests) and 6-8 weeks for larger events like weddings or corporate conferences. However, we understand that sometimes events come up quickly, so please contact us even for last-minute requirements – we'll do our best to accommodate you."
        },
        {
          question: "What areas do you serve?",
          answer: "We provide catering services across India. Our primary service areas include major metropolitan cities and their surrounding regions. For events outside our standard service areas, please contact us to discuss logistics and any additional charges that may apply."
        }
      ]
    },
    {
      title: "Menu & Dietary Requirements",
      faqs: [
        {
          question: "Can you accommodate dietary restrictions and allergies?",
          answer: "Absolutely! We specialize in accommodating various dietary needs including vegetarian, vegan, gluten-free, keto, diabetes-friendly, and other special requirements. We also handle food allergies with utmost care. Please inform us of any dietary restrictions when booking, and our chefs will create delicious alternatives that meet your needs."
        },
        {
          question: "Do you offer custom menu options?",
          answer: "Yes, we excel at creating custom menus tailored to your event's theme, cultural preferences, and dietary requirements. Our chefs can work with you to develop a unique menu that reflects your vision while ensuring exceptional taste and presentation."
        },
        {
          question: "Can I see samples of your food before booking?",
          answer: "We offer tasting sessions for events with 50+ guests or high-value bookings. This allows you to experience our food quality firsthand and make any adjustments to the menu. Tasting sessions can be arranged at our facility or, for larger events, at your preferred location."
        },
        {
          question: "Do you provide both Indian and international cuisine?",
          answer: "While we specialize in authentic Indian cuisine, our talented chefs are also skilled in preparing international dishes including Continental, Chinese, Italian, and fusion cuisines. We can create diverse menus that cater to varied palates at your event."
        }
      ]
    },
    {
      title: "Service & Logistics",
      faqs: [
        {
          question: "Do you provide serving staff and equipment?",
          answer: "Yes, we provide professional serving staff including servers, bartenders, and event coordinators based on your event size and requirements. We also supply all necessary equipment including chafing dishes, serving utensils, plates, cutlery, and glassware. For larger events, we can also arrange tables, chairs, and linens."
        },
        {
          question: "What is included in your catering packages?",
          answer: "Our standard packages include menu preparation, professional serving staff, serving equipment, basic dinnerware, and cleanup. Additional services like decorative setup, premium tableware, bartending services, and extended service hours can be added based on your requirements."
        },
        {
          question: "How does the setup and cleanup process work?",
          answer: "Our team arrives 2-3 hours before your event to set up the serving area, arrange food stations, and prepare everything for service. After the event, we handle all cleanup including clearing tables, washing dishes, and removing our equipment, leaving your venue spotless."
        },
        {
          question: "Can you cater outdoor events?",
          answer: "Yes, we regularly cater outdoor events including garden parties, beach weddings, and corporate picnics. We bring all necessary equipment including generators if needed, and our team is experienced in managing the unique challenges of outdoor catering while maintaining food safety and quality."
        }
      ]
    },
    {
      title: "Pricing & Policies",
      faqs: [
        {
          question: "How is pricing determined?",
          answer: "Our pricing is based on several factors including the number of guests, menu selection, service type (buffet vs. plated), location, duration of service, and additional services required. We provide detailed, transparent quotes with no hidden costs. Contact us for a personalized quote based on your specific requirements."
        },
        {
          question: "What is your payment schedule?",
          answer: "We typically require a 30% advance payment to confirm your booking, with the remaining balance due 48 hours before the event. For larger events, we may arrange a payment plan. We accept various payment methods including bank transfers, checks, and digital payments."
        },
        {
          question: "What is your cancellation policy?",
          answer: "Cancellations made 72+ hours before the event receive a full refund minus a small processing fee. Cancellations between 24-72 hours are subject to a 50% cancellation fee. Cancellations within 24 hours of the event are subject to the full amount due to committed resources and ingredients."
        },
        {
          question: "Do you offer any discounts or packages?",
          answer: "We offer seasonal discounts, early booking incentives, and special packages for regular corporate clients. We also provide competitive pricing for multiple events from the same client. Contact us to learn about current promotions and how we can customize a package that fits your budget."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Find quick answers to common questions about our catering services, 
            policies, and event planning process.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                {category.title}
              </h2>
              
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const itemIndex = categoryIndex * 100 + faqIndex; // Unique index
                  const isOpen = openItems.includes(itemIndex);
                  
                  return (
                    <div key={faqIndex} className="card-premium overflow-hidden">
                      <button
                        onClick={() => toggleItem(itemIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
                      >
                        <h3 className="font-playfair text-lg font-semibold text-foreground pr-4">
                          {faq.question}
                        </h3>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <div className="border-t border-border pt-4">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-8">
            Quick Planning Tips
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">1</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Book Early</h3>
              <p className="text-muted-foreground">
                Reserve your preferred date at least 2-4 weeks in advance to ensure availability 
                and allow time for menu customization.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-foreground font-bold text-xl">2</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Share Details</h3>
              <p className="text-muted-foreground">
                Provide comprehensive event details including guest count, dietary requirements, 
                venue information, and any special requests.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">3</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Confirm Early</h3>
              <p className="text-muted-foreground">
                Finalize your menu and arrangements at least one week before the event 
                to ensure smooth execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container-custom text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Our friendly team is here to help you plan the perfect event. 
            Get in touch for personalized assistance and detailed information.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="font-medium">Call Us</p>
                <p className="opacity-90">+91 9980066824</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="font-medium">Email Us</p>
                <p className="opacity-90">nourishindiainfo@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Link 
              to="/contact"
              className="px-10 py-4 bg-white text-foreground hover:bg-background rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-center inline-block"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;