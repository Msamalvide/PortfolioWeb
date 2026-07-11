import { GitBranch, ExternalLink } from "lucide-react"
import { Button } from "../../components/ui/button"
import { motion } from "framer-motion"
import type { Project } from "../../data/projects"

const techColors: Record<string, string> = {
    "React": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "Tailwind CSS": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    "NestJS": "bg-red-500/20 text-red-400 border-red-500/30",
    "PostgreSQL": "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    "TypeScript": "bg-blue-600/20 text-blue-300 border-blue-600/30",
}

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
    return (
        <motion.div
            className="bg-secondary/20 border border-secondary rounded-2xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            {/* Imagen o placeholder */}
            <div className="h-44 bg-secondary/40 flex items-center justify-center">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <span className="text-muted-foreground text-sm">Sin preview</span>
                )}
            </div>

            {/* Contenido */}
            <div className="p-5 flex flex-col gap-4 flex-1">
                <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                </p>

                {/* Badges de tecnologías */}
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className={`text-xs px-2 py-1 rounded-full border ${techColors[t] ?? "bg-secondary text-secondary-foreground border-secondary"}`}
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Botones */}
                <div className="flex gap-2 mt-auto">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" className="w-full gap-2">
                            <GitBranch className="h-4 w-4" />
                            GitHub
                        </Button>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button
                        variant="outline"
                        className="flex-1 gap-2"
                        disabled={!project.demo}
                    >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                    </Button>
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard