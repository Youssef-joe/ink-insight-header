import { FileText, BookMarked, Newspaper, MessageSquare } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  
  const services = [
    {
      icon: FileText,
      title: "Blog Writing",
      description: "Engaging, SEO-optimized blog posts that inform and captivate your audience."
    },
    {
      icon: BookMarked,
      title: "Creative Writing",
      description: "Short stories, poetry, and creative content that brings imagination to life."
    },
    {
      icon: Newspaper,
      title: "Copywriting",
      description: "Compelling copy that converts readers into customers with persuasive messaging."
    },
    {
      icon: MessageSquare,
      title: "Content Strategy",
      description: "Strategic content planning that aligns with your brand voice and goals."
    }
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              titleVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              What I Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering high-quality content tailored to your needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const { ref, isVisible } = useScrollAnimation(0.2);
              const animationClass = index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right';
              
              return (
                <div 
                  key={index}
                  ref={ref}
                  className={`group p-6 bg-card border border-border hover:border-primary transition-all duration-500 hover:shadow-md hover:-translate-y-2 ${
                    isVisible ? animationClass : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <Icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
