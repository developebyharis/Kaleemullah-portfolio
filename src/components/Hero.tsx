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
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      {about ? (
        <div>
          <div className="flex justify-center items-center">
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              <Image
                src={data.avatar}
                fill
                className="rounded-full object-cover border-4 border-pink-900 shadow-xl"
                alt={`${data.name} avatar`}
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/40 via-pink-400/30 to-blue-400/40 blur-2xl -z-10"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extralight tracking-tight text-stone-900">
            {data?.name}
          </h1>

          <h2 className="mt-4 text-lg md:text-xl text-stone-600 tracking-wide">
            {data?.title}{" "}
          </h2>

          <p className="mt-6 max-w-xl text-base md:text-lg text-stone-500 leading-relaxed">
            {data?.intro}
          </p>

          <div className="mt-8 flex space-x-4 justify-center">
            <Link
              href="/about"
              className="px-5 py-2 rounded-full bg-stone-900 text-white text-sm hover:bg-stone-700 transition-all"
            >
              Learn More
            </Link>
            <a
              href="#projects"
              className="px-5 py-2 rounded-full border border-stone-400 text-stone-700 text-sm hover:bg-stone-100 transition-all"
            >
              View Projects
            </a>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center pt-[5.6rem]">
          <GrainGradient
            style={{ width: 400, height: 560, borderRadius: 20 }}
            colors={["#7300ff", "#eba8ff", "#00bfff", "#2b00ff"]}
            colorBack="#000000"
            softness={0.5}
            intensity={0.5}
            noise={0.25}
            shape="corners"
            offsetX={0}
            offsetY={0}
            scale={1}
            rotation={0}
            speed={1}
          />
        </div>
      )}
    </section>
  );
}
