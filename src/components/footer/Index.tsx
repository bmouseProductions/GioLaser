
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    return(
        <footer className="w-full py-5 flex flex-col items-center gap-3 lg:flex-row justify-center lg:gap-20 text-white bg-[#ca4ab0] ">
            <div className='flex gap-2 justify-center items-center'>
                <a href="https://www.facebook.com/people/GiOlaser/100085935106177/" target='_blank'> <FacebookIcon className='fill-white'/> </a>
                <a href="https://www.instagram.com/giolaseroficial/" target='_blank'> <InstagramIcon className='fill-white'/> </a>
                <a href="https://www.youtube.com/channel/UCY2ajhdN9R28wv_ewFyy4Zg" target='_blank'> <YouTubeIcon className='fill-white'/> </a>
            </div>

            <p>Copyright Ⓒ 2023 GiOLaser.</p>

            <a href="https://www.bmouseproductions.com/" target="_blank" rel="noopener noreferrer"> Desenvolvido por <strong>BMOUSE PPRODUCTIONS</strong> </a>
        </footer>
    )
}
