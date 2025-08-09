import Image from "next/image";
import Link from "next/link";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { About } from "@/components/About";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[var(--surface)]/90 bg-[var(--surface)]/90 border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link
          href="#home"
          className="flex items-center gap-2"
          aria-label="Bricks Infraspace home"
        >
          <Image
            src="/logo-bricks-infraspace.jpeg"
            alt="Bricks Infraspace logo"
            width={160}
            height={40}
            priority
            className="h-8 w-auto md:h-9"
          />
          <span className="sr-only">Bricks Infraspace</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#services" className="hover:opacity-70 link-underline">
            Services
          </a>
          <a href="#projects" className="hover:opacity-70 link-underline">
            Projects
          </a>
          <a href="#about" className="hover:opacity-70 link-underline">
            About
          </a>
          <a href="#contact" className="hover:opacity-70 link-underline">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="btn btn-brand md:inline-flex hidden rounded-full px-4 py-2 text-sm font-medium"
        >
          Get a Quote
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--accent)]/70 to-[var(--surface)]" />
      <div className="grid-overlay" />
      <div className="blob" />
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Building spaces that last and inspire
          </h1>
          <p className="text-base md:text-lg text-[var(--muted-foreground)] max-w-prose">
            We deliver residential and commercial projects with craftsmanship,
            transparency, and on-time execution.
          </p>
          <div className="flex gap-3">
            <a
              href="#projects"
              className="btn btn-brand rounded-full px-5 py-2.5 text-sm font-medium"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--surface-muted)] focus-visible:outline-[var(--ring)]"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--border)]">
          <Image
            src="/IMG_3383.jpg"
            alt="Featured project poster"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
          />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <footer className="border-t border-[var(--border)] mt-16">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-[var(--muted-foreground)] flex items-center justify-between">
          <p>© {new Date().getFullYear()} Bricks Infraspace</p>
          <a href="#home" className="hover:opacity-70">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
