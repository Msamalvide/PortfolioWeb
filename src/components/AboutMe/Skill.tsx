import { motion } from "framer-motion"
import { skillGroup } from "../../data/skill"

const Skill = () =>{
    return (
        <motion.div
            className="bg-secondary/20 border border-secondary rounded-2xl p-6 h-full flex flex-col gap-4"
            initial={{opacity: 0 , y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration:0.5, ease: "easeOut"}}
            viewport={{once: false, amount: 0.3}}
        >
             <h2 className="text-lg font-bold text-foreground">Competencias técnicas</h2>
            <div className="flex flex-col gap-3">
                {skillGroup.map((group) => (
                    <div key={group.label}>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1 block">
                            {group.label}
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className={`text-xs px-2 py-1 rounded-full border ${group.color}`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
        </motion.div>
    )
}

export default Skill