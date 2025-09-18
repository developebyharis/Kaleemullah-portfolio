"use client";

import { Shrub } from "lucide-react";

type Service = {
  description: string;
  keyValues: string[];
  name: string;
};
interface ServiceProp {
  data?: Service[];
}
export default function Services({ data }: ServiceProp) {
  return (
    <section className="py-10">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="font-semibold tracking-tight text-lg">Services</h2>
            <p className="text-muted-foreground mx-auto max-w-2xl tracking-tight text-base">
              We craft digital experiences that captivate and convert, bringing
              your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {data?.map((service: Service, index: number) => (
              <div
                key={index}
                className="border-border space-y-6 rounded-lg border-zinc-200 border-[1px] p-8 transition-shadow hover:shadow-sm shadow-none"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-full p-3">
                    <Shrub />
                  </div>
                  <h3 className="font-semibold text-base">{service.name}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.keyValues.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      <div className="bg-foreground h-1.5 w-1.5 rounded-full" />
                      <span className="font-medium text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
