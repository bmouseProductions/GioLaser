
import Slider from "../swiper/Index";

// import giovanna2 from '../../assets/giovanna2.png'
import depoiment1 from '../../assets/depoimento1.png'
import depoiment2 from '../../assets/depoimento2.png'
import phone from '../../assets/phone-call.png'
import { Formulario } from "../formulario/Index";


export default function Section2() {

    {/* inicio do conteudo do slide */}
    function ContentSlideDepoiment1(){
        return(
            <div className="flex flex-col items-center">
                <img key={1} src={depoiment1} alt="imagem tiago tessmann" className="w-[150px] rounded-full"/>
                <h3 className="text-[26px] font-semibold ">Magna Ranielle de Oliveira</h3>
                <span className="text-[18px] ">Mãe do Bernardo e do Heitor</span>
                <p className="text-lg font-semibold mt-4 text-center">
                    Eu conheci a Dra. Elisângela no HNSF final de 2014. Meu primeiro filho nasceu em agosto de 2014, devido a prematuridade dele, ele não conseguiu segurar no ceio. A gente vivia trocando o leite pois ele chorava muito com cólicas e vivia resmugando. Foi quando eu conheci a Dra. Elisângela, que mudou completamente a nossa vida e o bem-estar do Bernardo. Com o passar do tempo ele foi desenvolvendo uma rinite alérgica. Chegou a acontecer dele dar um líquido no ouvido e os otorrinos querendo drenar, mas a Dra., apenas com remédio e orientações, conseguiu resolver. Já estou no segundo filho e é ela quem cuida, com todo carinho e dedicação, todo profissionalismo que ela tem, dos meus meninos. Eu adoro e sou eternamente grata por todo o cuidado que ela tem com meus filhos, por tudo o que ela faz por eles e não troco. Espero que ela esteja conosco até eles passarem para a fase adulta. Dra. Elisângela, eu só tenho a agradecer. Você como mãe possui o mesmo tratamente com os meus filhos, com muito carinho e muito profissionalismo, tanto é que eles adoram a Tia Elisângela!
                </p>
            </div>
        )
    }

    function ContentSlideDepoiment2(){
        return(
            <div className="flex flex-col items-center">
                <img key={1} src={depoiment2} alt="imagem tiago tessmann" className="w-[150px] rounded-full"/>
                <h3 className="text-[26px] font-semibold ">Dalila Viviane de Barros</h3>
                <span className="text-[18px] ">Mãe da Luana e do Lorenzo</span>
                <p className="text-lg font-semibold mt-4 text-center">
                    Falar da Dra. Elisângela para mim é muito gratificante pois ela cuidou do Lorenzo em momentos difíceis e fez isso com muita segurança. O momento que me fez conhecer ela foi quando ele tinha um aninho (hoje já está com quatros anos) e teve suspeita de alergia alimentar. Ela prontamente fez os exames e tudo o que era necessário e verificou que essa alergia não existia. Pouco tempo depois conseguimos identificar que existia alergia de outras coisas que levavam ele a quadros respiratórios complicados e ela, com muita capacidade, começou com um tratamente de imunidade que tem dado muito certo com vacina. Estamos muito felizes e ele está muito bem. A Dra. Elisângela é uma excelente profissional, com conhecimento científico formidável, que passa confiança pra gente e graças a Deus temos ela em nossa vida.
                </p>
            </div>
        )
    }

    const slideContent = [
        <ContentSlideDepoiment1 key={1} />,
        <ContentSlideDepoiment2 key={2} />
    ];
    {/* final do conteudo do slide */}

    const slideCount = slideContent.length;


    return (
        <section className="py-10 w-full min-h-[50vh] lg:min-h-screen bg-[#610061] flex flex-col  items-center max-w-screen text-white">

            <div className="w-full flex flex-col items-center gap-10 mb-10 md:mb-14 p-5">
                <h2 className="text-[38px] md:text-5xl font-bold">Conheça a GiOlasser</h2>
                <div className="mb-10 w-full lg:min-h-[450px] flex justify-center items-center video ">
                    <iframe className="w-full lg:w-[77.9%] h-[200px] md:h-[350px] lg:h-[420px] rounded" src="https://www.youtube.com/embed/T8l3ZIp7NpA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>

            {/* FORM */}
            <div>
                <Formulario />
            </div>
            
            <Slider
                slideContent= {slideContent}
                slideCount= {slideCount}
            />

            {/* VENDAS */}
            <div data-aos="zoom-in-up" data-aos-duration="2000">
                <div className="w-full px-4 py-14 lg:p-[50px] flex gap-5 flex-col items-center text-white">
                    <h2 className="w-full lg:w-max font-bold text-3xl lg:text-5xl">
                        <strong>Gostaria de marcar uma consulta? </strong> 
                    </h2><h3 className="w-full lg:w-max font-bold text-[28px]"> <strong> Contate-nos: </strong></h3>
                    
                    <div className="w-full flex flex-col lg:flex-row lg:gap-10 justify-evenly">
                        <div className="flex lg:items-center lg:justify-center gap-5 ">
                            <img src={phone} alt=""/>
                            <h2 className="font-bold text-2xl lg:text-4xl"> 
                                <a href="tel:+5534999353532"> 
                                    +55 (34) 9 9935-3532
                                </a>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </section>
    )
}