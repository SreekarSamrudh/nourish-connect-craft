const TrustedClients = () => {
  // Client logos with their names for alt text
  const clients = [
    { name: 'HP', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/200px-HP_logo_2012.svg.png' },
    { name: 'LG', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/200px-LG_logo_%282015%29.svg.png' },
    { name: 'Schneider Electric', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Schneider_Electric_2007.svg/200px-Schneider_Electric_2007.svg.png' },
    { name: 'DocuSign', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/DocuSign_Logo.svg/200px-DocuSign_Logo.svg.png' },
    { name: 'ZS', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/ZS_Associates_Logo.svg/200px-ZS_Associates_Logo.svg.png' },
    { name: 'DevRev', logoUrl: 'https://devrev.ai/assets/Logo.svg' },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted By Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are proud to serve some of the most respected organizations across industries
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="w-full h-24 flex items-center justify-center p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <img 
                src={client.logoUrl}
                alt={`${client.name} logo`}
                className="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="font-bold text-xl text-muted-foreground group-hover:text-foreground transition-colors">${client.name}</span>`;
                  }
                }}
              />
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Events Catered</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Corporate Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-muted-foreground">Guests Served</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
