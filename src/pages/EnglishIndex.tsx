
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Leaf from "@/components/Leaf";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EnglishIndex = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    // For demonstration, just show a success toast
    toast({
      title: "Form submitted",
      description: "We'll contact you soon!",
    });
    reset();
  };

  return (
    <div className="min-h-screen bg-maranja-beige relative overflow-hidden">
      {/* Background corner leaves - same as the Portuguese version */}
      <Leaf 
        position="top-left" 
        variant="branch-1" 
        size={200} 
        opacity={0.12} 
        color="#1d2d35" 
        className="left-[-25px] top-[-25px]"
      />
      
      <Leaf 
        position="top-right" 
        variant="branch-2" 
        size={200} 
        opacity={0.12} 
        color="#1d2d35" 
        rotation={0}
        className="right-[-35px] top-[-35px]"
      />
      
      <Leaf 
        position="bottom-left" 
        variant="branch-3" 
        size={200} 
        opacity={0.12} 
        color="#1d2d35" 
        rotation={0}
        className="left-[-35px] bottom-[-35px]"
      />
      
      <Leaf 
        position="bottom-right" 
        variant="branch-4" 
        size={200} 
        opacity={0.12} 
        color="#1d2d35" 
        rotation={0}
        className="right-[-35px] bottom-[-35px]"
      />

      {/* Left side leaves */}
      <Leaf 
        variant="new-leaf-1" 
        size={160} 
        opacity={0.12} 
        color="#1d2d35" 
        className="absolute left-[-20px] top-[25%]"
      />
      
      <Leaf 
        variant="new-leaf-3" 
        size={140} 
        opacity={0.12} 
        color="#1d2d35" 
        className="absolute left-[-20px] top-[65%]"
      />

      {/* Right side leaves */}
      <Leaf 
        variant="new-leaf-2" 
        size={160} 
        opacity={0.12} 
        color="#1d2d35" 
        rotation={0}
        className="absolute right-[-20px] top-[35%]"
      />
      
      <Leaf 
        variant="new-leaf-4" 
        size={140} 
        opacity={0.12} 
        color="#1d2d35" 
        rotation={0}
        className="absolute right-[-20px] top-[75%]"
      />

      <Header />
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="px-4 pt-16 pb-24 md:pt-20 md:pb-32 container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 lg:pr-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-maranja-darkblue leading-tight mb-4">
                Strategic Marketing and Automation Solutions
              </h1>
              <p className="text-lg md:text-xl text-maranja-darkblue/80 mb-8">
                Expand your business with advanced digital marketing tools and process automation
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-maranja-darkblue hover:bg-maranja-darkblue/90 text-white font-semibold px-8"
                  onClick={() => document.getElementById("services")?.scrollIntoView({behavior: "smooth"})}
                >
                  Our Services
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-maranja-darkblue text-maranja-darkblue hover:bg-maranja-darkblue/10"
                  onClick={() => document.getElementById("contact-us")?.scrollIntoView({behavior: "smooth"})}
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="mt-10 md:mt-0 md:w-1/2">
              <img 
                src="/lovable-uploads/e7a6b33a-11f2-4a69-a413-02eba481ece1.png" 
                alt="Digital Marketing Strategy" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-maranja-cream py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-maranja-darkblue text-center mb-12">
              Our Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Digital Marketing */}
              <Card className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4 text-center">
                  <img 
                    src="/lovable-uploads/72e033cf-c47c-4628-8356-1112a2be9369.png" 
                    alt="Digital Marketing" 
                    className="h-16 w-16 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-maranja-darkblue text-center mb-3">
                  Digital Marketing
                </h3>
                <p className="text-maranja-darkblue/80 text-center">
                  We develop effective strategies to boost your online presence and attract qualified leads.
                </p>
              </Card>
              
              {/* Data Analysis */}
              <Card className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4 text-center">
                  <img 
                    src="/lovable-uploads/781fb56a-1cb8-4504-844e-774d19f133c1.png" 
                    alt="Data Analysis" 
                    className="h-16 w-16 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-maranja-darkblue text-center mb-3">
                  Data Analysis
                </h3>
                <p className="text-maranja-darkblue/80 text-center">
                  We transform your data into actionable insights to drive growth and optimize operations.
                </p>
              </Card>
              
              {/* Process Automation */}
              <Card className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4 text-center">
                  <img 
                    src="/lovable-uploads/a10dbad2-9400-4aa3-a107-909e5ea2a372.png" 
                    alt="Process Automation" 
                    className="h-16 w-16 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-maranja-darkblue text-center mb-3">
                  Process Automation
                </h3>
                <p className="text-maranja-darkblue/80 text-center">
                  We automate repetitive tasks to improve efficiency and reduce operational costs.
                </p>
              </Card>
            </div>

            {/* On-Demand Automation Card */}
            <div className="mt-16">
              <Card className="bg-maranja-darkblue p-8 rounded-lg shadow-lg text-white">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-3/5 mb-6 md:mb-0 md:pr-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">On-Demand Automation Card</h3>
                    <p className="text-white/90 mb-4">
                      Our innovative automation card system allows you to request automation solutions on demand. Pay only for what you need, when you need it.
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-6">
                      <li>Flexible automation solutions</li>
                      <li>No long-term commitments</li>
                      <li>Pay-as-you-go model</li>
                      <li>Customized to your business needs</li>
                    </ul>
                    <Button className="bg-white text-maranja-darkblue hover:bg-white/90">
                      Learn More
                    </Button>
                  </div>
                  <div className="md:w-2/5">
                    <img 
                      src="/lovable-uploads/59dfa3de-8a05-4a4b-8f09-64c53bae359a.png" 
                      alt="Automation Card" 
                      className="w-full h-auto rounded-md shadow-md"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-us" className="py-16 md:py-24 container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-maranja-darkblue text-center mb-12">
              Contact Us
            </h2>
            
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-maranja-darkblue mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      {...register("name", { required: "Name is required" })}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message as string}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-maranja-darkblue mb-1">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      placeholder="Your phone number"
                      {...register("phone", { required: "Phone is required" })}
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone.message as string}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-maranja-darkblue mb-1">
                    How can we help you?
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your needs..."
                    rows={4}
                    {...register("message", { required: "Message is required" })}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message.message as string}</p>
                  )}
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-maranja-darkblue hover:bg-maranja-darkblue/90 text-white font-semibold py-3"
                  >
                    Request Contact
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default EnglishIndex;
