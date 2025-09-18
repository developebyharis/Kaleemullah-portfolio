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
    return <p>Loading</p>;
  }

  return (
    <div className="min-h-screen bg-[#F6F4F4]">
      <Header />
      <div className="hidden lg:flex fixed left-0 top-0 h-screen w-[30%] flex-col">
        <Hero about={false} />
      </div>

      <div className="lg:ml-[30%] pt-20">
        <div className="lg:h-screen lg:overflow-y-auto">
          <div className="p-6 lg:p-8 space-y-8">
            <section className="space-y-4">
              <h1 className="font-sans text-xl font-normal leading-tight text-foreground">
                About Me
              </h1>
              <div
                className="prose prose-slate prose-img:rounded-xl prose-img:border
                     dark:prose-invert max-w-none mt-10 prose-a:text-blue-600"
              >
                <Markdown remarkPlugins={[remarkGfm]}>
                  {about?.aboutMe}
                </Markdown>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-sans text-lg font-semibold text-foreground">
                Education
              </h2>
              <div className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  {education && education.length > 0
                    ? education.map((edu, idx) => (
                        <div key={idx}>
                          <h4 className="font-medium text-foreground text-sm">
                            {edu.degree}
                          </h4>
                          <p className="text-muted-foreground text-xs">
                            {edu.school}- {edu.startEnd}
                          </p>
                        </div>
                      ))
                    : null}
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-sans text-lg font-semibold text-foreground">
                Skills
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-foreground mb-3 text-sm">
                    Hard Skills
                  </h3>
                  <ul className="text-xs space-y-1">
                    {skills && skills.hardSkills.length > 0
                      ? skills.hardSkills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))
                      : null}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-3 text-sm">
                    Soft Skills
                  </h3>
                  <ul className="text-xs space-y-1">
                    {skills && skills.softSkills.length > 0
                      ? skills.softSkills.map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))
                      : null}
                  </ul>
                </div>
              </div>
            </section>

            <Services data={services} />
          </div>
        </div>
      </div>
    </div>
  );
}
