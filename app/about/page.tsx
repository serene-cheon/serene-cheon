import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Serene Cheon",
  description:
    "Learn about Serene Cheon, a UX researcher and Berkeley graduate.",
};

const skills = [
  {
    category: "Research Methods",
    items: [
      "User Interviews",
      "Contextual Inquiry",
      "Diary Studies",
      "Surveys",
      "Ethnographic Research",
    ],
  },
  {
    category: "Usability & Testing",
    items: [
      "Moderated Usability Testing",
      "Unmoderated Testing",
      "A/B Testing",
      "Heuristic Evaluation",
      "Cognitive Walkthroughs",
    ],
  },
  {
    category: "Synthesis & Analysis",
    items: [
      "Affinity Diagrams",
      "Journey Mapping",
      "Thematic Analysis",
      "Persona Development",
      "Mental Model Mapping",
    ],
  },
  {
    category: "Tools & Prototyping",
    items: ["Figma", "Dovetail", "Maze", "Optimal Workshop", "Miro"],
  },
];

const timeline = [
  {
    year: "2024–Present",
    role: "UX Researcher",
    place: "Independent Consulting",
    description:
      "Partnering with startups and nonprofits to embed research into early-stage product development.",
  },
  {
    year: "2022–2024",
    role: "UX Researcher",
    place: "Bay Area Tech Company",
    description:
      "Led mixed-methods research for a consumer mobile app with 2M+ users, owning the full research lifecycle.",
  },
  {
    year: "2020–2022",
    role: "M.I. — Information Management & Systems",
    place: "UC Berkeley, School of Information",
    description:
      "Graduate study focused on human-computer interaction, participatory design, and research methods.",
  },
  {
    year: "2016–2020",
    role: "B.A. — Cognitive Science",
    place: "UC Berkeley",
    description:
      "Undergraduate foundation in cognitive psychology, linguistics, and human perception.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16">
        <p className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-3">
          About
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-800 mb-4">
          Hi, I&apos;m Serene.
        </h1>
      </div>

      {/* Bio + avatar grid */}
      <div className="grid md:grid-cols-3 gap-12 mb-20">
        {/* Avatar placeholder */}
        <div className="md:col-span-1 flex flex-col items-start gap-4">
          <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-teal-100 to-cyan-200 flex items-center justify-center text-6xl text-teal-400 font-bold select-none">
            SC
          </div>
          <a
            href="mailto:serenecheon@berkeley.edu"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-700 transition-colors"
          >
            Get in Touch →
          </a>
        </div>

        {/* Bio text */}
        <div className="md:col-span-2 space-y-4 text-stone-600 leading-relaxed">
          <p>
            I&apos;m a UX researcher with a background in Cognitive Science and
            Information Management from UC Berkeley. My work sits at the
            intersection of psychology, design, and technology — I help teams
            understand people so they can build things worth using.
          </p>
          <p>
            I believe great research is equal parts rigor and empathy. Whether
            I&apos;m running a two-hour interview with a power user or analyzing
            500 survey responses, I&apos;m always looking for the signal beneath
            the surface: the unspoken frustration, the workaround that reveals a
            broken mental model, the moment a participant&apos;s face tells you
            more than their words.
          </p>
          <p>
            Outside of work, you&apos;ll find me hiking in the East Bay hills,
            reading cognitive science papers for fun, or attempting to keep my
            sourdough starter alive.
          </p>
        </div>
      </div>

      {/* Skills */}
      <section className="mb-20">
        <h2 className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-8">
          Skills &amp; Methods
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-stone-700 mb-3">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-stone-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-20">
        <h2 className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-8">
          Experience &amp; Education
        </h2>
        <div className="relative border-l-2 border-stone-100 pl-8 space-y-8">
          {timeline.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-10 top-1 w-3 h-3 rounded-full bg-teal-400 border-2 border-stone-50" />
              <p className="text-xs font-medium text-teal-600 mb-1">
                {item.year}
              </p>
              <h3 className="font-semibold text-stone-800">
                {item.role}
              </h3>
              <p className="text-sm font-medium text-stone-500 mb-2">
                {item.place}
              </p>
              <p className="text-sm text-stone-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100 rounded-2xl p-10 text-center">
        <h2 className="text-2xl font-bold text-stone-800 mb-3">
          Let&apos;s work together
        </h2>
        <p className="text-stone-500 mb-6 max-w-md mx-auto">
          I&apos;m open to research contracts, embedded researcher roles, and
          advisory work. Drop me a line.
        </p>
        <a
          href="mailto:serenecheon@berkeley.edu"
          className="inline-flex items-center gap-2 bg-teal-600 text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-teal-700 transition-colors"
        >
          serenecheon@berkeley.edu →
        </a>
      </section>
    </div>
  );
}
