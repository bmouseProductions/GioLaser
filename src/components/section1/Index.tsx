import Botao from '../button/Index'

import giovanna from '../../assets/giovanna.webp'
import logo from '../../assets/giolaser.svg'


export default function Section1() {
    return(
        <section className="w-full min-h-screen pt-[60px] md:px-[5%] bg-gradient-to-b lg:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ca4ab0] via-[#a528ad] md:via-20% to-[#610061] md:to-70%" >
            <div className='flex flex-col lg:flex-row md:justify-center md:items-center'data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500" >
                <img src={giovanna} alt="" className='w-full  md:max-w-lg xl:max-w-2xl '/>
                <div className='w-full px-5 md:px-0 flex flex-col items-center md:w-[60%] max-w-[600px] md:justify-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className='w-full flex flex-col'>
                        <img src={logo} alt="" className='mb-5'/>
                        <span className='w-full text-[15.5px] lg:text-[16px] xl:text-[20px] font-normal text-center  text-white border-[2px] rounded-xl'>A GiOlaser é referência em depilação, estética e beleza</span>
                    </div>
                    <h2 className='mt-4 font-semibold text-white text-center md:text-start mb-10 md:text-[28px]'>Valorizamos o que você tem de mais bonito. Conheça o tratamento ideal para você.</h2>
                    <Botao>
                        Agende sua avaliação
                    </Botao>
                </div>
            </div>
        </section>
    )
}
