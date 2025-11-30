const Terms = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Please read these terms carefully
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              <strong>Last Updated:</strong> November 2024
            </p>

            <h2 className="font-playfair text-2xl font-bold text-foreground mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to these terms, please do not 
              use our services.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-foreground mt-8 mb-4">
              2. Catering Services
            </h2>
            <p className="text-muted-foreground mb-4">
              All catering services are subject to availability and confirmation. Prices are subject 
              to change without notice. A detailed quotation will be provided upon request, and 
              final pricing will be confirmed in the service agreement.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-foreground mt-8 mb-4">
              3. Booking and Cancellation
            </h2>
            <p className="text-muted-foreground mb-4">
              Bookings must be confirmed with a deposit as specified in your quote. Cancellation 
              policies vary based on the event size and timing. Please refer to your service 
              agreement for specific cancellation terms.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-foreground mt-8 mb-4">
              4. Payment Terms
            </h2>
            <p className="text-muted-foreground mb-4">
              Payment terms will be specified in your service agreement. We accept various payment 
              methods including bank transfers and online payments. Late payments may incur 
              additional charges.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-foreground mt-8 mb-4">
              5. Liability
            </h2>
            <p className="text-muted-foreground mb-4">
              While we take every precaution to ensure the quality and safety of our food, we are 
              not liable for any allergic reactions or health issues arising from the consumption 
              of our food. Please inform us of any dietary restrictions or allergies in advance.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-foreground mt-8 mb-4">
              6. Contact Information
            </h2>
            <p className="text-muted-foreground">
              For questions about these Terms of Service, please contact us at:<br />
              <strong>Email:</strong> info@nourishindia.co.in<br />
              <strong>Phone:</strong> +91 6364432179
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
