import { Heart, CheckCircle, Calendar, Users, Music, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const LiveEvents = () => {
  const features = [
    "Wedding ceremonies",
    "Reception dinners",
    "Anniversary celebrations",
    "Birthday parties",
    "Private celebrations",
    "Cultural events",
    "On-site catering",
    "Full-service events"
  ];

  const solutions = [
    {
      icon: Heart,
      title: "Wedding Catering",
      description: "Make your special day unforgettable with our exquisite wedding feast and flawless service",
      details: ["Multi-course dinners", "Traditional ceremonies", "Reception buffets", "Brunch celebrations"]
    },
    {
      icon: Music,
      title: "Private Celebrations",
      description: "Perfect catering for birthdays, anniversaries, and intimate family gatherings",
      details: ["Birthday parties", "Anniversary dinners", "Family reunions", "Holiday celebrations"]
    },
    {
      icon: Camera,
      title: "Special Occasions",
      description: "Professional catering for milestone events and cultural celebrations",
      details: ["Graduation parties", "Cultural ceremonies", "Religious events", "Corporate celebrations"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <Heart className="h-16 w-16 mx-auto mb-6 text-white" />
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              Live Events & Celebrations
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Create unforgettable memories with our exceptional catering for weddings, private celebrations, 
              and special occasions. Every detail crafted to perfection.
            </p>
            <Link 
              to="/contact"
              className="btn-primary text-lg px-10 py-4 bg-white text-foreground hover:bg-background"
            >
              Plan Your Event
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
              Celebration Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we bring culinary excellence to every special moment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card-premium p-6 text-center hover:scale-105 transition-all duration-300">
                <CheckCircle className="h-8 w-8 text-secondary mx-auto mb-4" />
                <p className="text-muted-foreground font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            Event Catering Solutions
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="card-premium p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-4">{solution.title}</h3>
                  <p className="text-muted-foreground mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center justify-center text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Us for Your Special Day?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Heart className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Personalized Service</h3>
                    <p className="text-muted-foreground">Every event is unique. We work closely with you to create a personalized experience.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Camera className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Memorable Moments</h3>
                    <p className="text-muted-foreground">We understand the importance of your special day and ensure every detail is perfect.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Full-Service Experience</h3>
                    <p className="text-muted-foreground">From planning to execution, we handle every aspect of your event catering needs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-premium p-8">
              <h3 className="font-playfair text-2xl font-semibold mb-6 text-center">Ready to Create Magic?</h3>
              <p className="text-muted-foreground text-center mb-8">
                Let's discuss your vision and create an unforgettable celebration together.
              </p>
              <div className="text-center">
                <Link 
                  to="/contact"
                  className="btn-primary text-lg px-8 py-3"
                >
                  Start Planning
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveEvents;