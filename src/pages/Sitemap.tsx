import { Link } from 'react-router-dom';
import { Home, Briefcase, Info, MessageSquare, FileText, HelpCircle } from 'lucide-react';

const Sitemap = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact / Request Quote', path: '/contact' },
      ]
    },
    {
      title: 'Services',
      icon: Briefcase,
      links: [
        { name: 'All Services', path: '/services' },
        { name: 'Corporate Services', path: '/services/corporate' },
        { name: 'University Services', path: '/services/universities' },
        { name: 'Live Events', path: '/services/live-events' },
      ]
    },
    {
      title: 'Resources',
      icon: FileText,
      links: [
        { name: 'Blog', path: '/blog' },
        { name: 'FAQ', path: '/faq' },
      ]
    },
    {
      title: 'Legal',
      icon: Info,
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Sitemap
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Navigate our website easily
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteStructure.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={index} className="card-premium p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <IconComponent className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h2 className="font-playfair text-xl font-semibold text-foreground">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          to={link.path}
                          className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center space-x-2"
                        >
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                          <span>{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;
