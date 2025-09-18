import { FetchContact } from "@/lib/Contentfull";
import { Shrub, CheckCircle2 } from "lucide-react";
import Link from "next/link";

type Service = {
  description: string;
  keyValues: string[];
  name: string;
};

interface ServiceProp {
  data?: Service[];
}

export default async function Services({ data }: ServiceProp) {
  const contact = await FetchContact();

  if (!data || data.length === 0) {
    return (
      <section className="py-12">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shrub className="w-8 h-8 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground">No services available</p>
        </div>
      </section>
    );
  }

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="text-left">
            <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
              Crafting digital experiences that captivate and convert, bringing
              your vision to life with cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
            {data.map((service: Service, index: number) => (
              <div
                key={index}
                className="group bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl p-4 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
                      <Shrub className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.name}
                      </h3>
                      <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-primary/50 transition-all duration-500"></div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-base">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Key Features
                    </h4>
                    <div className="space-y-3">
                      {service.keyValues.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-start gap-3 group/item"
                          style={{ animationDelay: `${itemIndex * 100}ms` }}
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="w-4 h-4 text-primary/70 group-hover/item:text-primary group-hover/item:scale-110 transition-all duration-200" />
                          </div>
                          <span className="font-medium text-sm text-foreground group-hover/item:text-primary transition-colors duration-200 leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 bg-muted/30 backdrop-blur-sm rounded-full flex items-center justify-center text-xs font-bold text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Ready to bring your project to life?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how these services can help achieve your goals.
              </p>
              <Link
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full font-medium transition-all duration-300 hover:scale-105 cursor-pointer border border-primary/30"
              >
                <span>Get in touch</span>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
