import { useState } from "react";
import axios from "axios";

import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import ServicesCard from "./ServicesCard";
import SpecialCard from "./SpecialCard";



const Special = () => {
// const [services,setServices] =  useState([]);

 const getServices = async()=>{
    const res =  await axios.get("http://localhost:4000/api/v1/towfood",)
      return res;
 };
  
 

const {data,
  isLoading,isError} = useQuery({
    queryKey:["service"],
    queryFn: getServices,
}) 

    console.log(data);

    return (
        <div className=" mt-7 mb-7">

          <div className="lg:text-center md:text-center text-center ">
            <p className="text-xl font-serif text-pink-900 lg:text-3xl md:text-3xl mb-4 lg:mb-4 md:mb-4 mt-4 lg:mt-4 font-semibold">Specialties</p>
            <p className="text-2xl lg:text-4xl md:text-3xl mb-4 lg:mb-4 md:mb-4 font-serif font-semibold text-black"
            >Special Dishes
            </p>
            {/* <p className="text-lg lg:text-lg md:text-lg mb-7 font-serif font-semibold ">Cursus ultricies in maecenas pulvinar ultrices integer quam amet, semper dictumst <br /> sit interdum ut venenatis pellentesque nunc.</p> */}
          </div>
 
          <div className="grid lg:grid-cols-0 md:grid-cols-0 ">
                {
                 data?.data?.map(item=> <SpecialCard key={item?._id} data={item}> 

                 </SpecialCard>)
                }
          </div>
        </div>
    );
};

export default Special;