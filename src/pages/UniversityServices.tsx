import { GraduationCap, CheckCircle, Calendar, Users, BookOpen, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const UniversityServices = () => {
  const features = [
    "Student meal plans",
    "Faculty dining services",
    "Campus cafe management",
    "Special event catering",
    "Graduation ceremonies", 
    "Conference catering",
    "Healthy menu options",
    "Budget-friendly solutions"
  ];

  const solutions = [
    {
      icon: Coffee,
      title: "Campus Cafe Management",
      description: "Complete management of campus cafeterias with diverse, healthy options for students and staff",
      details: ["Daily meal service", "Nutritious options", "International cuisine", "Quick grab-and-go items"]
    },
    {
      icon: BookOpen,
      title: "Student Meal Plans",
      description: "Flexible meal plan options designed to fit student budgets and dietary preferences",
      details: ["Affordable pricing", "Variety of cuisines", "Dietary accommodations", "Flexible schedules"]
    },
    {
      icon: Calendar,
      title: "University Events",
      description: "Professional catering for graduations, conferences, and special university occasions",
      details: ["Graduation ceremonies", "Academic conferences", "Faculty events", "Student celebrations"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <GraduationCap className="h-16 w-16 mx-auto mb-6 text-white" />
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
              University Catering Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Comprehensive dining solutions for universities, colleges, and educational institutions. 
              Nourishing minds with quality food and exceptional service.
            </p>
            <Link 
              to="/contact"
              className="btn-primary text-lg px-10 py-4 bg-white text-foreground hover:bg-background"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our University Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From daily meal services to special events, we provide complete catering solutions for educational institutions
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
            Tailored University Solutions
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
                Why Universities Choose Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <BookOpen className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Educational Focus</h3>
                    <p className="text-muted-foreground">We understand the unique needs of educational institutions and student communities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Budget-Conscious Solutions</h3>
                    <p className="text-muted-foreground">Affordable meal options without compromising on quality or nutrition.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <GraduationCap className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Student-Centric Approach</h3>
                    <p className="text-muted-foreground">Menus and services designed with student preferences and dietary needs in mind.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-premium p-8">
              <h3 className="font-playfair text-2xl font-semibold mb-6 text-center">Ready to Enhance Campus Dining?</h3>
              <p className="text-muted-foreground text-center mb-8">
                Let's explore how our university catering services can benefit your institution.
              </p>
              <div className="text-center">
                <Link 
                  to="/contact"
                  className="btn-primary text-lg px-8 py-3"
                >
                  Request Proposal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UniversityServices;