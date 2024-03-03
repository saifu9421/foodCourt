import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { FiShoppingCart } from "react-icons/fi";
import SpecialCard from "../page/SpecialCard";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Booking from "../booking/Booking";

const Navbar = () => {
        
const {user, logOut} = useContext(AuthContext);
         
   const logout = ()=>{
    logOut();
   }



//  const handleProfole = ()=>{

//  {/* Open the modal using document.getElementById('ID').showModal() method */}
//    <> 

   

// <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button><dialog id="my_modal_1" className="modal">
//      <div className="modal-box">
//        <h3 className="font-bold text-lg">Hello!</h3>
//        <p className="py-4">Press ESC key or click the button below to close</p>
//        <div className="modal-action">
//          <form method="dialog">
//            {/* if there is a button in form, it will close the modal */}
//            <button className="btn">Close</button>
//          </form>
//        </div>
//      </div>

//    </dialog> 
//    </>
 
//  };


    return (
        <div>
          {/* <h1 className="text-center">Welcome</h1> */}
            <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar ">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 

       <Link to="/"  className="flex-1 px-2 mx-2" ><img className="rounded-full w-44  h-24 ml-3" src="https://i.ibb.co/qWD8ZYc/logo.png" alt="" /></Link>

      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li><NavLink 
          className= {({isActive})=>
            isActive? "lg:text-lg md:text-lg rounded-lg text-base text-orange-600": "lg:text-lg rounded-lg md:text-lg text-base"}    to="/">Home</NavLink></li>

          <li><NavLink className={({isActive})=>
           isActive?   "lg:text-lg md:text-lg text-base text-orange-600 rounded-lg " :  "lg:text-lg md:text-lg rounded-lg text-base  "
        }
         to="/about">About</NavLink></li>
          <li>
        
        <details>
         
           <summary  className="lg:text-lg rounded-lg md:text-lg text-base  " >
           Special Dishes
           </summary>

          <ul className="p-2  bg-base-100 ">
            <li><Link to="/special">Margherita Pizza</Link></li>
            <li><Link to="/special">Classic Cheeseburger</Link></li>
          
          </ul>
        </details>
      </li>
     
   <li><NavLink  className= {({isActive})=>
            isActive? "lg:text-lg md:text-lg text-base rounded-lg text-orange-600": "lg:text-lg md:text-lg rounded-lg text-base"} to="/menu" >Menu</NavLink></li>
   <li><NavLink  className= {({isActive})=>
            isActive? "lg:text-lg md:text-lg text-base text-orange-600 rounded-lg": "lg:text-lg md:text-lg rounded-lg text-base"} to="/team" >Team</NavLink></li>
    

{/*    
    <div className="text-2xl">
       <FiShoppingCart />
       </div> */}

        </ul>
      
      </div>
     
    {
         user?.email ?  <>
          <div className=" hover:btn   hover:rounded-lg" onClick={logout}> logout</div> 

          <Stack  className="ml-5 dropdown dropdown-bottom" direction="row" spacing={2}>
         <Avatar  className="" alt="Cindy Baker" src={user?.photoURL} />
         
        

       </Stack>



         </>
         :  <li><NavLink  className= {({isActive})=>
         isActive? "lg:text-lg md:text-lg text-base  rounded-lg text-orange-600": "lg:text-lg   rounded-lg md:text-lg text-base"} to="/login">Login</NavLink>
         </li> 
    }

     
    </div>
    {/* Page content here */}
     
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
      {/* Sidebar content here */}
      <li><Link className="lg:text-lg md:text-lg  " to="/">Home</Link></li>
          <li><Link className="lg:text-lg md:text-lg " to="/about">About</Link></li>
        
          <li>
        <details>
         
           <summary  className="lg:text-lg md:text-lg  text-base " >
           Special Dishes
           </summary>

          <ul className="p-2  bg-base-100 ">
            <li><Link>Beef Steak Sauce</Link></li>
            <li><Link>SalmonZucchini</Link></li>
         
          </ul>
        </details>
      </li>
      <li><Link to="/menu" className="lg:text-lg md:text-lg  text-base ">Menu</Link></li>
   <li><Link  to="/team"  className="lg:text-lg md:text-lg  text-base ">Team</Link></li>
    
         </ul>

    {
      //    user?.email ?  <>
      //     <div className=" hover:btn   hover:rounded-lg" onClick={logout}> logout</div> 

      //     {/* <Stack className="ml-5" direction="row" spacing={2}>
      //    <Avatar alt="Cindy Baker" src={user?.photoURL} />
      //  </Stack> */}

      //    </>
      //    :  <li><NavLink  className= {({isActive})=>
      //    isActive? "lg:text-lg md:text-lg text-base  rounded-lg text-orange-600": "lg:text-lg   rounded-lg md:text-lg text-base"} to="/login">Login</NavLink>
      //    </li> 
    }
  </div>

</div>
        </div>
    );
};

export default Navbar;