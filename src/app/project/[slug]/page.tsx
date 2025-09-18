import Casestudy from "@/components/Casestudy";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { FetchProjects } from "@/lib/Contentfull";
import { generateSlug } from "@/lib/utils";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const projects = await FetchProjects();

  const project = projects?.find((p) => generateSlug(p.name) === slug);
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F6F4F4" }}>
      <Header />

      <div className="hidden lg:flex fixed left-0 top-2 h-screen w-[30%] flex-col">
        <Hero about={false} />
      </div>
      <div className="lg:ml-[30%] lg:pt-4 pt-12">
        <div className="lg:h-screen lg:overflow-y-auto">
          <div className="flex-1 overflow-y-auto">
            <Casestudy project={project} />
          </div>
        </div>
      </div>
    </div>
  );
}
