import { Outlet } from "react-router-dom";
import Footer from "../page/Footer";


const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Root;