import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";



const Home = () => {
    return (
        <div>
         <Banner></Banner>
        
         
         <div className="grid md:grid-cols-3 gap-6 max-w-[1300px] mx-auto">
                <div className="md:col-span-1"><Products /></div> {/* Takes 1/3 of space */}
                <div className="md:col-span-2"><Outlet /></div> {/* Takes 2/3 of space */}
            </div>
        </div>
    );
};

export default Home;