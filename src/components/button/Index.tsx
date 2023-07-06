import { ReactElement } from "react"

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface botaoProps{
    children: ReactElement | string
}

export default function Botao( {children}:botaoProps){
    return (
        <button className="w-full md:max-w-[24rem] py-5 rounded font-bold text-white text-[20px] bg-[#ff32e1] shadow-[0px_0px_20px_#000] hover:bg-blue-600 hover:shadow-[0px_0px_20px_#fff] transition-all duration-200">
            
            <a href="https://wa.me/5555349993535" target='_blank' className="w-full flex uppercase">
                <WhatsAppIcon className='fill-white w-[40px] h-[40px] ml-3  md:ml-5  animate-bounce '/>
                <div className="w-full mr-2 md:mr-4 flex justify-center text-start">
                    {children}
                </div>
                
            </a>
        </button>
    )
}