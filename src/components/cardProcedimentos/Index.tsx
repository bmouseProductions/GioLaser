
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface PropsCardComponent{
    image: string;
    title: string;
    text: string;
}

export default function CardProcedimentos( {image, title, text}:PropsCardComponent ) {
  return (
    <Card className='bg-white bg-opacity-90 w-full lg:w-[30%] max-w-[400px] p-5 card'>
        <CardActionArea className=''>
            <CardMedia
                component="img"
                height= '120px'
                image={image}
                alt="green iguana"
                className='imgCard'
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