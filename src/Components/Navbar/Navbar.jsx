import { useState } from 'react';
import { Link } from 'react-router-dom';
import Love from '../../assets/Image/love.png';
import Cart from '../../assets/Image/cart.png';
import { FiMenu, FiX } from 'react-icons/fi'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenu=()=>{
        setIsOpen(!isOpen)
    }

    return (
        <nav className="bg-[#9538E2] text-white p-4 max-w-[1400px] mx-auto">
            <div className="container mx-auto flex justify-between items-center">
              
                <h1 className="text-2xl font-bold ">Gadget Heaven</h1>

                <button onClick={handleMenu} className="md:hidden text-white text-2xl">
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>

                <ul className={`md:flex gap-6 text-lg absolute md:static top-16 left-0 w-full bg-[#9538E2] p-4 md:p-0 md:w-auto transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
                    <li><Link to="/" className="block py-2 px-4 hover:text-gray-300">Home</Link></li>
                    <li><Link to="/statics" className="block py-2 px-4 hover:text-gray-300">Statistics</Link></li>
                    <li><Link to="/dashboard" className="block py-2 px-4 hover:text-gray-300">Dashboard</Link></li>
                </ul>

                <div className="flex items-center gap-4 ">
    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
        <img src={Love} alt="Wishlist" className="w-6 h-6 cursor-pointer" />
    </div>
    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
        <img src={Cart} alt="Cart" className="w-6 h-6 cursor-pointer" />
    </div>
</div>

            </div>
        </nav>
    );
};

export default Navbar;
