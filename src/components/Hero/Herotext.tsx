import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Button } from "../ui/button"
import { Download } from "lucide-react"

const Herotext = () => {
    return (
        <motion.div
            className="flex flex-col items-center md:items-start gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >

            <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left">
                <span className="text-primary-foreground">Martin Emanuel </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
                    Samalvide
                </span>
            </h1>
            <TypeAnimation
                sequence={[
                    "Full Stack Developer",
                    2000,
                    "Backend Developer",
                    2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"
                
            />

             <p className="text-muted-foreground text-center md:text-left max-w-md">
                Desarrollador apasionado por construir productos digitales con buenas prácticas y tecnologías modernas.
            </p>

            {/* Botón CV */}
            <a href="/cv.pdf" download="CV_Martin_Samalvide.pdf">
                <Button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:opacity-90 mt-2">
                    <Download className="h-4 w-4 mr-2" />
                    Descargar CV
                </Button>
            </a>

            
            
        </motion.div>
    )
}

export default Herotext