import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Main = () => {
    return (
        <div className='bg-white'>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-50px)] pt-28'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;