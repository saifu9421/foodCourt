import { Link } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";


const Vidou = () => {
    return (
        <div>
             <h1 className="lg:text-7xl md:text-7xl text-xl font-serif">
             We Love <br />
          Delicious Foods!
             </h1>
              <div className="lg:mt-7 lg:flex flex  md:flex  items-center lg:gap-7 md:gap-7 gap-3 md:mt-7 mt-3">
             <Link to="/menu"  className="lg:text-lg md:text-lg text-base font-serif btn bg-gradient-to-t rounded-lg to-pink-300 from-rose-400"> Explore Menu</Link>
                <Link to="https://youtu.be/QcOED9rj7Qw?si=jXlEvrs5x1RyUcH-" target="_blank" className="flex justify-center items-center lg:text-xl text-xl md:text-xl"> play video <FaPlayCircle /></Link>
              </div>
        </div>
    );
};

export default Vidou;



