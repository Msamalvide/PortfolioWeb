import {useState } from "react"
import{User, Code, Mail} from "lucide-react"


const Navlinks = ({scroll,mobile}:{scroll?:boolean, mobile?:boolean})=>{
    const [activeLink, setActiveLink] = useState('#home')
    const links = [
        {label:'Sobre mi', href: '#home', icon:User},
        {label:'Proyectos', href:'#projects', icon:Code},
        {label:'Contacto', href:'#contact', icon:Mail}
    ]

     return (
        <div className={`flex ${mobile? 'flex-col': 'justify-between'} w-full gap-4`}>
            {
                links.map((link)=>{
                    return(
                        <a 
                        key={link.href}
                        href={link.href}
                        onClick={()=>setActiveLink(link.href)}
                        className={`flex relative pb-1 text-lg font-medium transition-colors hover:text-primary-foreground group ${activeLink === link.href ? "text-primary-foreground " : "text-neutral-500 "}`}>

                            {
                                scroll? 
                                <link.icon className="w-5 h-5 mr-2" />
                                :
                                link.label
                            }
                            
                            <span className={`absolute left-0 bottom-0 h-0.5 bg-indigo-800 transition-all duration-300 group-hover:w-full ${
                            activeLink === link.href ? "w-full" : "w-0"
                        }`}></span>
                        </a>
                        
                    )
                })
            }
        </div>
    )
}

export default Navlinks