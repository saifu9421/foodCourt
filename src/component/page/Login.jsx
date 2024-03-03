import Navbar from "../navbar/Navbar";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/Animation - 1699568250829 (1).json";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import useAxios from "../hook/useAxios";
import axios from 'axios';

const Login = () => {
  
     const {login,} =   useContext(AuthContext);

   const navigate = useNavigate();
  //  const axios = useAxios;

    const handleLoginFrom = e =>{
        e.preventDefault();
        
      const email  = e.target.email.value;
      const password  = e.target.password.value; 
     
    //   if(email== login.email &&  password == login.password){
    //      swal("Good job!", "Login Successfully!", "success");
    //   }else{
    //      swal("OPPS!", "You email or password no match try agin!", "error");
    //   }

    //   const fromInputValue = {
    //     email,
    //     password
    // }; 
          
             login(email,password).then((result)=>{
                 const user  =  result.user;

      

          
           if(user){
         
            axios.post('http://localhost:4000/api/v1/auth/access-token',  {email:user.email},  {withCredentials: true} ).then(res=>{
               console.log(res.data);
            }  
            ).catch(error=>{
               console.log(error);
            })

            //    fetch("http://localhost:4000/api/v1/auth/access-token", {
            //     method:"POST",
            //     headers: {
            //       "Content-type": "application/json"
            //     },
            //       body:JSON.stringify({email:user?.email}),
            //       credentials:"include",

            // }).then(res=> res.json()).then(data=>{
            //   console.log(data);
            // })


            swal("Good job!", "Login Successfully!", "success");
            navigate("/");
            console.log(user);
          }
          
                }) .catch(error=>{
                  if(error){
              swal("OPPS!", "You email or password no match try agin!", "error");
                }
            console.log(error);
                })

    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero lg:min-h-[90vh]  md:min-h-[90vh] min-h-screen">
  <div className="hero-content  lg:gap-52  md:gap-9  lg:flex-row flex-col-reverse md:flex-row-reverse">
         <Lottie animationData={loginAnimation}> </Lottie>
    {/* <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div> */}
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-t to-pink-200 from-rose-200">
           <h1 className="lg:text-center md:text-center text-center text-lg lg:text-2xl  md:text-2xl font-serif font-bold mt-4">Login Now </h1>
      <form onSubmit={handleLoginFrom} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text lg:text-lg md:text-lg text-lg font-serif font-bold">Email:</span>
          </label>
          <input type="email" placeholder="email"  name="email" className="input  border-1 rounded-lg  border-rose-900 " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text  lg:text-lg md:text-lg text-lg font-serif font-bold">Password:</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input border-1 rounded-lg  border-rose-900" required />

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn rounded-lg btn-outline hover:bg-rose-300 hover:text-slate-950">Login</button>
        </div>
      </form>
       <Link  className=" ml-9 font-serif font-bold mb-4 text-xl" to="/signup">Sign Up</Link>
    </div>
  </div>
  
</div>


        </div>
        
    );
};

export default Login;