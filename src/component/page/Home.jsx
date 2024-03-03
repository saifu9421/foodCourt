import Navbar from "../navbar/Navbar";
import BaggroundImg from "./BaggroundImg";
import Banner from "./Banner";
import Habout from "./Habout";
import Special from "./Special";
import Vidou from "./Vidou";


const Home = () => {
    return (
          <>
            <div>
          <Navbar></Navbar>
              
        </div>

        <div className="grid  md:flex gap-2 lg:gap-5 md:gap-7  justify-around ">
            <div className="">
            <Banner></Banner>
            </div>
        <div className="mt-4 mb-6">
           <Vidou></Vidou>
        </div>
        </div>

        <div>
          <Habout></Habout>
        </div>
        <div>
          <Special></Special>
        </div>
        <div>
          <BaggroundImg></BaggroundImg>
        </div>

          <div>
     
          </div>
          </>
    );
};

export default Home;