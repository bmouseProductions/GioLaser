
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface PropsCardPilares{
    image: string;
    title: string;
    text: string;
    aosAnimation:string;
    aosDuration:string;
}

export default function CardPilares( {image, title, text, aosAnimation, aosDuration}:PropsCardPilares ) {
  return (
    <Card className=' w-full max-w-[280px] p-5 card border-2 border-white bg-gradient-to-t  from-[#610061]  via-[#a528ad]  to-[#ff01cc] rounded-2xl' data-aos={aosAnimation} data-aos-duration={aosDuration}>
        <CardActionArea className=''>
            <CardMedia
                component="img"
                image={image}
                alt="green iguana"
                className='imgCard w-auto m-auto'
            />
            <CardContent>
                <Typography className='font-semibold text-3xl text-[#380655] text-center mt-2 mb-3'>
                    {title}
                </Typography>
                <Typography className='text-center text-white text-base'>
                    {text}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  );
}
