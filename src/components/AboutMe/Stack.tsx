import { motion } from "framer-motion"
import { FaReact, FaNode, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { SiTypescript, SiNestjs, SiPostgresql } from "react-icons/si"

const stack = [
    { icon: FaReact, label: "React", color: "text-cyan-400" },
    { icon: SiTypescript, label: "TypeScript", color: "text-blue-400" },
    { icon: SiNestjs, label: "NestJS", color: "text-red-400" },
    { icon: FaNode, label: "Node.js", color: "text-green-400" },
    { icon: SiPostgresql, label: "PostgreSQL", color: "text-blue-300" },
    { icon: FaGitAlt, label: "Git", color: "text-orange-400" },
    { icon: FaHtml5, label: "HTML5", color: "text-orange-500" },
    { icon: FaCss3Alt, label: "CSS3", color: "text-blue-500" },
]

const Stack = () => {
    return (
        <motion.div
            className="bg-secondary/20 border border-secondary rounded-2xl p-6 h-full flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: false }}
        >
            <h2 className="text-lg font-bold text-foreground">Stack</h2>
            <div className="grid grid-cols-4 gap-4">
                {stack.map(({ icon: Icon, label, color }) => (
                    <div key={label} className="flex flex-col items-center gap-1">
                        <Icon className={`text-3xl ${color}`} />
                        <span className="text-xs text-muted-foreground">{label}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Stack