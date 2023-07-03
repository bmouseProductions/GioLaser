import { ReactElement } from "react"

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface botaoProps{
    children: ReactElement | string
}

export default function Botao( {children}:botaoProps){
    return (
        <button className="w-full md:max-w-[22.8rem] py-5 rounded font-bold text-white text-[26px] bg-[#ff32e1] shadow-[0px_0px_20px_#000] hover:bg-blue-600 hover:shadow-[0px_0px_20px_#fff] transition-all duration-200">
            
            <a href="https://wa.me/5555349993535" target='_blank'> <WhatsAppIcon className='fill-white w-[40px] h-[40px] animate-bounce'/> </a>
            {children}
        </button>
    )
}