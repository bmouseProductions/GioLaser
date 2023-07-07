
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface PropsCardComponent{
    image: string;
    title: string;
    text: string;
    aosAnimation:string;
    aosDuration:string;
}

export default function CardProcedimentos( {image, title, text, aosAnimation, aosDuration}:PropsCardComponent ) {
  return (
    <Card className='bg-white bg-opacity-90 w-full lg:w-[30%] max-w-[400px] p-5 card' data-aos={aosAnimation} data-aos-duration={aosDuration}>
        <CardActionArea className=''>
            <CardMedia
                component="img"
                height= '120px'
                image={image}
                alt="green iguana"
                className='imgCard h-[330px] md:h-[340px] lg:h-[345px] rounded'
            />
            <CardContent>
                <Typography className='font-semibold text-3xl text-[#753999] text-center mt-2 mb-3'>
                    {title}
                </Typography>
                <Typography className='text-center'>
                    {text}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  );
}
