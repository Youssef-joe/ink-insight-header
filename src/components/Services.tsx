import { FileText, BookMarked, Newspaper, MessageSquare } from "lucide-react";

const Services = () => {
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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
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
              return (
                <div 
                  key={index}
                  className="group p-6 bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-md animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <Icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
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
