import { getContentfulAssetUrl } from "@/lib/utils";
import { Asset } from "contentful";
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";
import MarkdownRenderer from "./MarkdownRenderer";

interface ProjectData {
  name: string;
  category: string;
  description?: string;
  image?: Asset;
  company?: string;
  industry?: string;
  location?: string;
  companySize?: string;
  website?: string;
  topics?: string;
}

export default function Casestudy({ project }: { project: ProjectData }) {
  return (
    <section className="px-4 py-16 md:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:gap-18">
        <article className="mx-auto">
          <img
            src={
              getContentfulAssetUrl(project.image as Asset) ||
              "/placeholder.svg"
            }
            alt={project.name}
            className="mb-8 aspect-video w-full max-w-4xl rounded-lg border object-cover"
          />

          <h1 className="text-2xl font-bold">{project.name}</h1>
          {project.description && (
            <div className="prose prose-md lg:prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-foreground prose-code:bg-muted prose-code:px-1 prose-code:rounded prose-pre:bg-muted prose-blockquote:border-l-primary">
              <MarkdownRenderer content={project.description} />
            </div>
          )}
        </article>

        <aside className="lg:max-w-[350px] w-full lg:max-h-[400px] bg-zinc-200 rounded-2xl">
          <div className="border-border bg-accent flex flex-col items-start rounded-lg border py-6 md:py-8">
            <div className="mb-8 px-6">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg"
                alt="placeholder"
                className="max-h-8 w-full"
              />
            </div>

            <div className="mb-5 px-6">
              <div className="mb-2 text-xs font-semibold">Company</div>
              <div className="text-muted-foreground text-xs md:text-sm">
                {project.company}
              </div>
            </div>

            <div className="mb-5 px-6">
              <div className="mb-2 text-xs font-semibold">Industry</div>
              <div className="text-muted-foreground text-xs md:text-sm">
                {project.industry}
              </div>
            </div>

            <div className="border-border mb-5 w-full border-t px-6 pt-5">
              <div className="mb-2 text-xs font-semibold">Location</div>
              <div className="text-muted-foreground text-xs md:text-sm">
                {project.location}
              </div>
            </div>

            <div className="mb-5 px-6">
              <div className="mb-2 text-xs font-semibold">Website</div>
              <div className="text-muted-foreground text-xs md:text-sm">
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground underline"
                >
                  {project.website}
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
