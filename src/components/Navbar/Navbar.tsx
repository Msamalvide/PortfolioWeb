import Navlinks from "./Navlinks"
import MobileMenu from "./MobileMenu"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [scroll, setScroll] = useState(false)

    useEffect(()=>{
            const handleScroll= ()=>{
                setScroll(window.scrollY > 50)
            }
            window.addEventListener('scroll',handleScroll)
            return ()=> window.removeEventListener('scroll',handleScroll)
        },[])

    return (
      <header className="fixed top-0 left-0 w-full h-20 flex items-center z-50">
      <nav className={`${scroll ? 'min-[531px]:mt-4 min-[531px]:mx-4 min-[531px]:bg-primary/80 min-[531px]:w-1/5' : 'min-[531px]:bg-primary min-[531px]:w-full'} min-[531px]:max-w-5xl min-[531px]:mx-auto w-full flex items-center justify-end min-[531px]:justify-between px-6 py-4 min-[531px]:border-3 min-[531px]:border-secondary min-[531px]:rounded-full min-[531px]:shadow-xl min-[531px]:shadow-indigo-500/20`}>
        <div className="hidden min-[531px]:flex items-center justify-center flex-1">
          <Navlinks scroll= {scroll}/>
        </div>

        <div className="min-[531px]:hidden h-10 flex flex-col">
          <MobileMenu />
        </div>    
      </nav>
    </header>
    )
}

export default Navbar