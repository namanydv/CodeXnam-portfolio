import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {
  const Webtechnologies = ["JavaScript", "ReactJS","TypeScript","Tailwind", "TypeScript", "NodeJS", "ExpressJS"];
  const database = ["DBMS","MySQL","MongoDB","Firebase","PostgreSQL"];
  const tools = ["ChatGPT (Prompt Engineering)", "Git", "GitHub","Jira", "Trello", "SDLC", "Agile", "Scrum","Copilot", "Notion", "Sprint Planning "];
  const skills = ["C++","Python","JavaScript","Data Structure", "Java"]
  



  return (
    <section
      id="about"
      className="h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll/>
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            I'm a results-driven developer dedicated to building scalable, efficient web applications. I value clean code, problem-solving, and continuous learning to deliver impactful digital experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Web Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {Webtechnologies.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Database</h3>
              <div className="flex flex-wrap gap-2">
                {database.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Programming </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Tools & Management</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
            
            
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left">
                <div className=" p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4"> 🏛️ Education</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ">
                      <li>
                        <strong>Bachelor of Computer Application</strong> - IGNOU UNIVERSITY (2023-2026)
                      </li>
                      <li>
                        <strong>A Level</strong> - NIELIT (2023-2026)
                      </li>
                      <li>
                        <strong>O level</strong> - NIELIT (2023-2025)
                      </li>
                      <li>
                        <strong>Relevant Coursework:</strong> Data Structure, Web Development, Cloud Computing
                      </li>
                  </ul>
                </div>
                <div className=" p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 📚 Certification</h3>
                    <div className="space-y-4 text-gray-300 ">
                      <div>
                      <h4> <b>DATA ANALYTICS: </b> (30Days Coding)</h4>
                      <p>
                        Aspiring Data Analyst skilled in transforming data into actionable insights using tools like Excel, SQL, Python, and Power BI.
                      </p>
                      </div>

                      <div>
                      <h4> <b>MERN-STACK: </b> (30Days Coding)</h4>
                      <p>
                        Learn to Build Full-stack Web Application Using JavaScript - MogoDB, ExpressJS, ReactJs, NodeJS
                      </p>
                      </div>

                    </div>
                </div>
          </div>
          

        </div>
      </div>
      <RevealOnScroll/>
    </section>
  );
};
