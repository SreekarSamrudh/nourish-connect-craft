import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface InquiryEmailRequest {
  name: string;
  email: string;
  phone: string;
  eventType?: string;
  guestCount?: string;
  eventDate?: string;
  customMessage?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Inquiry email function called");
  
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
    const inquiryData: InquiryEmailRequest = await req.json();
    console.log("Inquiry data received:", inquiryData);

    // Validate required fields
    if (!inquiryData.name || !inquiryData.email || !inquiryData.phone) {
      return new Response(
        JSON.stringify({ error: "Name, email, and phone are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Format the inquiry details for email
    const inquiryDetails = `
      <h2>New Catering Inquiry from Nourish India Website</h2>
      
      <h3>Contact Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${inquiryData.name}</li>
        <li><strong>Email:</strong> ${inquiryData.email}</li>
        <li><strong>Phone:</strong> ${inquiryData.phone}</li>
      </ul>
      
      <h3>Event Details:</h3>
      <ul>
        <li><strong>Event Type:</strong> ${inquiryData.eventType || 'Not specified'}</li>
        <li><strong>Number of Guests:</strong> ${inquiryData.guestCount || 'Not specified'}</li>
        <li><strong>Preferred Date:</strong> ${inquiryData.eventDate || 'Not specified'}</li>
      </ul>
      
      ${inquiryData.customMessage ? `
      <h3>Additional Requirements:</h3>
      <p>${inquiryData.customMessage}</p>
      ` : ''}
      
      <hr>
      <p><em>This inquiry was submitted through the Nourish India website contact form.</em></p>
    `;

    // Send email notification to business owner
    const emailResponse = await resend.emails.send({
      from: "Nourish India <inquiries@yourdomain.com>",
      to: ["bannu2610@gmail.com"],
      subject: `New Catering Inquiry from ${inquiryData.name}`,
      html: inquiryDetails,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Inquiry submitted successfully",
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
    console.error("Error in send-inquiry-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to send inquiry",
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
