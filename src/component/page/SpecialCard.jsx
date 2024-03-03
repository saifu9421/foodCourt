import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Booking from "../booking/Booking";



const SpecialCard = ({data}) => {
    const {_id,img,title,name,price} =  data;

    return (
        <div>
          <div>
          <div className="hero  ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={img} className=" lg:max-w-lg md:max-w-lg max-w-80 rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-xl lg:text-2xl md:text-2xl mb-3 font-serif font-bold">{name}</h1>
      <p className="text-black font-serif mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla earum velit recusandae nemo? Reiciendis consequatur ipsa accusamus, at repellendus mollitia quam asperiores eligendi doloremque iure inventore recusandae placeat, nobis perspiciatis?</p> 

        <p className="mb-2 lg:mb-4 text-3xl font-bold text-slate-800 lg:text-3xl md:text-3xl font-serif  md:mb-4">price:{price}</p>
   
        <Link  className="btn btn-ghost text-black text-base font-serif bg-[#df6294]"><Booking></Booking></Link>
    </div>
  </div>
</div>

{/* <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card> */}


          </div>


        </div>
    );
};

export default SpecialCard;