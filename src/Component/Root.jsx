import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";



const Root = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;