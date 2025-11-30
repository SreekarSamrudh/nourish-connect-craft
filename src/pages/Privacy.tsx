const Privacy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Your privacy is important to us
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
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly to us, such as when you request a quote, 
              subscribe to our newsletter, or contact us. This may include your name, email address, 
              phone number, and event details.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-foreground mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Respond to your inquiries and fulfill your requests</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our services and website</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-playfair text-2xl font-bold text-foreground mt-8 mb-4">
              3. Information Sharing
            </h2>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or otherwise transfer your personal information to outside parties. 
              This does not include trusted third parties who assist us in operating our website or 
              servicing you, as long as those parties agree to keep this information confidential.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-foreground mt-8 mb-4">
              4. Data Security
            </h2>
            <p className="text-muted-foreground mb-4">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-foreground mt-8 mb-4">
              5. Contact Us
            </h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-muted-foreground">
              <strong>Email:</strong> info@nourishindia.co.in<br />
              <strong>Phone:</strong> +91 6364432179
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
