import { ReactElement } from "react"


interface botaoProps{
    children: ReactElement | string
}

export default function Botao( {children}:botaoProps){
    return (
        <button className="w-full md:max-w-[24rem] py-5 rounded font-bold text-white text-[20px] bg-[#ff32e1] shadow-[0px_0px_20px_#000] hover:bg-blue-600 hover:shadow-[0px_0px_20px_#fff] transition-all duration-200 animate-bounce">
            
            <a href="#form" className="w-full flex uppercase ">
                <div className="w-full  flex justify-center text-start ">
                    {children}
                </div>
                
            </a>
        </button>
    )
}
