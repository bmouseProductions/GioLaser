

import { Formulario } from "../formulario/Index";
import CardProcedimentos from "../cardProcedimentos/Index";

import fundo from '../../assets/Fundo.webp'

import modeloCorporal from '../../assets/modelos/modelo-corporal.webp'
import modeloFacial from '../../assets/modelos/modelo-facial.webp'
import modeloLaser from '../../assets/modelos/modelo-laser.webp'

import Acesso from '../../assets/icons/atendente-1-1.png'
import Conforto from '../../assets/icons/depilacao-1-1.png'
import Conveniencia from '../../assets/icons/massagem-2-1.png'
import Qualidade from '../../assets/icons/slim-body-2-1.png'

import Botao from "../button/Index";
import CardPilares from "../cardPilares/Index";


export default function Section2() {
    

    const cardProcedimentos = [
        {
        image: modeloFacial,
        title:"Tratamentos Faciais",
        text:"Os tratamentos faciais são indicados para prevenir e combater as consequências do envelhecimento, deixando a pele mais bonita e saudável."
        },

        {
            image:modeloLaser,
            title:"Depilação a Laser",
            text:"O método GIO de depilação retira os pelos indesejados, utilizando as melhores técnicas do mercado, com máxima eficiência, tecnologia e segurança."
        },

        {
            image:modeloCorporal,
            title:"Tratamentos Corporais",
            text:"Os tratamentos corporais reúnem tudo o que você precisa, desde massagens relaxantes a técnicas mais inovadoras para eliminação de gorduras, celulites e estrias."
        },
    ]

    const cardPilares = [
        {
        image: Acesso,
        title:"Acesso",
        text:"Aqui você pode cuidar da sua saúde, beleza e do seu bem-estar!"
        },

        {
            image:Conforto,
            title:"Conforto",
            text:"As melhores instalações e a melhor tecnologia a favor do seu bem-estar."
        },

        {
            image:Conveniencia,
            title:"Conveniência",
            text:"Depilação a laser, tratamentos faciais e tratamentos corporais, tudo em um só lugar!"
        },

        {
            image:Qualidade,
            title:"Qualidade",
            text:"Equipe treinada e profissionais qualificados para realizar os procedimentos e melhor atender você!"
        },
    ]

    return (
        <section className="py-10 w-full min-h-[50vh] lg:min-h-screen flex flex-col  items-center max-w-screen text-white bg-gradient-to-b  from-[#610061] from-70% via-[#a528ad] via-80% to-[#ca4ab0] to-90% ">

            <div className="w-full flex flex-col items-center gap-10 md:mb-12 p-5">
                <h2 className="text-3xl text-[32px] md:text-5xl font-bold">Conheça a GiOlasser</h2>
                <div className="mb-10 w-full lg:min-h-[450px] flex justify-center items-center video ">
                    <iframe className="w-full lg:w-[77.9%] h-[200px] md:h-[350px] lg:h-[420px] rounded" src="https://www.youtube.com/embed/T8l3ZIp7NpA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>

            {/* FORM */}
            <div className="flex items-center px-5 mb-20">
                <img src={fundo} alt="" className="hidden xl:block" />

                <div className="flex flex-col gap-7">
                    <h2 className="max-w-[600px] text-3xl md:text-4xl font-bold text-center">A GiOlaser é referência em depilação, estética e beleza</h2>
                    <span className="max-w-[600px] text-[26px] md:text-2xl font-semibold text-center">Agende agora sua avaliiação</span>
                    <Formulario />
                </div>
            </div>

            <div className="mb-20 px-5 flex flex-col items-center">
                <div className="flex flex-col lg:flex-row justify-center gap-7 xl:gap-14 mb-10">
                    {cardProcedimentos.map( (card) => 
                        <CardProcedimentos 
                            key={card.title} 
                            image={card.image} 
                            title={card.title} 
                            text={card.text}
                        />
                    )}
                </div>
                <Botao>
                    Agende sua avaliação
                </Botao>
            </div>

            {/* CARD TRATAMENTO */}
            <div className="w-full p-5 md:p-0 flex flex-col items-center ">
                <h2 className="w-full md:w-[80%] max-w-[1350px] text-2xl xl:text-[38px] md:text-4xl font-bold text-center">A GiOlaser nasceu do propósito de promover saúde e beleza para todas as pessoas. Acreditamos que o bem-estar vem de dentro para fora.</h2>
                <h3 className="w-full my-12 text-2xl xl:text-[36px] md:text-3xl font-semibold text-center">
                    Conheça os pilares da GiOlaser:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
                    {cardPilares.map( (card) => 
                        <CardPilares 
                            key={card.title} 
                            image={card.image} 
                            title={card.title} 
                            text={card.text}
                        />
                    )}
                </div>
                <p className="my-10 max-w-[800px] text-[26px] md:text-2xl font-semibold text-center">
                Em mais de 300 clínicas espalhadas pelo Brasil, a GiOlaser oferece uma variedade de tratamentos faciais e corporais com preços acessíveis e condições de pagamento facilitadas.  
                </p>

                <Botao>
                    Agende sua avaliação
                </Botao>
            </div>
            
            
            
        </section>
    )
}