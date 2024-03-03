
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }; 



const Booking = () => {
          const [booking,setBooking] =  useState([]);
          const [startDate, setStartDate] = useState(new Date());

          useEffect(()=>{
            fetch("http://localhost:4000/api/v1/services",{
                credentials:"include",
            })
            .then(res=>res.json()).then(data=> setBooking(data));
          },[]);

     

       const {user} =  useContext(AuthContext);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  

    return (
        <div>
              <div>
           
      <Button className='text-black' onClick={handleOpen}>Book A table</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

    {/* <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div> */}
    <div className="card shrink-0 w-full">
      <form className="card-body">
                <h1 className='text-xl lg:text-xl md:text-xl  text-center text-black font-bold'>Book Now </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg">your Name:</span>
          </label>
          <input type="text" placeholder="Your name"  defaultValue={user?.displayName} className="input rounded-lg input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input type="text" placeholder="product name" defaultValue={booking?.name} className="input rounded-lg input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" placeholder="price" defaultValue={booking?.price} className="input rounded-lg input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" defaultValue={user?.email} className="input rounded-lg input-bordered" required />
        </div>


        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" placeholder="Date"  className="input rounded-lg input-bordered" required />
        </div> */} 
        <h1 className='text-base'>date:</h1>
         <div className='ml-1 md:ml-1 lg:ml-1 mt-2 lg:mt-2 md:mt-2'>
          <DatePicker className="btn rounded-lg lg:text-left md:text-left text-left" selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
           
        <div className="form-control">
          <label className="label">
            <span className="label-text">phone</span>
          </label>
          <input type="number" placeholder="your mobile number" className="input rounded-lg input-bordered" required />
        </div>

        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input rounded-lg  input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div> */}

        <div className="form-control mt-6">
          <button className="btn btn-primary">Book</button>
        </div>
      </form>
    </div>


        </Box>
      </Modal>
    </div>
        </div>
    );
};

export default Booking;