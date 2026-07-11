import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import About from "../components/AboutMe/About"
import Projects from "../components/Projects/Project"

const Home = () => {
    return (
        <>  
            <Navbar />  
            <main>
                <section id="home" className="pt-20">
                    <Hero />
                    <About/>
                </section>
                <section id="projects">
                    <Projects />
                </section>
                
            </main>
            
        </>
    )
}

export default Home 