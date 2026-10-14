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

type Education = {
  school: string;
  period: string;
  degree: string;
  gpa?: string;
};

type SkillGroup = {
  category: string;
  items: string[];
};

type Project = {
  title: string;
  role: string;
  description: string;
  stack: string[];
  link: string;
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SectionHeading = ({ children }: { children: string }) => (
  <h3
    className={`mb-8 text-xs font-semibold uppercase tracking-wider text-slate-400 ${montserrat.className}`}
  >
    {children}
  </h3>
);

export default function Home() {
  // ---- Data copied verbatim from /content.md ----
  const name = "Hardiansyah";
  const role = "Software Engineer";
  const tagline =
    "I craft clean, usable digital products that solve real problems.";

  const about = `Software Engineer with 5+ years of experience, currently a Full Stack Developer at OttoDigital Group.
I specialize in PHP (Laravel), SQL, and JavaScript (Vue.js), building systems with a focus on clean architecture and pragmatic problem-solving. I use AI-assisted development tools to move faster, but I still care deeply about solid engineering fundamentals — how and why a system is built, not just that it works.
Outside of engineering, I have a strong interest in philosophy, art, and science — which shapes how I approach problems: curious, structured, and open to unconventional angles.`;

  const jobs: Job[] = [
    {
      title: "Full Stack Developer",
      company: "PT Perkebunan Nusantara",
      period: "Aug 2020 — Feb 2021",
      location: "Internship",
      duties: [
        `Maintained, optimized, and supported the official PTPN VII website using Laravel.`,
        `Developed and enhanced features for the internal e-Office application used by PTPN VII employees using Laravel.`,
      ],
    },
    {
      title: "Software Engineer",
      company: "PT Akhdani Reka Solusi",
      period: "Jun 2021 — Jan 2026",
      location: "Full time",
      duties: [
        `Co-led the development of an internal Property Management System (PMS) using Laravel and Spring Boot.`,
        `Developed and optimized features for a national anti-corruption prevention network platform using Quasar and Phalcon.`,
        `Developed and enhanced electronic data exchange and public officials' asset reporting systems using CodeIgniter and Yii.`,
        `Design and developed a risk modeling application and dashboard for a state-owned electricity company using Laravel.`,
        `Developed a military recruitment system for a national defense institution using Laravel and React Native.`,
        `Developed a recruitment management system for a state-owned pharmaceutical company using ASP.NET MVC.`,
      ],
    },
    {
      title: "Full Stack Developer",
      company: "OttoDigital Group",
      period: "Feb 2026 — Present",
      location: "Full time",
      duties: [
        `Developed and maintained the HelloBill Vica Back Office Point of Sale (POS) application using Laravel.`,
        `Developed and maintained Point of Sale Food & Beverage (POS F&B) web portal and APIs using Laravel and CodeIgniter.`,
        `Developed and maintained Point of Sale Retail web portal and APIs using Laravel and CodeIgniter.`,
        `Built and maintained backend services consumed by mobile applications for POS operations, transactions, and business management.`,
      ],
    },
  ];

  const education: Education[] = [
    {
      school: "Universitas Teknokrat Indonesia",
      period: "2026 - 2020",
      degree: "Bachelor's degree, Sistem Informasi",
      gpa: "GPA : 3,80",
    },
  ];

  const skillGroups: SkillGroup[] = [
    {
      category: "Programming Language",
      items: ["Php", "Python", "Go", "Javascript"],
    },
    {
      category: "Framework & Library",
      items: [
        "Laravel",
        "Codeigniter",
        "Vue.js",
        "React.js",
        "Quasar",
        "Tailwind",
        "Bootstrap",
      ],
    },
    { category: "Database", items: ["PostgreSQL", "MySQL", "MongoDB"] },
    { category: "Other Tools", items: ["Git", "Sonarqube", "Tableau"] },
  ];

  const projects: Project[] = [
    {
      title: "Maintenance & Development Hellobill Vica",
      role: "Fullstack Developer",
      description:
        `Hellobill adalah aplikasi Point Of Sales (POS) berbasis subscription milik OttoDigital Group part of salim group.`,
      stack: ["Laravel", "Codeigniter", "Html", "Javascript", "Css"],
      link: "https://hellobill.id/en/",
    },
    {
      title: "Maintenance & Development e-LHKPN",
      role: "Fullstack Developer",
      description:
        `e-LHKPN merupakan daftar seluruh harta kekayaan yang dimiliki oleh penyelenggara negara, Instrumen ini bertujuan mencegah korupsi (KKN) dan meningkatkan transparansi.`,
      stack: ["Codeigniter", "Yii", "MySQL", "Html", "Javascript", "Css"],
      link: "https://elhkpn.kpk.go.id",
    },
    {
      title: "Maintenance & Development Jaringan Pencegahan Korupsi (JAGA)",
      role: "Senior Frontend Developer",
      description:
        `JAGA adalah aplikasi pencegahan korupsi yang mendorong transparansi penyelenggaraan pelayanan publik dan pengolahan aset negara.`,
      stack: ["Quasar Framework", "Phalcon", "PostgreSQL"],
      link: "https://jaga.id",
    },
    {
      title: "Development WebApp Rekrutmen Biofarma",
      role: "Frontend Developer",
      description:
        `Biofarma rekrutmen adalah aplikasi yang mendukung proses rekrutmen karyawan baru, manage lowongan, test cat hingga input nilai test peserta.`,
      stack: ["ASP.NET Core", "Html", "Javascript", "Css"],
      link: "https://rekrutmen.biofarma.co.id/",
    },
    {
      title: "Maintenance & Development Website PTPN 7",
      role: "Fullstack Developer",
      description:
        `PTPN 7 merupakan perusahaan BUMN yang bergerak di sektor perkebunan, fokus pada pengelolaan komoditas agribisnis serta mendukung ketahanan pangan nasional.`,
      stack: ["Laravel", "PostgreSQL", "Html", "Javascript", "Css"],
      link: "https://www.ptpn7.com/",
    },
  ];

  const contact = {
    email: "hardiansyahmail@gmail.com",
  };

  return (
    <>
      {/* ===== Header ===== */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800 bg-primary text-white">
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

        <FadeInSection className="relative z-10 w-[90%] max-w-3xl text-center">
          <h1
            className={`text-5xl font-extrabold tracking-tight text-white drop-shadow md:text-6xl ${montserrat.className}`}
          >
            {name}
          </h1>
          <p className="mt-4 text-slate-200">{role}</p>
          <p className="mt-5 text-slate-300">{tagline}</p>
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

      {/* ===== Main content ===== */}
      <main className="mx-auto mt-24 max-w-3xl space-y-24 px-6">
        {/* About */}
        <section id="about">
          <FadeInSection>
            <SectionHeading>About</SectionHeading>
            <p className="max-w-xl leading-relaxed text-slate-300">
              {about}
            </p>
          </FadeInSection>
        </section>

        {/* Experience */}
        <section id="experience">
          <FadeInSection>
            <SectionHeading>Experience</SectionHeading>
            <div className="space-y-16 border-l-2 border-slate-700 pl-6 sm:pl-8">
              {jobs.map((job) => (
                <article key={`${job.title}-${job.company}`} className="relative">
                  <div className="mb-1 flex items-baseline gap-2.5">
                    <span className="text-xl text-accent" aria-hidden>
                      ▸
                    </span>
                    <h4 className="font-semibold text-white">{job.title}</h4>
                    <time className="ml-auto text-sm text-slate-400">
                      {job.period}
                    </time>
                  </div>
                  <p className="text-slate-300">{job.company}</p>
                  {job.location && (
                    <p className="text-sm text-slate-400">{job.location}</p>
                  )}
                  <ul className="mt-3 list-disc list-outside pl-5 space-y-2 text-slate-300 marker:text-accent marker:w-2">
                    {job.duties.map((d) => (
                      <li key={d} className="leading-snug">
                        {d}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </FadeInSection>
        </section>

        {/* Education */}
        <section id="education">
          <FadeInSection>
            <SectionHeading>Education</SectionHeading>
            <div className="space-y-6">
              {education.map((e) => (
                <div key={e.school}>
                  <div className="mb-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="font-semibold text-white">{e.school}</h4>
                    <span className="text-sm text-slate-400">{e.period}</span>
                  </div>
                  <p className="text-slate-300">{e.degree}</p>
                  {e.gpa && <p className="text-sm text-slate-400">{e.gpa}</p>}
                </div>
              ))}
            </div>
          </FadeInSection>
        </section>

        {/* Skills */}
        <section id="skills">
          <FadeInSection>
            <SectionHeading>Skills</SectionHeading>
            <div className="space-y-6">
              {skillGroups.map((g) => (
                <div key={g.category}>
                  <h4 className="text-sm font-medium text-slate-300">
                    {g.category}
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-200"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
                  className="group border-b border-slate-700 pb-8 transition-all hover:border-accent"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-semibold text-white transition-colors group-hover:text-accent">
                        {p.title}
                      </h4>
                      <p className="mt-0.5 text-sm text-slate-400">
                        {p.role}
                      </p>
                    </div>
                    {p.link && (
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
                  <p className="mt-3 max-w-md text-slate-300">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-sm">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-slate-800 px-3 py-1 text-sm text-slate-300"
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
            <div className="space-y-3 text-base text-slate-300">
              <p>
                <span className="font-medium text-white">Email:</span>{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="text-accent hover:underline"
                >
                  {contact.email}
                </a>
              </p>
            </div>
          </FadeInSection>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="mt-28 border-t border-slate-800 pb-12 pt-16 text-center text-sm text-slate-400">
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
              href="https://linkedin.com/in/hardiansyahid"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${contact.email}`}
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
