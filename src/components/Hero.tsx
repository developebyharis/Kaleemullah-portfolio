import Link from "next/link";
import { GrainGradient } from "@paper-design/shaders-react";
import { FetchHero } from "@/lib/Contentfull";
import Image from "next/image";

type HeroProps = {
  about?: boolean;
};

export default async function Hero({ about = true }: HeroProps) {
  const data = await FetchHero();

  return (
    <section className="flex flex-col justify-center items-center text-center px-8 py-12 pt-28">
      {about ? (
        <div className="w-full max-w-lg space-y-4">
          <div className="relative">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
              <Image
                src={data.avatar}
                fill
                className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                alt={`${data.name} avatar`}
                priority
              />
              <div className="absolute inset-0 rounded-full border border-gray-200 dark:border-gray-800"></div>
            </div>
            
           
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl md:text-4xl font-light tracking-tight text-black dark:text-white leading-tight">
              {data?.name}
            </h1>
            
            <div className="w-12 h-px bg-black dark:bg-white mx-auto"></div>
          </div>

          <h2 className="text-base md:text-lg font-normal text-gray-600 dark:text-gray-400 tracking-wide uppercase text-center">
            {data?.title}
          </h2>

          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed font-light max-w-sm mx-auto">
            {data?.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/about"
              className="group relative px-8 py-3 bg-black dark:bg-white text-white dark:text-black text-sm font-medium tracking-wide transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-200"
            >
              <span className="relative z-10">About Me</span>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
            </Link>
            
            <a
              href="#projects"
              className="group px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium tracking-wide hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all duration-300"
            >
              View Work
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-full min-h-[500px]">
          <div className="relative">
            <GrainGradient
              style={{ 
                width: 300, 
                height: 400, 
                borderRadius: 8,
                opacity: 0.8
              }}
              colors={["#000000", "#333333", "#666666", "#999999"]}
              colorBack="#ffffff"
              softness={0.7}
              intensity={0.3}
              noise={0.1}
              shape="corners"
              offsetX={0}
              offsetY={0}
              scale={1.2}
              rotation={0}
              speed={0.5}
            />
            
            <div className="absolute inset-0 border border-gray-200 dark:border-gray-800 rounded-lg"></div>
            
            <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-black dark:border-white opacity-30"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-black dark:border-white opacity-30"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-black dark:border-white opacity-30"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-black dark:border-white opacity-30"></div>
            
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <span className="text-xs font-mono tracking-widest text-gray-400 dark:text-gray-600 uppercase">
                Creative Process
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}