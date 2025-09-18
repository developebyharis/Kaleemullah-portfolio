import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import {
  FetchAbout,
  FetchEducation,
  FetchServices,
  FetchSkills,
} from "@/lib/Contentfull";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function AboutPage() {
  const [about, skills, services, education] = await Promise.all([
    FetchAbout(),
    FetchSkills(),
    FetchServices(),
    FetchEducation(),
  ]);

  if (!education) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="">
      <Header />

      <div className="hidden lg:flex fixed left-0 top-0 ">
        <Hero about={false} />
      </div>

      <div className="lg:ml-[20%] pt-20">
        <div className="">
          <div className="p-6 lg:p-12 max-w-4xl mx-auto space-y-16">
            <section className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  About Me
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="prose prose-slate prose-lg prose-img:rounded-xl prose-img:border prose-img:shadow-md dark:prose-invert max-w-none prose-a:text-primary prose-a:font-medium prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed">
                  <Markdown remarkPlugins={[remarkGfm]}>
                    {about?.aboutMe}
                  </Markdown>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-primary/50 rounded-full"></div>
                  Education
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education && education.length > 0 ? (
                  education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="group bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors duration-300">
                          {edu.degree}
                        </h4>
                        <div className="flex flex-col space-y-1">
                          <p className="text-muted-foreground font-medium text-sm">
                            {edu.school}
                          </p>
                          <p className="text-xs text-muted-foreground/80 bg-muted/50 px-3 py-1 rounded-full w-fit">
                            {edu.startEnd}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-8 text-muted-foreground">
                    No education data available
                  </div>
                )}
              </div>
            </section>

            <section className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-primary/50 rounded-full"></div>
                  Skills & Expertise
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <h3 className="font-semibold text-foreground text-lg">
                      Technical Skills
                    </h3>
                  </div>

                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                    <div className="flex flex-wrap gap-2">
                      {skills && skills.hardSkills.length > 0 ? (
                        skills.hardSkills.map((skill, idx) => (
                          <span
                            key={skill}
                            className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-200 hover:scale-105"
                            style={{ animationDelay: `${idx * 50}ms` }}
                          >
                            {skill}
                          </span>
                        ))
                      ) : (
                        <p className="text-muted-foreground text-sm">
                          No technical skills listed
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <h3 className="font-semibold text-foreground text-lg">
                      Soft Skills
                    </h3>
                  </div>

                  <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                    <div className="flex flex-wrap gap-2">
                      {skills && skills.softSkills.length > 0 ? (
                        skills.softSkills.map((skill, idx) => (
                          <span
                            key={skill}
                            className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium bg-secondary/10 text-secondary-foreground border border-secondary/20 hover:bg-secondary/20 transition-all duration-200 hover:scale-105"
                            style={{ animationDelay: `${idx * 50}ms` }}
                          >
                            {skill}
                          </span>
                        ))
                      ) : (
                        <p className="text-muted-foreground text-sm">
                          No soft skills listed
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-primary/50 rounded-full"></div>
                  Services
                </h2>
              </div>

              <div className="p-2">
                <Services data={services} />
              </div>
            </section>
          </div>

          <div className="h-20"></div>
        </div>
      </div>
    </div>
  );
}
