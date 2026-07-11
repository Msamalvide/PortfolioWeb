import AboutMe from "./AboutmeText"
import Skills from "./Skill"
import Stack from "./Stack"

const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-5xl w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:grid-rows-2">
                    {/* Cuadro grande izquierda */}
                    <div className="md:row-span-2">
                        <AboutMe />
                    </div>

                    {/* Cuadro chico arriba derecha */}
                    <div>
                        <Skills />
                    </div>

                    {/* Cuadro chico abajo derecha */}
                    <div>
                        <Stack />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About