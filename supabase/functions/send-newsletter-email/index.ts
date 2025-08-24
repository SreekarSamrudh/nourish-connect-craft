import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface NewsletterRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Newsletter signup function called");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { 
      status: 405, 
      headers: corsHeaders 
    });
  }

  try {
    const { email }: NewsletterRequest = await req.json();
    console.log("Newsletter signup for email:", email);

    // Validate email
    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: "Valid email address is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email to business owner
    const emailResponse = await resend.emails.send({
      from: "Nourish India <onboarding@resend.dev>",
      to: ["bannu2610@gmail.com"],
      subject: `New Newsletter Subscription from Nourish India Website`,
      html: `
        <h2>New Newsletter Subscription</h2>
        <p>Someone has subscribed to your newsletter through the Nourish India website.</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr>
        <p><em>This subscription was submitted through the Nourish India website blog page.</em></p>
      `,
    });

    console.log("Newsletter notification email sent:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Newsletter subscription successful",
        emailId: emailResponse.data?.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("Error in send-newsletter-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to process newsletter subscription",
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);