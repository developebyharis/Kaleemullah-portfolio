import { FetchAbout, FetchContact, FetchHero } from "@/lib/Contentfull";
import Link from "next/link";

export default async function Header() {
  const [hero, about, contact] = await Promise.all([
    FetchHero(),
    FetchAbout(),
    FetchContact(),
  ]);

  return (
    <>
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-6">
        <div className="flex items-center px-6 py-3 bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-stone-300/30 dark:border-stone-700/30 rounded-full shadow-sm">
          <Link href="/" className="group pr-4">
            <span className="text-[0.7rem] font-light uppercase tracking-[0.15em] text-stone-700 dark:text-stone-300 group-hover:text-stone-900 dark:group-hover:text-white transition-colors duration-300">
              {hero?.name}
            </span>
          </Link>

          <div className="w-px h-4 bg-stone-300/50 dark:bg-stone-600/50"></div>

          <div className="flex items-center gap-6 pl-4">
            <Link
              href="/about"
              className="relative text-[0.7rem] font-light uppercase tracking-[0.15em] text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors duration-300"
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href={about?.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.7rem] font-light uppercase tracking-[0.15em] text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors duration-300"
            >
              CV
            </Link>

            <Link
              href={contact?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.7rem] font-light uppercase tracking-[0.15em] text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </Link>

            <Link
              href={`mailto:${contact?.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.7rem] font-light uppercase tracking-[0.15em] text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors duration-300"
            >
              Email
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
