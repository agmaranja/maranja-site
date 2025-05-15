
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nome, telefone, email, mensagem } = await req.json();
    
    // Setup Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    
    // Primary recipient
    const to = "agmaranja@gmail.com";
    
    // CC recipients
    const cc = [
      "bmeduneckas@gmail.com", 
      "denermelo2@gmail.com", 
      "contato@maranja.com.br"
    ];
    
    // Compose email subject and body
    const subject = `Novo contato do site: ${nome}`;
    const htmlBody = `
      <h2>Novo contato recebido do site</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Telefone:</strong> ${telefone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensagem:</strong> ${mensagem || "Não informada"}</p>
      <hr>
      <p>Este email foi enviado automaticamente pelo formulário de contato do site Maranjá.</p>
    `;
    
    // Send email using Supabase Edge Function
    const { error } = await supabase.functions.invoke("resend-email", {
      body: {
        to,
        cc,
        subject,
        html: htmlBody,
      },
    });
    
    if (error) {
      throw new Error(error.message);
    }
    
    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sending contact form:", error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
