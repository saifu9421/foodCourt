import Navbar from "../navbar/Navbar";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/Animation - 1699568250829 (1).json";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { FaGoogle } from "react-icons/fa";


const SignUp = () => {
   const {creatUser,googleLogin} =  useContext(AuthContext);

     const handleSignUp = e=>{
        e.preventDefault();
           const name  =  e.target.name.value;
           const email =  e.target.email.value;
           const password =  e.target.password.value;
        
           if(password.length < 6){
                 swal("Opps!", "Password Must Be 6 char!", "error");
           } else{
             swal("Good Job!", "SignUp successfully!", "success");
           }

        //    const signUpValue = {
        //     name,email,password
        //    };
            
             creatUser(email,password).then(result=>{
                 const user  =  result.user;
                 console.log(user);
             }).catch(error=>{
                console.log(error);
             });

     }

     const handleGoogleLogin = ()=>{
        googleLogin().then(result=>{
            const user  =  result.user;
            console.log(user);
        }).catch(error=>{
           console.log(error);
        })
       
     }  

    return (
         <>
     
         <div>
         <div>
            <Navbar></Navbar>
           

            <div className="hero lg:min-h-[90vh]  md:min-h-[90vh] min-h-screen">
  <div className="hero-content  lg:gap-52  md:gap-9  lg:flex-row flex-col-reverse md:flex-row-reverse">
         <Lottie className="shadow-2xl rounded-lg " animationData={loginAnimation}> </Lottie>
    {/* <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div> */}
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-t to-pink-200 from-rose-200">
           <h1 className="lg:text-center md:text-center text-center text-lg lg:text-2xl  md:text-2xl font-serif font-bold mt-4">SignUp </h1>
      <form  onSubmit={handleSignUp} className="card-body">

      <div className="form-control">
          <label className="label">
            <span className="label-text lg:text-lg md:text-lg text-lg font-serif font-bold">Name:</span>
          </label>
          <input type="text" placeholder="email"  name="name" className="input  border-1 rounded-lg  border-rose-900 " required />
        </div>

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
          <button className="btn rounded-lg btn-outline hover:bg-rose-300 hover:text-slate-950">Sign Up</button>
        </div>
      </form>
      <p className="text-center">other opsation</p> <hr />
        <div className="flex  mt-3 justify-around gap-7">
        <Link  className=" ml-9 font-serif font-bold mb-4 text-xl" to="/Login">Login</Link>
     <Link className="text-xl lg:text-2xl md:text-2xl" onClick={()=> handleGoogleLogin()}><FaGoogle /></Link>
        </div>
    </div>
  </div>
</div>
        </div>
        </div>
         </>
    );
};

export default SignUp;