import { motion } from "framer-motion"
import HeroText from "./Herotext"
import HeroImage from "./Heroimg"

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center px-6 py-20"
        >
            <div className="max-w-5xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <HeroText />
                </motion.div>

                <motion.div
                    className="flex-1 flex justify-center"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <HeroImage />
                </motion.div>
            </div>
        </section>
    )
}

export default Hero