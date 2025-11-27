import { BookOpen, Pen, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  
  const highlights = [
    {
      icon: BookOpen,
      title: "Voracious Reader",
      description: "From classic literature to contemporary fiction, I immerse myself in diverse narratives that inspire my writing."
    },
    {
      icon: Pen,
      title: "Skilled Writer",
      description: "Crafting engaging content across multiple formats - from blog posts to creative pieces that captivate audiences."
    },
    {
      icon: Heart,
      title: "Passionate Storyteller",
      description: "Every word matters. I bring stories to life with authenticity, emotion, and meticulous attention to detail."
    }
  ];

  return (
    <section id="about" className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              titleVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate writer who believes that every story has the power to inspire, educate, 
              and transform. With a deep love for literature and a commitment to excellence, 
              I create content that resonates and engages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              const { ref, isVisible } = useScrollAnimation(0.2);
              
              return (
                <div 
                  key={index}
                  ref={ref}
                  className={`group p-8 bg-background border border-border hover:border-primary transition-all duration-500 hover:shadow-lg ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:animate-float">
                      <Icon className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
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

export default About;
