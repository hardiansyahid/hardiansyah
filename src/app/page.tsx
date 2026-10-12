import { poppins, montserrat } from "@/lib/fonts";
import CopyrightYear from "@/components/CopyrightYear";
import Parallax from "@/components/Parallax";
import FadeInSection from "@/components/FadeInSection";

type Job = {
  title: string;
  company: string;
  period: string;
  location?: string;
  duties: string[];
};

type Skill = {
  name: string;
  icon: string;
};

type Project = {
  title: string;
  description: string;
  stack: string[];
  link: string;
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SectionHeading = ({ children }: { children: string }) => (
  <h3
    className={`mb-8 text-xs font-semibold uppercase tracking-wider text-slate-500 ${montserrat.className}`}
  >
    {children}
  </h3>
);

export default function Home() {
  // TODO: replace these with your real info
  const name = "Hardiansyah";
  const role = "Software Engineer";
  const tagline =
    "I craft clean, usable digital products that solve real problems.";

  const about = `I'm a developer focused on building intuitive experiences and
    maintainable systems. With experience spanning front-end polish and
    back-end architecture, I enjoy turning ideas into elegant, reliable
    products.`;

  const jobs: Job[] = [
    {
      title: "Frontend Engineer",
      company: "PT Teknologi Canggih",
      period: "2022 — Present",
      location: "Jakarta, Indonesia",
      duties: [
        "Led a team of 4 engineers to ship the company dashboard, cutting load time by 60%.",
        "Designed and implemented a design system adopted across 3 product lines.",
      ],
    },
    {
      title: "Junior Developer",
      company: "Startup XYZ",
      period: "2021 — 2022",
      location: "Remote",
      duties: [
        "Built responsive landing pages and integrated CMS-driven content.",
        "Collaborated with designers to refine UI components and interactions.",
      ],
    },
  ];

  const skills: Skill[] = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "TS" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind CSS", icon: "🌬" },
    { name: "Node.js", icon: "◼" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Figma", icon: "🎨" },
    { name: "Docker", icon: "🐳" },
  ];

  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description:
        "A minimalist portfolio showcasing my work and writing, built with Next.js and Tailwind.",
      stack: ["Next.js", "Tailwind CSS", "Vercel"],
      link: "#",
    },
    {
      title: "Task Tracker App",
      description:
        "A focused productivity app for managing tasks and habits, with offline support.",
      stack: ["React", "TypeScript", "PostgreSQL"],
      link: "#",
    },
  ];

  const contact = {
    email: "hi@hardiansyah.me",
    phone: "+62 812-3456-7890",
    location: "Jakarta, Indonesia",
  };

  return (
    <>
      {/* ===== Header ===== */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-primary text-white dark:border-slate-800">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
          <a href="#" className="text-lg font-bold">
            {name}
          </a>
          <nav className="hidden gap-2 sm:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative rounded-md px-3.5 py-2 text-sm font-medium text-slate-300 transition-all hover:-translate-y-0.5 hover:text-accent"
              >
                {item.label}
                <span className="absolute inset-0 -z-10 h-full w-full rounded-md bg-accent opacity-0 transition-opacity group-hover:opacity-10" />
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ===== Hero / Banner (full width) ===== */}
      <section className="relative isolate mt-16 flex w-full min-h-[60vh] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-primary py-28">
        {/* banner overlay + parallax decorative blobs */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-transparent" />
          <Parallax
            speed={0.15}
            className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-400/25 via-teal-300/15 to-transparent blur-3xl"
          />
          <Parallax
            speed={0.3}
            className="absolute bottom-[-2.5rem] right-10 h-64 w-64 rounded-full bg-gradient-to-l from-cyan-300/20 via-fuchsia-300/15 to-transparent blur-3xl"
          />
          <Parallax
            speed={0.18}
            className="absolute top-16 left-8 h-44 w-44 rounded-full bg-gradient-to-br from-amber-300/20 via-orange-200/15 to-transparent blur-2xl"
          />
        </div>

        {/* content: 90% width, centered */}
        <FadeInSection className="relative z-10 w-[90%] max-w-3xl text-center">
          <h1
            className={`text-5xl font-extrabold tracking-tight text-white drop-shadow md:text-6xl ${montserrat.className}`}
          >
            {name}
          </h1>
          <p className="mt-4 text-center text-xl text-slate-200">
            {role}
          </p>
          <p className="mt-5 max-w-2xl text-center text-slate-300">
            {tagline}
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-medium text-white shadow-lg shadow-accent/30 ring-2 ring-transparent transition-all hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-xl"
            >
              Get in touch
            </a>
          </div>
        </FadeInSection>
      </section>

      {/* ===== Main content (90%-ish, well-spaced sections) ===== */}
      <main className="mx-auto mt-24 max-w-3xl space-y-24 px-6">
        {/* About */}
        <section id="about">
          <FadeInSection>
            <SectionHeading>About</SectionHeading>
            <p className="max-w-xl leading-relaxed text-slate-600 dark:text-slate-300">
              {about}
            </p>
          </FadeInSection>
        </section>

        {/* Experience */}
        <section id="experience">
          <FadeInSection>
            <SectionHeading>Experience</SectionHeading>
            <div className="space-y-12 border-l-2 border-slate-200 pl-0 sm:pl-8">
              {jobs.map((job) => (
                <div
                  key={`${job.title}-${job.company}`}
                  className="relative pl-8 sm:pl-0"
                >
                  <span className="absolute left-[-9px] top-1 hidden h-4 w-4 rounded-full border-2 border-white bg-accent shadow sm:block" />
                  <div className="mb-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="font-semibold text-slate-900">
                      {job.title}
                    </h4>
                    <time className="text-sm text-slate-500">{job.period}</time>
                  </div>
                  <p className="text-slate-500">{job.company}</p>
                  {job.location && (
                    <p className="text-sm text-slate-400">{job.location}</p>
                  )}
                  <ul className="mt-3 list-disc list-inside space-y-2 text-slate-600 marker:text-accent">
                    {job.duties.map((d) => (
                      <li key={d} className="text-base">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeInSection>
        </section>

        {/* Skills */}
        <section id="skills">
          <FadeInSection>
            <SectionHeading>Skills</SectionHeading>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3" role="list">
              {skills.map((s) => (
                <li
                  key={s.name}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-700 transition-colors hover:border-accent hover:bg-white dark:border-slate-800 dark:bg-slate-900/40"
                >
                  <span className="text-xl">{s.icon}</span>
                  <span className="font-medium">{s.name}</span>
                </li>
              ))}
            </ul>
          </FadeInSection>
        </section>

        {/* Projects */}
        <section id="projects">
          <FadeInSection>
            <SectionHeading>Projects</SectionHeading>
            <div className="space-y-10">
              {projects.map((p) => (
                <div
                  key={p.title}
                  className="group border-b border-slate-200 pb-8 transition-all hover:border-accent dark:border-slate-800"
                >
                  <div className="flex items-start justify-between">
                    <h4 className="text-xl font-semibold text-slate-900 group-hover:text-accent">
                      {p.title}
                    </h4>
                    {p.link !== "#" && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        View →
                      </a>
                    )}
                  </div>
                  <p className="mt-3 max-w-md text-slate-600 dark:text-slate-300">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-sm">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-slate-100 px-3 py-1 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </section>

        {/* Contact */}
        <section id="contact">
          <FadeInSection>
            <SectionHeading>Contact</SectionHeading>
            <div className="space-y-3 text-base text-slate-600 dark:text-slate-300">
              <p>
                <span className="font-medium text-slate-900 dark:text-slate-200">
                  Email:
                </span>{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="text-accent hover:underline"
                >
                  {contact.email}
                </a>
              </p>
              <p>
                <span className="font-medium text-slate-900 dark:text-slate-200">
                  Phone:
                </span>{" "}
                {contact.phone}
              </p>
              <p>
                <span className="font-medium text-slate-900 dark:text-slate-200">
                  Location:
                </span>{" "}
                {contact.location}
              </p>
            </div>
          </FadeInSection>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="mt-28 border-t border-slate-200 pb-12 pt-16 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <div className="mx-auto max-w-3xl px-6">
          <p>
            © <CopyrightYear /> {name}. All rights reserved.
          </p>
          <div className="mt-6 flex justify-center gap-8">
            <a
              href="https://github.com/hardiansyah"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/hardiansyah"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hi@hardiansyah.me"
              className="transition-colors hover:text-accent"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
