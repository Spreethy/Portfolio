import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Send,
  MapPin,
  Code2,
  Layers,
  Database,
  GitBranch,
  Brain,
  Briefcase,
  GraduationCap,
  Award,
  FileText,
  BadgeCheck,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Sparkles,
  BookOpen,
  Sun,
  Moon,
} from "lucide-react";
import portrait from "@/assets/preethy.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Preethy Srinevasan — Software Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Preethy Srinevasan — Computer Science graduand, full-stack developer with Angular, .NET, and SQL Server experience, based in Kondavil, Jaffna.",
      },
      { property: "og:title", content: "Preethy Srinevasan — Portfolio" },
      {
        property: "og:description",
        content:
          "Full-stack developer and Computer Science graduand. Explore projects, publications, and experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-primary/10 transition"
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-bold tracking-widest text-lg">
          PREETHY<span className="text-primary">.</span>
        </a>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-foreground hover:text-primary transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-name)" }}>
            {title}
          </span>
        </h2>
        {children}
      </div>
    </section>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`group rounded-2xl border border-border/60 bg-card/60 backdrop-blur p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all ${className}`}
    >
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-up">
            Hi, I'm{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-name)" }}
            >
              Preethy Srinevasan
            </span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-foreground/90 animate-fade-up animation-delay-100">
            Software Engineer{" "}
            <span className="text-[color:var(--brand-coral)]">| Full-Stack Developer</span>
          </p>
          <p className="mt-2 text-lg text-muted-foreground animate-fade-up animation-delay-200">
            Computer Science Graduand · University of Jaffna
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-2 text-sm text-muted-foreground animate-fade-up animation-delay-300">
            <MapPin className="h-4 w-4 text-primary" />
            Kondavil, Jaffna, Sri Lanka
          </div>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up animation-delay-400">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium shadow-lg shadow-primary/25 hover:brightness-110 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-white hover:brightness-110 hover:-translate-y-0.5 transition-all"
              style={{ backgroundColor: "var(--brand-coral)" }}
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-center animate-fade-in animation-delay-200">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-full blur-3xl opacity-50 animate-float"
              style={{ background: "var(--gradient-name)" }}
            />
            <div
              className="relative rounded-full p-1"
              style={{ background: "var(--gradient-name)" }}
            >
              <div className="rounded-full w-64 h-64 md:w-80 md:h-80 overflow-hidden border-4 border-background bg-background">
                <img
                  src={portrait}
                  alt="Preethy Srinevasan"
                  width={704}
                  height={704}
                  className="w-full h-full object-cover scale-[1.35]"
                  style={{ objectPosition: "80% 22%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const traits = [
    { icon: Code2, label: "Full-Stack Developer" },
    { icon: Sparkles, label: "AI Enthusiast" },
    { icon: BookOpen, label: "Passionate Educator" },
  ];
  return (
    <Section id="about" title="About Me">
      <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        Computer Science graduand with Software Engineering internship experience in
        full-stack web development using Angular, TypeScript, C#, .NET Web API, and
        SQL Server. Passionate about software engineering, full-stack application
        development, cloud technologies, and building scalable, reliable software
        solutions.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {traits.map(({ icon: Icon, label }, i) => (
          <div
            key={label}
            className="flex flex-col items-center gap-3 animate-fade-up"
            style={{ animationDelay: `${(i + 1) * 150}ms` }}
          >
            <div className="h-16 w-16 rounded-full bg-primary/15 flex items-center justify-center hover:scale-110 hover:bg-primary/25 transition-all">
              <Icon className="h-7 w-7 text-primary" />
            </div>
            <span className="text-sm text-center font-medium">{label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  const groups = [
    {
      icon: Code2,
      title: "Programming Languages",
      items: ["Java", "C#", "TypeScript", "JavaScript", "Python", "Dart", "SQL"],
    },
    {
      icon: Layers,
      title: "Frameworks & Technologies",
      items: [
        "Angular",
        "React.js",
        "Flutter",
        "Laravel",
        "Node.js",
        ".NET Framework",
        ".NET Web API",
        "RESTful API Development",
      ],
    },
    {
      icon: Database,
      title: "Databases",
      items: ["SQL Server", "MySQL", "MongoDB"],
    },
    {
      icon: GitBranch,
      title: "Version Control & DevOps",
      items: ["Git", "Azure DevOps"],
    },
    {
      icon: Brain,
      title: "AI & Data Science",
      items: ["Machine Learning", "Deep Learning"],
    },
  ];
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid md:grid-cols-2 gap-6">
        {groups.map(({ icon: Icon, title, items }) => (
          <Card key={title}>
            <div className="flex items-center gap-3 mb-4">
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30"
                >
                  {i}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  const items = [
    {
      role: "Software Engineering Intern",
      org: "Unicom SD (Pvt) Ltd",
      period: "Jun 2025 – Dec 2025",
      summary:
        "Contributed to Optimo, a corporate booking and venue/facility management platform, developing production features using Angular, TypeScript, C#, .NET Web API, and SQL Server.",
      bullets: [
        "Developed RESTful APIs and Angular features for venue, facility, package, booking, and authentication modules.",
        "Resolved production and UAT issues across booking, invoicing, payment, and query builder modules.",
        "Integrated the N-Genius payment gateway by implementing API communication, payment processing, and refund workflows.",
        "Collaborated with developers, QA engineers, and product teams using Git and Azure DevOps throughout Agile sprint and release cycles.",
      ],
    },
    {
      role: "Temporary Instructor",
      org: "Department of Computer Science, University of Jaffna",
      period: "Jan 2026 – Present",
      bullets: [
        "Mentoring undergraduate team-based software projects and providing technical guidance.",
        "Conducting practical sessions on Java programming, Object-Oriented Programming, and Data Structures.",
        "Supporting students in programming concepts, problem-solving, and software development practices.",
      ],
    },
    {
      role: "Practical Assistant — Python Programming & AI Certificate Courses",
      org: "Department of Computer Science, University of Jaffna",
      period: "Feb 2026 – Present",
      bullets: [
        "Supporting practical sessions on Python programming and Artificial Intelligence fundamentals.",
        "Guiding participants in Python programming concepts and introductory AI techniques.",
        "Assisting participants in implementing programming exercises and basic AI projects.",
      ],
    },
  ];
  return (
    <Section id="experience" title="Experience">
      <div className="relative border-l-2 border-primary/30 ml-4 md:ml-8 space-y-8 pl-8">
        {items.map((e) => (
          <div key={e.role + e.org} className="relative">
            <span className="absolute -left-[42px] top-2 h-4 w-4 rounded-full bg-primary shadow-lg shadow-primary/40 ring-4 ring-background" />
            <Card>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-primary" />
                    {e.role}
                  </h3>
                  <p className="text-primary">{e.org}</p>
                </div>
                <span className="text-sm text-muted-foreground">{e.period}</span>
              </div>
              {e.summary && (
                <p className="mt-3 text-muted-foreground">{e.summary}</p>
              )}
              <ul className="mt-3 space-y-2 text-muted-foreground text-sm">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  const projects = [
    {
      title: "Explainable AI for Heart Disease Prediction using CNNs",
      year: "2025",
      kind: "Individual Research Project",
      bullets: [
        "Developing a CNN-based model for heart disease prediction using ECG signals.",
        "Integrating Explainable AI (XAI) techniques to enhance model interpretability and support reliable medical diagnoses.",
      ],
      tags: ["Python", "TensorFlow", "Keras"],
    },
    {
      title: "Faculty Feedback System of the University of Jaffna (Mobile Application)",
      year: "2024",
      kind: "Team Software Project",
      bullets: [
        "Developed a mobile application for collecting student feedback on courses and teaching for the Faculty of Science.",
        "Enables students to submit feedback on various aspects of their courses, improving efficiency and transparency compared to traditional paper-based methods.",
      ],
      tags: ["Flutter", "Supabase"],
    },
  ];
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Card key={p.title} className="flex flex-col">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <span className="text-sm text-muted-foreground shrink-0">{p.year}</span>
            </div>
            <p className="mt-1 text-sm text-primary">{p.kind}</p>
            <ul className="mt-3 space-y-2 text-muted-foreground text-sm flex-1">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Achievements() {
  const items = [
    {
      title: "Dean's List",
      desc: "1st Year (1G) and 2nd Year (2G), University of Jaffna.",
    },
    {
      title: "UoJCoders v3.0 — Finalist",
      desc: "Finalist as a team in the 12-hour coding competition organized by the Computer Society and the Department of Computer Science, University of Jaffna. (Oct 2024)",
    },
  ];
  return (
    <Section id="achievements" title="Achievements">
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((a) => (
          <Card key={a.title}>
            <div className="flex items-start gap-3">
              <Award className="h-6 w-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">{a.title}</h3>
                <p className="text-muted-foreground mt-1 text-sm">{a.desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Publications() {
  const pubs = [
    {
      cite:
        'P. Srinevasan and E. Y. A. Charles, "Explainable AI for Heart Disease Prediction Using CNNs," in Proceedings of the 6th International Conference on Advanced Research in Computing (ICARC), Belihuloya, Sri Lanka, IEEE, Feb. 2026, pp. 1–6.',
      doi: "10.1109/ICARC68737.2026.11453519",
      link: "https://ieeexplore.ieee.org/document/11453519/",
    },
    {
      cite:
        'P. Srinevasan and E. Y. A. Charles, "Explainable AI for Heart Disease Prediction Using CNNs," Abstract, Sri Lanka Student Workshop on Computer Science (SL-SWCS’25), Department of Computer Science, University of Jaffna, 2025.',
    },
  ];

  return (
    <Section id="publications" title="Publications">
      <div className="space-y-4 max-w-4xl mx-auto">
        {pubs.map((p) => (
          <Card key={p.cite}>
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-primary mt-1 shrink-0" />

              <div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.cite}
                </p>

                {p.doi && (
                  <p className="mt-2 text-sm">
                    DOI:{" "}
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      {p.doi}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  const certs = [
    {
      title: "30 Days MasterClass in Machine Learning",
      org: "NoviTech R&D Private Limited",
      date: "Sep 2024",
    },
    {
      title: "Introduction to Cloud Development with HTML, CSS, and JavaScript (CAD101EN)",
      org: "edX (IBM)",
      date: "Sep 2021",
    },
    {
      title: "Introduction to Data Science (DS0101EN)",
      org: "edX (IBM)",
      date: "Sep 2021",
    },
    {
      title: "Python Basics for Data Science (PY0101EN)",
      org: "edX (IBM)",
      date: "Sep 2021",
    },
    {
      title: "Diploma in Information Technology",
      org: "DMI Computer Education",
      date: "May 2021",
    },
  ];
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid sm:grid-cols-2 gap-3 max-w-5xl mx-auto">
        {certs.map((c) => (
          <div
            key={c.title}
            className="flex items-start gap-3 rounded-xl border border-border/60 bg-card/60 px-4 py-3"
          >
            <BadgeCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">{c.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {c.org} · {c.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card>
          <GraduationCap className="h-7 w-7 text-primary" />
          <h3 className="mt-3 text-lg font-semibold">
            Bachelor of Science Honours in Computer Science
          </h3>
          <p className="text-primary">University of Jaffna</p>
          <p className="text-sm text-muted-foreground mt-2">2021 – 2025</p>
          <p className="text-sm text-muted-foreground mt-1">
            OGPA: 3.7 / 4.0 (First Class)
          </p>
        </Card>
        <Card>
          <GraduationCap className="h-7 w-7 text-primary" />
          <h3 className="mt-3 text-lg font-semibold">G.C.E. Advanced Level</h3>
          <p className="text-primary">Chundikuli Girls' College, Jaffna</p>
          <p className="text-sm text-muted-foreground mt-2">2006 – 2019</p>
          <ul className="text-sm text-muted-foreground mt-2 space-y-1">
            <li>Mathematics Stream (2019): Mathematics – A, Chemistry – B, Physics – C</li>
            <li>Z-score: 1.2616</li>
            <li>G.C.E. Ordinary Level (2016): 9A</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}

function Contact() {
  const links = [
    {
      icon: Linkedin,
      label: "linkedin.com/in/preethy-srinevasan",
      href: "https://www.linkedin.com/in/preethy-srinevasan",
    },
    {
      icon: Github,
      label: "Spreethy",
      href: "https://github.com/Spreethy",
    },
    {
      icon: Mail,
      label: "preethysrinevasan@gmail.com",
      href: "mailto:preethysrinevasan@gmail.com",
    },
  ];
  return (
    <Section id="contact" title="Contact">
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="space-y-4">
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border/60 bg-card/60 px-5 py-4 hover:border-primary/50 transition"
            >
              <Icon className="h-5 w-5 text-primary shrink-0" />
              <span className="truncate">{label}</span>
              <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground shrink-0" />
            </a>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const name = String(data.get("name") ?? "");
            const email = String(data.get("email") ?? "");
            const message = String(data.get("message") ?? "");
            const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
            window.location.href = `mailto:preethysrinevasan@gmail.com?subject=Portfolio%20Contact&body=${body}`;
          }}
          className="space-y-3"
        >
          <input
            required
            name="name"
            maxLength={100}
            placeholder="Your Name"
            className="w-full rounded-xl border border-border/60 bg-card/60 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
          <input
            required
            type="email"
            name="email"
            maxLength={255}
            placeholder="Your Email"
            className="w-full rounded-xl border border-border/60 bg-card/60 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
          <textarea
            required
            name="message"
            maxLength={1000}
            rows={4}
            placeholder="Your Message"
            className="w-full rounded-xl border border-border/60 bg-card/60 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-y"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
          >
            Send Message <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-12 text-center">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mt-4 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Preethy Srinevasan. All rights reserved.
        </p>
       
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Publications />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}