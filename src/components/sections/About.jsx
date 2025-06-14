import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
  ];

  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB",];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">

              <li>
                <strong>BSc in Computer Science – University of London</strong> (In Progress via Coursera, 2024–Present)
              </li>
                <li>
                  Relevant Coursework: 
                  Data Structures, Algorithms and Computational Theory, Discrete Mathematics, Artificial Intelligence (AI),
                  Machine Learning
                </li>

                <li>
                  <strong>ALX Software Engineering Certificate </strong>ALX Africa
                  (2023-2024)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing...
                </li>
              </ul>

              <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                <li>
                  <strong>Python – Harvard </strong>- Python CS50 by Harvard University
                  (2023-2024)
                </li>
                <li>
                  Relevant Coursework: Python syntax & control flow, data types & structures, object-oriented programming (OOP)...
                </li>
              </ul>

              
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Team Leader at Merchants SA (2021 - Present){" "}
                  </h4>
                  <p>
                  Led performance optimization initiatives using CRM analytics to identify gaps and streamline customer resolution time by 20%
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Freelance at Imaanify Startups (2024){" "}
                  </h4>
                  <ul className=" list-disc list-inside ">
                    <li>Assisted in building front-end components and integrating REST APIs.</li>
                    <li>Redesigned the app’s UI using React Native and Tailwind CSS, ensuring responsive layouts across iOS and Android devices.</li>
                    <li>Integrated RESTful APIs to fetch and display real-time data dynamically.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
