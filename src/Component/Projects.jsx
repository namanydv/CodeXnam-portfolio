import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () =>{
    return(
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll/> 
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="pt-16 text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
  Featured Projects
</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition" >
                        <h3 className="text-xl font-bold mb-2" >Fitness & Wellness Platform</h3>
                        <p className="text-gray-400 mb-4">
                            Frevive - A modern AI-powered fitness platform offering personalized workouts, diet plans, and progress tracking for a healthier lifestyle.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["ReactJS","NodeJS","Docker"].map((tech,key) => (
                                <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                            ))}
                        </div>

                        <div className="flex justify-between item-center ">
                             <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">{" "}View Project → {" "} </a>   
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition" >
                        <h3 className="text-xl font-bold mb-2" >AI Analytics Dashboard</h3>
                        <p className="text-gray-400 mb-4">
                            An interactive dashboard that leverages AI to visualize, analyze, and generate insights from complex datasets in real time.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["ReactJS","Tailwind","ExpressJS","MongoDB"].map((tech,key) => (
                                <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                            ))}
                        </div>

                        <div className="flex justify-between item-center ">
                             <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">{" "}View Project → {" "} </a>   
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition" >
                        <h3 className="text-xl font-bold mb-2" >E-Commerce Web App</h3>
                        <p className="text-gray-400 mb-4">
                            A dynamic full-stack E-Commerce Web App with user authentication, product management, and seamless shopping experience using modern web technologies.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["NodeJS", "MongoDB", "Tailwind", "TypeScript"].map((tech,key) => (
                                <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                            ))}
                        </div>

                        <div className="flex justify-between item-center ">
                             <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">{" "}View Project → {" "} </a>   
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition" >
                        <h3 className="text-xl font-bold mb-2" >Real-Time Chat App</h3>
                        <p className="text-gray-400 mb-4">
                             A responsive messaging platform with instant communication powered by WebSockets and Firebase for seamless user experience.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["ReactJS","Socket","Redis", "ExpressJS"].map((tech,key) => (
                                <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                            ))}
                        </div>

                        <div className="flex justify-between item-center ">
                             <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">{" "}View Project → {" "} </a>   
                        </div>
                    </div>

                </div>
            </div>
        <RevealOnScroll/>
        </section>
    )
};