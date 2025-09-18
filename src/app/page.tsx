import Gallery from "@/components/gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { FetchProjects } from "@/lib/Contentfull";
export default async function Page() {
  const projects = await FetchProjects();
  return (
    <div className="min-h-screen">
      <div className="hidden lg:flex h-screen">
        <div className="w-[30%] ">
          <Header />
          <Hero about={true} />
        </div>

        <div className="flex-1 pt-20 overflow-y-auto h-screen">
          <Gallery projects={projects} />
        </div>
      </div>

      <div className="lg:hidden">
        <Header />
        <Hero about={true} />
        <Gallery projects={projects} />
      </div>
    </div>
  );
}
