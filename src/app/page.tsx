import { poppins, montserrat } from "@/lib/fonts";
import CopyrightYear from "@/components/CopyrightYear";

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

export default function Home() {
  // TODO: replace with your real data
  const name = "Hardiansyah";
  const role = "Full Stack Developer & UI/UX Designer";
  const tagline =
    "I build clean, usable digital products that solve real problems.";

  const about = `I'm a developer focused on crafting intuitive experiences and
    maintainable systems. With a background spanning front-end polish and
    back-end architecture, I enjoy turning ideas into reliable, elegant
    products.`;

  const jobs: Job[] = [
    {
      title: "Frontend Engineer",
      company: "PT Teknologi Canggih",
      period: "2022 — Present",
      location: "Jakarta, Indonesia",
      duties: [
        "Led a team of 4 engineers to ship the company dashboard, cutting load time by 60%.",
        "Implemented a design system adopted across 3 product lines.",
      ],
    },
    {
      title: "Junior Developer",
      company: "Startup XYZ",
      period: "2021 — 2022",
      location: "Remote",
      duties: [
        "Built responsive landing pages and integrated CMS-driven content.",
        "Collaborated closely with designers to refine UI components.",
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
        "Minimalist portfolio showcasing my work and writing, built with Next.js and Tailwind.",
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
    <main
      className={`mx-auto max-w-3xl space-y-24 px-6 py-20 text-base ${poppins.className} text-slate-700`}
    >
      {/* ===== Header ===== */}
      <header className="flex items-baseline justify-between">
        <div>
          <h1
            className={`text-4xl font-extrabold tracking-tight text-slate-900 ${montserrat.className}`}
          >
            {name}
          </h1>
          <p className="mt-1 text-sm text-slate-500">{role}</p>
        </div>
        <nav className="hidden gap-6 text-sm sm:flex">
          <a href="#about" className="hover:text-teal-600">
            About
          </a>
          <a href="#experience" className="hover:text-teal-600">
            Experience
          </a>
          <a href="#skills" className="hover:text-teal-600">
            Skills
          </a>
          <a href="#contact" className="hover:text-teal-600">
            Contact
          </a>
        </nav>
      </header>

      {/* ===== Hero ===== */}
      <section className="text-center">
        <h2
          className={`text-5xl font-extrabold tracking-tight text-slate-900 ${montserrat.className}`}
        >
          {name}
        </h2>
        <p className="mt-3 text-xl text-slate-500">{tagline}</p>
      </section>

      {/* ===== About ===== */}
      <section id="about">
        <h3
          className={`text-sm font-semibold uppercase tracking-wider text-slate-500 ${montserrat.className}`}
        >
          About
        </h3>
        <p className="mt-4 max-w-xl leading-relaxed text-slate-600">
          {about}
        </p>
      </section>

      {/* ===== Experience ===== */}
      <section id="experience">
        <h3
          className={`text-sm font-semibold uppercase tracking-wider text-slate-500 ${montserrat.className}`}
        >
          Experience
        </h3>
        <div className="mt-6 space-y-8 border-l-2 border-slate-200 pl-0 sm:pl-6">
          {jobs.map((job) => (
            <div key={`${job.title}-${job.company}`} className="relative pl-8 sm:pl-0">
              <span className="absolute left-[-9px] top-0 hidden h-4 w-4 rounded-full border-2 border-white bg-teal-600 sm:block" />
              <div className="mb-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h4 className="font-semibold text-slate-900">{job.title}</h4>
                <time className="text-sm text-slate-500">{job.period}</time>
              </div>
              <p className="text-slate-500">{job.company}</p>
              {job.location && (
                <p className="text-xs text-slate-400">{job.location}</p>
              )}
              <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-slate-600 marker:text-teal-600">
                {job.duties.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Skills ===== */}
      <section id="skills">
        <h3
          className={`text-sm font-semibold uppercase tracking-wider text-slate-500 ${montserrat.className}`}
        >
          Skills
        </h3>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3" role="list">
          {skills.map((s) => (
            <li
              key={s.name}
              className="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700"
            >
              <span className="text-base">{s.icon}</span>
              <span>{s.name}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== Projects ===== */}
      <section id="projects">
        <h3
          className={`text-sm font-semibold uppercase tracking-wider text-slate-500 ${montserrat.className}`}
        >
          Projects
        </h3>
        <div className="mt-4 space-y-6">
          {projects.map((p) => (
            <div key={p.title} className="border-t border-slate-200 pt-4">
              <h4 className="font-semibold text-slate-900">{p.title}</h4>
              <p className="mt-1 text-sm text-slate-600">{p.description}</p>
              <div className="mt-2 flex flex-wrap gap-1.5 text-xs">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-slate-100 px-2 py-0.5 text-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.link !== "#" && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-teal-600 hover:underline"
                >
                  View project →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact">
        <h3
          className={`text-sm font-semibold uppercase tracking-wider text-slate-500 ${montserrat.className}`}
        >
          Contact
        </h3>
        <div className="mt-3 space-y-1 text-sm text-slate-600">
          <p>
            <span className="font-medium text-slate-900">Email:</span>{" "}
            <a
              href={`mailto:${contact.email}`}
              className="text-teal-600 hover:underline"
            >
              {contact.email}
            </a>
          </p>
          <p>
            <span className="font-medium text-slate-900">Phone:</span>{" "}
            {contact.phone}
          </p>
          <p>
            <span className="font-medium text-slate-900">Location:</span>{" "}
            {contact.location}
          </p>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
        <p>© <CopyrightYear /> {name}. All rights reserved.</p>
        <div className="mt-3 flex gap-4 justify-center">
          <a
            href="https://github.com/hardiansyah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-600"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/hardiansyah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-600"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}
