import { motion } from "framer-motion"

const AboutmeText = () =>{
    return (
        <section>
            {/*motion.div sirve para crear animeciones al scrollear*/}
        <motion.div 
            className="bg-secondary/20 border border-secondary rounded-2xl p-6 h-full flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
        >
            <h2 className="text-2xl font-bold text-indigo-500">Sobre mí</h2>
            <p className="text-primary-foreground leading-relaxed">
                Desarrollador Full Stack con sólida capacidad de adaptación y resolución 
                de problemas técnicos. Experiencia práctica en el desarrollo de aplicaciones 
                web escalables utilizando React, NestJS y PostgreSQL. Especializado en la 
                creación de interfaces modulares y en la optimización del backend, con un 
                enfoque en metodologías ágiles y escritura de código limpio.
            </p>
        </motion.div>
        </section>
    )
}

export default AboutmeText