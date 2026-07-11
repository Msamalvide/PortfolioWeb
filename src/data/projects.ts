
import servibus from "../assets/servibus.svg"

export interface Project {
    id: number
    title: string
    description: string
    tech: string[]
    github: string
    demo?: string
    image?: string
}

export const projects: Project[] = [
    {
        id: 1,
        title: "ServiBus",
        description: "Aplicación web para informar horarios, destinos y recorridos de una empresa de transporte.",
        tech: ["React", "Tailwind CSS"],
        github: "https://github.com/Msamalvide/ServiBus-app",
        demo: "https://servibus-app.vercel.app/",
        image: servibus,
    }
]