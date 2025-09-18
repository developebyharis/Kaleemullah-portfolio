"use client";

import { generateSlug, getContentfulAssetUrl } from "@/lib/utils";
import { Asset } from "contentful";
import Link from "next/link";

interface Project {
  name: string;
  image?: Asset;
}

interface GalleryProps {
  projects?: Project[];
}

export default function Gallery({ projects }: GalleryProps) {
  const categories = ["All", "UI/UX", "Branding", "Campaign", "Print"];

  return (
    <div className="flex flex-col h-full">
      {/* Projects grid */}
      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-4 auto-rows-max">
          {projects && projects.length > 0 ? (
            projects.map((project) => (
              <Link
                key={project.name}
                href={`/project/${generateSlug(project.name)}`}
                className="group relative bg-white rounded-[22px] overflow-hidden cursor-pointer w-full aspect-[4/3] block"
              >
                <img
                  src={
                    getContentfulAssetUrl(project.image as Asset) ||
                    "/placeholder.svg?height=300&width=400&query=project image"
                  }
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-neutral-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="absolute bottom-0 left-0 text-white text-xl font-medium px-5 py-1.5">
                    {project.name}
                  </h3>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center text-neutral-500 text-sm">
              No projects available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
