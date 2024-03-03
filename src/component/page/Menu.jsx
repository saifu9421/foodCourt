import axios  from "axios";
import Navbar from "../navbar/Navbar";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import ServicesCard from "./ServicesCard";

import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useState } from "react";
// import Pagination from '@mui/material/Pagination';
// import PaginationItem from '@mui/material/PaginationItem';

// import  {Pagination}  from 'flowbite-react';
// import { useState } from 'react';




const Menu = () => {

  // const [currentPage, setCurrentPage] = useState(1);
  // const onPageChange = (page: number) => setCurrentPage(page);
  const [price ,setPrice] =  useState("");
  const [ name,setName] =  useState("");  
  const [page,setPage] = useState(1);

  const limit =  10;
 console.log(page);


       console.log(name);
   const foodServices  = async()=>{
              const foodData =  await axios(`http://localhost:4000/api/v1/services?sortField=price&sortOrder=${price}&name=${name}&page=${page}&limit=${limit}` , {withCredentials:true});
              return foodData;
   }
    
    const {data,isError ,isLoading} =  useQuery({
             queryKey:["foodServices",price,name,page],
             queryFn:foodServices
    });
        

  const totalpage  =  Math.ceil(data?.data?.total /limit) ;
      console.log(totalpage);


      const handelPrevious = ()=>{
       if(page > 1){
        setPage(page-1);
       }

      }

      const handelNextPage =  ()=>{
          if(page < 5){
            setPage(page+1);
          }
      }
    
       
    return (



         <>
         <Navbar></Navbar>
         <div className="lg:mb-7 md:mb-7 mb-2">

             <div className="text-center mt-4 lg:mt-8 md:mt-8">
             <h1 className="text-lg font-serif font-bold mb-2">Specialties</h1>
          <p  className="text-2xl lg:text-2xl md:text-2xl mb-2 text-black font-serif font-bold">Our Menu</p>
             </div>

          <div className="flex gap-7 justify-items-end items-center lg:mt-9 md:mt-9 mt-5 lg:mb-11 md:mb-11 mb-4 ">

          <div className="">

             <select className="select w-full max-w-sm select-secondary text-lg font-serif font-bold " 
             
             onChange={(e)=>setPrice(e.target.value)}
             >
  <option disabled selected >Price</option>
  <option value='asc'>From Low to high</option>
  <option value="desc">From high to Low</option>
</select>
             </div>



             <div className="">
             <select className="select w-full max-w-sm select-secondary text-lg font-serif font-bold "
             
               onChange={(e)=> setName(e.target.value)}
              >
  <option disabled selected> your favorite Food</option>
  <option value="">ALL Food</option>
  <option value="Artisanal Cheese Selection">Artisanal Cheese Selection</option>
  <option value="Classic Guacamole">Classic Guacamole</option>
  <option value="Fettuccine Alfredo">Fettuccine Alfredo</option>
  <option value="Red Velvet Cupcakes">Red Velvet Cupcakes</option>
  <option value="bargar">bargar</option>
 
</select>
             </div>
          </div>




          <div  className="grid grid-cols-2  lg:grid-cols-4 lg:gap-6 md:gap-5 gap-4  md:grid-cols-3">
                {
                    data?.data.services?.map(foodService=> <ServicesCard key={foodService._id} foodDataCard={foodService}> 

                    </ServicesCard>)
                }
          </div>

       <div className="text-center">
       <div  
    
       className="join rounded-lg mt-5 max-w-sm  lg:mt-5 md:mt-5 ">
       <button  onClick={handelPrevious} className="join-item btn btn-outline">Previous page</button >

              {
                [...Array(5).fill(0)].map((itme , index) =>  
               {
  
                   const pageNumber = index +1
                return (
                  <button key={pageNumber}
                  onClick={()=> setPage(pageNumber)}
                   className="join-item btn btn-primary btn-ghost"
                  >
                    {pageNumber}
                  </button> 
                )
               }
                
                )

              }

  <button onClick={handelNextPage} className="join-item btn btn-outline">Next</button>
</div>
 
       </div>
   
 {/* <div className="flex overflow-x-auto sm:justify-center">
      <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
    </div> */}



        </div>

         </>
    );
};

export default Menu;