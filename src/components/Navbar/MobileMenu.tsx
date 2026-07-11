import { Button } from "../../components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet"
import { Menu } from "lucide-react"
import Navlinks from "./Navlinks"

const MobileMenu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className=" h-15 w-15 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:opacity-90 hover:text-white"
                >
                    <Menu className="h-5 w-5" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background border-none px-4">
                <div className="flex flex-col gap-6 mt-10 text-lg">
                    <Navlinks mobile={true} />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenu