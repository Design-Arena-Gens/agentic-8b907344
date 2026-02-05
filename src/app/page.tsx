import Link from "next/link";

const projects = [
  {
    title: "Aurora Commerce",
    description:
      "A luxury e-commerce experience with immersive storytelling, product configurators, and realtime cart insights.",
    metrics: "↑36% session time · 22% uplift in conversions",
    href: "#",
    tags: ["Next.js 15", "TypeScript", "Sanity", "Edge Functions"],
  },
  {
    title: "Pulse Analytics",
    description:
      "Realtime analytics dashboard that distills product signals into a single command center for fast-moving teams.",
    metrics: "500k events/min · 96ms average response",
    href: "#",
    tags: ["React 19", "WebSockets", "Tailwind", "Vercel"],
  },
  {
    title: "Nova Systems Design",
    description:
      "A design system with adaptive theming, accessible primitives, and rich documentation powering multiple brands.",
    metrics: "15+ product teams · WCAG 2.2 AA compliant",
    href: "#",
    tags: ["Design Tokens", "Storybook", "Radix UI", "Testing Library"],
  },
];

const experiences = [
  {
    period: "2023 — Present",
    title: "Lead Frontend Consultant · Freelance",
    description:
      "Embed with product teams to craft performant interfaces, design component libraries, and mentor engineers.",
  },
  {
    period: "2021 — 2023",
    title: "Senior Frontend Engineer · PixelFoundry",
    description:
      "Scaled design systems and delivery pipelines powering consumer apps with millions of monthly active users.",
  },
  {
    period: "2019 — 2021",
    title: "Product Engineer · LaunchLab",
    description:
      "Built greenfield MVPs end to end, moving fast while grounding decisions in user research and metrics.",
  },
];

const skillCategories = [
  {
    title: "Interface Engineering",
    skills: [
      "React 19",
      "Next.js App Router",
      "Motion & Micro-interactions",
      "TypeScript",
      "Accessibility-first",
    ],
  },
  {
    title: "Design Systems",
    skills: [
      "Token pipelines",
      "Storybook",
      "Radix UI",
      "Theming & CSS Architecture",
      "Design <> Dev workflows",
    ],
  },
  {
    title: "Full Stack Foundations",
    skills: [
      "Node.js & API Routes",
      "Supabase & Prisma",
      "Server Actions",
      "Edge runtimes",
      "Automated QA",
    ],
  },
];

const testimonials = [
  {
    quote:
      "Uthman translates complex requirements into flows that just click. We ship faster because he thinks in systems.",
    name: "Amina Bello",
    role: "Director of Product · Waveform",
  },
  {
    quote:
      "Every interface feels intentional. He obsesses over the craft without losing sight of business outcomes.",
    name: "Leon Martins",
    role: "Founder · Lumen Studios",
  },
];

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-12 sm:px-10 lg:px-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="grid-pattern absolute inset-0"></div>
        <div className="absolute inset-x-12 top-12 h-32 rounded-full blur-3xl bg-gradient-to-r from-emerald-400/40 via-sky-500/30 to-purple-500/30"></div>
        <div className="absolute -left-32 top-72 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"></div>
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"></div>
      </div>

      <header className="flex items-center justify-between rounded-full bg-white/5 px-6 py-4 text-sm text-slate-200 ring-1 ring-white/10 backdrop-blur-md transition-all hover:ring-white/30">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
            UA
          </span>
          <div>
            <p className="font-semibold tracking-wide text-slate-100">
              Uthman Azeez
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Frontend Developer
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wide text-slate-300">
          <span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 text-emerald-200 ring-1 ring-emerald-300/30">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300"></span>
            Available for new briefs
          </span>
          <Link
            href="#contact"
            className="rounded-full bg-emerald-400 px-4 py-2 text-slate-950 transition hover:bg-emerald-300"
          >
            Let&apos;s talk
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/5 px-8 py-14 text-slate-100 shadow-lg shadow-emerald-500/5 ring-1 ring-white/20 backdrop-blur-xl sm:px-12 lg:px-16">
        <div className="absolute inset-y-0 right-0 h-full w-1/2 bg-gradient-to-l from-emerald-400/10 to-transparent blur-3xl"></div>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <div className="flex-1 space-y-6">
            <span className="tagline inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm uppercase tracking-[0.4em] text-slate-200">
              Building for resonance & scale
            </span>
            <h1 className="font-display text-4xl leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
              Interfaces that feel inevitable. Experiences that convert.
            </h1>
            <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
              I&apos;m Uthman Azeez — a Lagos-based frontend engineer shaping
              digital experiences with precision and warmth. I translate big
              picture vision into interfaces that align user delight with
              business results. Currently levelling up in full stack to own more
              of the journey from idea to launch.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-200">
              <Link
                href="#projects"
                className="flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2 text-slate-950 transition hover:bg-emerald-300"
              >
                View selected work
                <span aria-hidden className="text-xl">
                  →
                </span>
              </Link>
              <Link
                href="#experience"
                className="rounded-full border border-white/20 px-5 py-2 transition hover:border-emerald-300/60 hover:text-emerald-200"
              >
                Experience timeline
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 rounded-3xl border border-white/10 bg-slate-950/40 p-6 text-sm text-slate-300 shadow-inner shadow-black/30 backdrop-blur-md sm:flex-row lg:w-[360px] lg:flex-col">
            <div className="flex flex-1 flex-col gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
                Highlights
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="leading-tight">
                  <span className="font-semibold text-emerald-200">
                    7+ years
                  </span>{" "}
                  crafting immersive product experiences.
                </li>
                <li className="leading-tight">
                  Led design systems powering{" "}
                  <span className="font-semibold text-emerald-200">
                    15+ teams
                  </span>{" "}
                  globally.
                </li>
                <li className="leading-tight">
                  Championing{" "}
                  <span className="font-semibold text-emerald-200">
                    accessibility, performance & storytelling
                  </span>
                  .
                </li>
              </ul>
            </div>
            <div className="flex flex-1 flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Current focus
              </p>
              <p className="text-base text-slate-200">
                Evolving into a full stack problem solver: experimenting with
                serverless runtimes, durable edge patterns, and data-rich
                product surfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="space-y-12 rounded-[2.75rem] border border-white/10 bg-white/5 p-8 ring-1 ring-white/20 backdrop-blur-xl sm:p-12"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-200">
              Selected work
            </p>
            <h2 className="mt-3 font-display text-3xl text-slate-50 sm:text-4xl">
              Crafting memorable product moments
            </h2>
          </div>
          <p className="max-w-xl text-sm text-slate-300">
            From rapid experiments to enterprise platforms, each engagement
            balances visual poetry with robust engineering. I partner closely
            with stakeholders to ship outcomes that sustain.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-950/40 p-6 text-slate-200 shadow-2xl shadow-emerald-500/5 transition-all hover:-translate-y-1 hover:border-emerald-300/60 hover:shadow-emerald-400/20"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/5 blur-3xl transition-all group-hover:bg-emerald-400/10"></div>
              <div className="space-y-4">
                <h3 className="font-display text-2xl text-slate-50">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300">{project.description}</p>
              </div>
              <div className="mt-6 space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
                  Impact
                </p>
                <p className="text-sm text-slate-100">{project.metrics}</p>
                <ul className="flex flex-wrap gap-2 text-xs text-slate-300">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 transition group-hover:border-emerald-300/50"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={project.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 transition group-hover:text-emerald-100"
              >
                Case study
                <span aria-hidden>↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="grid gap-8 rounded-[2.75rem] border border-white/10 bg-slate-950/30 p-8 ring-1 ring-white/10 backdrop-blur-2xl sm:p-12 lg:grid-cols-3"
      >
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-200">
            Capabilities
          </p>
          <h2 className="font-display text-3xl text-slate-50">
            Precision, craft, and systems thinking
          </h2>
          <p className="text-sm text-slate-300">
            I stay close to emerging techniques while grounding every build in
            resilience and maintainability. From motion guidelines to testing
            suites, every detail compounds.
          </p>
        </div>
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="card-backdrop flex flex-col gap-5 rounded-3xl p-6"
          >
            <h3 className="text-lg font-semibold text-slate-100">
              {category.title}
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-5 rounded-full bg-emerald-300"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section
        id="experience"
        className="grid gap-10 rounded-[2.75rem] border border-white/10 bg-white/5 p-8 ring-1 ring-white/20 backdrop-blur-xl sm:p-12 lg:grid-cols-[1fr,1.2fr]"
      >
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-200">
            Experience
          </p>
          <h2 className="font-display text-3xl text-slate-50 sm:text-4xl">
            A journey of partners, products, and progress
          </h2>
          <p className="text-sm text-slate-300">
            I thrive in collaborative environments where design, engineering,
            and strategy meet. My next chapter adds deeper backend expertise to
            amplify product velocity end-to-end.
          </p>
          <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-6 text-sm text-slate-200">
            <p className="font-semibold text-emerald-200">
              Working pattern · Remote & hybrid
            </p>
            <p className="mt-2 text-slate-300">
              Available for fractional leadership, project-based engagements, or
              product partnerships with teams seeking a calm, intentional
              builder.
            </p>
          </div>
        </div>
        <div className="relative space-y-6">
          <div className="absolute left-[10px] top-2 bottom-4 w-px bg-gradient-to-b from-emerald-400/60 to-transparent"></div>
          {experiences.map((experience) => (
            <article
              key={experience.title}
              className="relative rounded-3xl border border-white/10 bg-slate-950/40 p-6 shadow-lg shadow-black/20"
            >
              <span className="absolute -left-[14px] top-8 flex h-4 w-4 items-center justify-center rounded-full border border-emerald-400/70 bg-emerald-400/40"></span>
              <p className="text-xs uppercase tracking-[0.35em] text-emerald-200">
                {experience.period}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-slate-50">
                {experience.title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                {experience.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-[2.75rem] border border-white/10 bg-slate-950/40 p-8 ring-1 ring-white/10 backdrop-blur-2xl sm:p-12 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-200">
            Voices
          </p>
          <h2 className="font-display text-3xl text-slate-50">
            Partners who trust the process
          </h2>
          <p className="text-sm text-slate-300">
            Relationships power the work. I collaborate with product leaders,
            founders, and designers to untangle complexity and ship clarity.
          </p>
        </div>
        <div className="space-y-6">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="card-backdrop relative overflow-hidden rounded-3xl p-6 text-slate-200"
            >
              <span className="absolute -top-14 right-0 text-[9rem] font-black text-white/5">
                “
              </span>
              <p className="text-lg leading-relaxed text-slate-100">
                {testimonial.quote}
              </p>
              <footer className="mt-6">
                <p className="font-semibold text-emerald-200">
                  {testimonial.name}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {testimonial.role}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="overflow-hidden rounded-[2.75rem] border border-white/10 bg-gradient-to-r from-emerald-400/20 via-sky-500/20 to-purple-500/20 p-8 ring-1 ring-white/30 backdrop-blur-2xl sm:p-12"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-100">
              Collaborate
            </p>
            <h2 className="font-display text-3xl text-slate-950 sm:text-4xl">
              Let&apos;s bring the next idea to life
            </h2>
            <p className="text-sm text-slate-900/90">
              Send a note with the challenge you&apos;re exploring. I&apos;ll
              respond within two business days with thoughts, references, and a
              path forward.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm font-medium text-slate-900">
            <Link
              href="mailto:work@uthmanazeez.com"
              className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3 text-emerald-200 shadow-lg shadow-emerald-500/30 transition hover:translate-y-0.5 hover:bg-slate-900"
            >
              work@uthmanazeez.com
              <span aria-hidden className="text-xl">
                ↗
              </span>
            </Link>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-900/70">
              Also open to speaking engagements & design sprints.
            </p>
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-center justify-between gap-4 text-xs uppercase tracking-[0.3em] text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} Uthman Azeez. Crafted with clarity.</p>
        <div className="flex gap-4 text-slate-400">
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-emerald-200"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-emerald-200"
          >
            GitHub
          </Link>
          <Link
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-emerald-200"
          >
            X
          </Link>
        </div>
      </footer>
    </main>
  );
}
