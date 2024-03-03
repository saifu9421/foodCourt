
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Booking from '../booking/Booking';


const ServicesCard = ({foodDataCard}) => {
    const {name,img,title,_id,price} = foodDataCard;

    return (
        <div>
      
      
      <Card sx={{ maxWidth: 345, }}>
      <CardActionArea>
        <CardMedia className=''
          component="img"
          height="200"
          image={img}
          alt="green iguana"
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
                name:{name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica */}
             {title}
       
          </Typography>
          
      <p className='text-xl font-serif font-bold'>price:{price}$</p>

        </CardContent>

      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
       
        </Button>
      </CardActions>
      <Button size="small" color="primary">
          <Booking></Booking>
        </Button>
    </Card>
   

{/* 
    <div className="card w-64  shadow-xl ">
    <img src={img} alt="Shoes" />
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div> */}





        </div>
    );
};

export default ServicesCard;