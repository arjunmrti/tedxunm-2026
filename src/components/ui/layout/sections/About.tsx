import { motion } from "motion/react";
import { cardReveal, sectionReveal, staggerParent } from "../../../../motion/variants";

export default function About() {
  const values = [
    {
      number: "01",
      title: "Fresh Perspectives",
      description: "Challenge the way you see the world and uncover new possibilities in the everyday.",
      className: "bg-[#7B3FE4]/10 text-[#7B3FE4]",
      icon: "M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    },
    {
      number: "02",
      title: "Meaningful Connections",
      description: "Connect with a community of curious minds who believe ideas can shape a better future.",
      className: "bg-[#2ECF7A]/10 text-[#2ECF7A]",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    },
    {
      number: "03",
      title: "Action Beyond Inspiration",
      description: "Walk away with more than inspiration leave empowered to turn ideas into meaningful action.",
      className: "bg-[#FFA800]/10 text-[#FFA800]",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
  ];

  const valuesDetail = [
    ["Curiosity", "We believe that every question opens the way to new knowledge and understanding. Curiosity drives ideas, innovation, and broader perspectives."],
    ["Openness", "We value diversity of thought, experience, and background. Open dialogue allows everyone to learn from different perspectives."],
    ["Authenticity", "We prioritize ideas born from experience, research, and honest reflection. Authenticity makes every story meaningful and inspiring."],
    ["Collaboration", "We believe that ideas thrive when they meet other ideas. Through collaboration, we build connections that foster innovation and change."],
    ["Impact", "We believe that an idea becomes meaningful when it can be translated into action. Therefore, we encourage every idea to create a sustainable impact on society."],
  ];

  return (
    <motion.section
      aria-labelledby="about-heading"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7] border-t border-gray-200"
      id="about"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={cardReveal} className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center justify-center bg-[#E10600]/10 text-[#E10600] text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full">
            About TEDxUNM
          </span>
          <h2
            className="text-4xl lg:text-5xl font-extrabold font-display text-[#111111] tracking-tight my-4"
            id="about-heading"
          >
            What is TEDxUNM?
          </h2>
          <p className="text-base sm:text-lg text-[#5e3f3a] font-normal leading-relaxed max-w-3xl mx-auto">
            TEDxState University of Makassar (TEDxUNM) is an independent, TED-licensed event organized by the TEDxState University of Makassar team. We provide a space for thinkers, researchers, innovators, creators, professionals, and agents of change to share their experiences and ideas worth spreading—ideas that broaden perspectives, spark meaningful conversations, and inspire actions that have a positive impact on society.
          </p>
        </motion.div>

        <motion.div
          variants={cardReveal}
          className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-sm mb-12"
        >
          <div className="text-xs uppercase tracking-[0.08em] text-gray-400 font-semibold mb-3">About TEDx</div>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            TEDx is a program of independently organized local events under the TED license. At each TEDx event, TED Talk videos are combined with live speakers to create an experience that encourages discussion, exchange of ideas, and community connection. While licensed under TED, each TEDx event is independently organized by local organizers, following TED guidelines.
          </p>
        </motion.div>

        <motion.div variants={staggerParent} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value) => (
            <motion.div
              key={value.number}
              variants={cardReveal}
              className="bg-white rounded-3xl border border-[#E5E5E5] p-6 sm:p-7 shadow-[0_8px_24px_-4px_rgba(17,17,17,0.06)] hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className={`w-full h-40 rounded-2xl ${value.className} flex items-center justify-center mb-6`}>
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d={value.icon} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-2">
                  {value.number}
                </span>
                <h3 className="text-2xl font-bold font-display text-[#111111] mb-2.5">
                  {value.title}
                </h3>
                <p className="text-sm text-[#5e3f3a] leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="border-t border-[#EAEAEA] pt-12 mt-12">
          <motion.div variants={cardReveal} className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-400">Mission</span>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mt-4">
              Our mission is to deliver authentic, relevant, and impactful ideas through quality sharing experiences; bring together individuals from diverse backgrounds to exchange perspectives, experiences, and inspiration; cultivate critical thinking, curiosity, and lifelong learning; encourage cross-disciplinary collaboration; and inspire every individual to turn ideas into actions that bring positive impact.
            </p>
          </motion.div>

          <motion.div variants={staggerParent} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {valuesDetail.map(([title, description], index) => (
              <motion.div
                key={title}
                variants={cardReveal}
                className="bg-white p-5 rounded-2xl border border-[#E5E5E5] shadow-[0_8px_24px_-4px_rgba(17,17,17,0.06)]"
              >
                <div className="w-8 h-8 rounded-full bg-[#E10600]/10 text-[#E10600] flex items-center justify-center font-mono font-bold text-xs mb-3">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="font-display font-semibold text-base text-[#111111] mb-1.5">{title}</div>
                <div className="text-xs text-[#5e3f3a] leading-relaxed">{description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={cardReveal}
          className="mt-12 rounded-3xl bg-[#111111] text-white p-8 sm:p-10 text-center shadow-xl"
        >
          <div className="text-xs uppercase tracking-widest text-white/50 font-semibold mb-3">Join the Conversation</div>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto text-white/80">
            Every idea has the potential to inspire someone. Every conversation has the potential to spark change. Join TEDxUNM and share ideas that can have a positive impact.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
