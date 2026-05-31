import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Hero */}
      <section className="py-24 md:py-36">
        <p className="text-sm font-medium tracking-widest text-teal-600 uppercase mb-4">
          UX Researcher
        </p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-stone-800 leading-tight mb-6">
          Hi, I&apos;m Serene.
          <br />
          <span className="text-stone-400">I design with empathy,</span>
          <br />
          research with rigor.
        </h1>
        <p className="text-lg text-stone-500 max-w-xl leading-relaxed mb-10">
          I&apos;m a UX researcher who translates messy human complexity into
          clear, actionable insights. Based in Berkeley, I help teams build
          products that actually work for the people who use them.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-teal-700 transition-colors"
          >
            View My Work
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 border border-stone-200 text-stone-700 px-6 py-3 rounded-full text-sm font-semibold hover:border-stone-300 hover:bg-white transition-colors"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent mb-24" />

      {/* What I Do */}
      <section className="pb-24">
        <h2 className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-10">
          What I Do
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "◎",
              title: "User Research",
              description:
                "In-depth interviews, contextual inquiry, and surveys to uncover real user needs and mental models.",
            },
            {
              icon: "◈",
              title: "Usability Testing",
              description:
                "Moderated and unmoderated sessions that surface friction before it reaches production.",
            },
            {
              icon: "◇",
              title: "Synthesis & Strategy",
              description:
                "Affinity mapping, journey mapping, and insight frameworks that turn raw data into design direction.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-2xl text-teal-500 mb-4">{item.icon}</div>
              <h3 className="font-semibold text-stone-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Work teaser */}
      <section className="pb-32">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xs font-semibold tracking-widest text-stone-400 uppercase">
            Selected Work
          </h2>
          <Link
            href="/work"
            className="text-sm text-teal-600 font-medium hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              label: "Mobile UX · FinTech",
              title: "Redesigning Onboarding for a FinTech App",
              gradient: "from-teal-50 to-cyan-100",
            },
            {
              label: "Inclusive Design · Accessibility",
              title: "Accessibility Audit & Redesign",
              gradient: "from-rose-50 to-orange-100",
            },
          ].map((project) => (
            <Link
              key={project.title}
              href="/work"
              className="group block bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient}`} />
              <div className="p-6">
                <p className="text-xs font-medium text-stone-400 uppercase tracking-wide mb-1">
                  {project.label}
                </p>
                <h3 className="font-semibold text-stone-800 group-hover:text-teal-600 transition-colors">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
