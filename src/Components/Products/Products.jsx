import { NavLink } from 'react-router-dom';

const Products = () => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg flex flex-col space-y-4">
            <NavLink 
                to="/" 
                className={({ isActive }) => 
                    isActive ? 'bg-purple-600 text-white p-2 rounded-lg' : 'bg-gray-200 text-black p-2 rounded-lg hover:bg-gray-300'
                }
                exact
            >
                All Product
            </NavLink>
            <NavLink 
                to="/laptops" 
                className={({ isActive }) => 
                    isActive ? 'bg-purple-600 text-white p-2 rounded-lg' : 'bg-gray-200 text-black p-2 rounded-lg hover:bg-gray-300'
                }
            >
                Laptops
            </NavLink>
            <NavLink 
                to="/phones" 
                className={({ isActive }) => 
                    isActive ? 'bg-purple-600 text-white p-2 rounded-lg' : 'bg-gray-200 text-black p-2 rounded-lg hover:bg-gray-300'
                }
            >
                Phones
            </NavLink>
            <NavLink 
                to="/smartwatches" 
                className={({ isActive }) => 
                    isActive ? 'bg-purple-600 text-white p-2 rounded-lg' : 'bg-gray-200 text-black p-2 rounded-lg hover:bg-gray-300'
                }
            >
                Smart Watches
            </NavLink>
            <NavLink 
                to="/macbooks" 
                className={({ isActive }) => 
                    isActive ? 'bg-purple-600 text-white p-2 rounded-lg' : 'bg-gray-200 text-black p-2 rounded-lg hover:bg-gray-300'
                }
            >
                MacBook
            </NavLink>
            <NavLink 
                to="/iphones" 
                className={({ isActive }) => 
                    isActive ? 'bg-purple-600 text-white p-2 rounded-lg' : 'bg-gray-200 text-black p-2 rounded-lg hover:bg-gray-300'
                }
            >
                iPhone
            </NavLink>
        </div>
    );
};

export default Products;
