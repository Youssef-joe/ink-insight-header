import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Portfolio = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  
  const projects = [
    {
      title: "The Art of Storytelling",
      category: "Blog Series",
      description: "A comprehensive 10-part series exploring narrative techniques across different media and genres.",
      tags: ["Creative Writing", "Analysis", "Long-form"]
    },
    {
      title: "Brand Voice Development",
      category: "Copywriting",
      description: "Developed complete brand voice guidelines and messaging for a tech startup, increasing engagement by 150%.",
      tags: ["Brand Strategy", "Business", "Marketing"]
    },
    {
      title: "Literary Book Reviews",
      category: "Content Writing",
      description: "In-depth reviews of contemporary and classic literature for online literary magazine.",
      tags: ["Book Reviews", "Analysis", "Editorial"]
    },
    {
      title: "Whispers in the Library",
      category: "Creative Fiction",
      description: "Award-winning short story featured in national literary journal exploring themes of memory and loss.",
      tags: ["Fiction", "Short Story", "Published"]
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              titleVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A selection of my recent projects and writing samples
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const { ref, isVisible } = useScrollAnimation(0.2);
              const animationClass = index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right';
              
              return (
                <div
                  key={index}
                  ref={ref}
                  className={`transition-all duration-1000 ${
                    isVisible ? animationClass : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index % 2) * 0.15}s` }}
                >
                  <Card className="group h-full hover:shadow-lg transition-all duration-500 border-border hover:border-primary hover:-translate-y-1">
                    <CardHeader>
                      <div className="mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                          {project.category}
                        </Badge>
                      </div>
                      <CardTitle className="font-serif text-2xl group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base pt-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex} 
                            variant="outline"
                            className="border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
