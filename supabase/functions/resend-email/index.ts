
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { Resend } from "npm:resend@1.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Initialize Resend with API key from environment variable
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    const { to, cc, subject, html, text } = await req.json();
    
    const emailData = {
      from: "Maranjá <no-reply@maranja.com.br>",
      to: [to],
      subject: subject,
      html: html,
      text: text,
    };
    
    // Add CC recipients if provided
    if (cc && Array.isArray(cc) && cc.length > 0) {
      emailData.cc = cc;
    }
    
    const { data, error } = await resend.emails.send(emailData);
    
    if (error) {
      throw new Error(error.message);
    }
    
    return new Response(
      JSON.stringify({ success: true, data }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
