
import portfolio from "../../assets/portfolio.svg"
const Heroimg = ()=> {
   return (
        <div className="flex justify-center items-center">
            <div className="relative">
                {/* Borde con gradiente animado */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500   blur-sm" />
                <div className="relative p-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500">
                    <img
                        src={portfolio}
                        alt="Martin Samalvide"
                        className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover object-top"
                    />
                </div>
            </div>
        </div>
    )
}

export default Heroimg