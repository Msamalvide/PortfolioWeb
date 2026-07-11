import { projects } from "@/data/projects"
import ProjectCard from "./ProjectCard"
import { motion } from "framer-motion"

const Projects = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-5xl w-full flex flex-col gap-10">
                <motion.h2
                    className="text-3xl font-bold text-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Proyectos
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects