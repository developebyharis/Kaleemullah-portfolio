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
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full shadow-sm">
        <div className="flex items-center space-x-6">
          <Link href="/" className="group">
            <div className="text-xs font-medium tracking-widest text-stone-600 uppercase group-hover:text-stone-800 transition-all duration-300">
              {hero.name}
            </div>
          </Link>

          <div className="w-px h-3 bg-stone-400/50"></div>

          <div className="flex items-center space-x-5">
            <Link
              href="/about"
              className="font-sans font-light text-xs text-stone-600 hover:text-stone-800 transition-all duration-300 uppercase tracking-wide"
            >
              About
            </Link>

            <Link
              href={about.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-light text-xs text-stone-600 hover:text-stone-800 transition-all duration-300 uppercase tracking-wide"
            >
              CV
            </Link>

            <Link
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-light text-xs text-stone-600 hover:text-stone-800 transition-all duration-300 uppercase tracking-wide"
            >
              LinkedIn
            </Link>
            <Link
              href={`mailto:${contact.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-light text-xs text-stone-600 hover:text-stone-800 transition-all duration-300 uppercase tracking-wide"
            >
              Email
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
