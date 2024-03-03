import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/RootComponent/Root';
import Home from './component/page/Home';
import About from './component/page/About';
import Menu from './component/page/Menu';
import Team from './component/page/Team';
import SignUp from './component/page/SignUp';
import Login from './component/page/Login';
import AuthProvider from './component/provider/AuthProvider';
import PrivetRoute from './component/page/PrivetRoute';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Booking from './component/booking/Booking';
import Special from './component/page/Special';
import SpecialCard from './component/page/SpecialCard';


const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
       {
        path:"/",
          element:<Home></Home>,
       },{
               path:"/about",
               element:<About></About>,
       },{
        path:"/menu",
           element:<Menu></Menu>,
       },{
        path:"/team",
        element: <PrivetRoute><Team></Team></PrivetRoute>,
       },{
        path:"/signup",
         element:<SignUp></SignUp>,
       },{
        path:"/login",
        element:<Login></Login>,
       },{
         path:"/booking",
         element:<Booking></Booking>,
       },
       {
        path:"/special",
        element:<Special></Special>,
       },{

       }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
     <div className='lg:w-11/12 lg:mx-auto md:w-11/12 md:mx-auto w-11/12 mx-auto'>
       <React.StrictMode>
       <QueryClientProvider client={queryClient}>
       <AuthProvider> <RouterProvider router={router} /></AuthProvider>
        </QueryClientProvider>
  </React.StrictMode> 
     </div>
)


