import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Serene Cheon",
  description: "UX research case studies by Serene Cheon.",
};

const caseStudies = [
  {
    id: 1,
    label: "Mobile UX · FinTech · User Research",
    title: "Redesigning Onboarding for a FinTech App",
    summary:
      "A leading personal finance app was losing 40% of new users within the first 3 days. Through diary studies, contextual interviews, and iterative usability testing, I uncovered the cognitive overload driving drop-off and delivered a redesigned onboarding flow that reduced churn by 28%.",
    tags: ["User Interviews", "Usability Testing", "Mobile UX", "FinTech"],
    gradient: "from-teal-50 to-cyan-100",
    accent: "text-teal-600",
    border: "border-teal-100",
    duration: "12 weeks",
    role: "Lead UX Researcher",
    methods: [
      "Diary Studies",
      "Semi-structured Interviews",
      "Usability Testing",
      "Affinity Mapping",
    ],
  },
  {
    id: 2,
    label: "Inclusive Design · Accessibility · Usability",
    title: "Accessibility Audit & Redesign",
    summary:
      "Partnered with a nonprofit's product team to evaluate and rebuild their volunteer portal for users with visual, motor, and cognitive disabilities. Conducted heuristic evaluations, assistive-technology testing sessions, and co-design workshops with disabled participants to surface systemic barriers.",
    tags: [
      "Accessibility",
      "Heuristic Evaluation",
      "Co-design",
      "Inclusive Design",
    ],
    gradient: "from-rose-50 to-orange-100",
    accent: "text-rose-500",
    border: "border-rose-100",
    duration: "8 weeks",
    role: "UX Researcher & Accessibility Consultant",
    methods: [
      "Heuristic Evaluation",
      "Assistive Tech Testing",
      "Co-design Workshops",
      "WCAG Audit",
    ],
  },
  {
    id: 3,
    label: "B2B · Enterprise · Journey Mapping",
    title: "Enterprise Dashboard Research",
    summary:
      "A B2B SaaS company needed to understand why power users were building workarounds in spreadsheets instead of using their analytics dashboard. Through stakeholder interviews, shadowing sessions, and a comprehensive journey map, I identified five critical workflow gaps and prioritized a backlog of high-impact improvements.",
    tags: ["B2B", "Stakeholder Interviews", "Journey Mapping", "Enterprise"],
    gradient: "from-violet-50 to-purple-100",
    accent: "text-violet-600",
    border: "border-violet-100",
    duration: "10 weeks",
    role: "Senior UX Researcher",
    methods: [
      "Stakeholder Interviews",
      "Contextual Inquiry",
      "Journey Mapping",
      "Card Sorting",
    ],
  },
];

export default function WorkPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Page header */}
      <div className="mb-16">
        <p className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-3">
          Portfolio
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-800 mb-4">
          Selected Work
        </h1>
        <p className="text-lg text-stone-500 max-w-xl leading-relaxed">
          A curated collection of research projects spanning mobile, enterprise,
          and accessibility domains.
        </p>
      </div>

      {/* Case studies */}
      <div className="flex flex-col gap-10">
        {caseStudies.map((study) => (
          <article
            key={study.id}
            className="bg-white border border-stone-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Visual placeholder */}
            <div
              className={`h-52 md:h-64 bg-gradient-to-br ${study.gradient} flex items-center justify-center`}
            >
              <div className="w-24 h-24 rounded-full bg-white/60 flex items-center justify-center text-3xl opacity-60">
                {study.id === 1 ? "◎" : study.id === 2 ? "◈" : "◇"}
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-2">
                {study.label}
              </p>
              <h2 className="text-2xl font-bold text-stone-800 mb-3">
                {study.title}
              </h2>
              <p className="text-stone-500 leading-relaxed mb-6">
                {study.summary}
              </p>

              {/* Meta grid */}
              <div className="grid sm:grid-cols-3 gap-4 mb-6 p-4 bg-stone-50 rounded-xl">
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wide mb-1">
                    Role
                  </p>
                  <p className="text-sm font-medium text-stone-700">
                    {study.role}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wide mb-1">
                    Duration
                  </p>
                  <p className="text-sm font-medium text-stone-700">
                    {study.duration}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-stone-400 uppercase tracking-wide mb-1">
                    Methods
                  </p>
                  <p className="text-sm font-medium text-stone-700">
                    {study.methods.slice(0, 2).join(", ")}
                    {study.methods.length > 2 ? " +more" : ""}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-stone-100 text-stone-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
