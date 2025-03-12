import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredProduct } from "../Utility/Utility";

const Dashboard = () => {
    const allProducts = useLoaderData();
    const [cartItem, setCartItem] = useState([]); 

    useEffect(() => {
        const storedProductList = getStoredProduct();
        
        
        const addProductsToCart = allProducts.filter(product =>
            storedProductList.includes(product.id)
        );

        setCartItem(addProductsToCart);
    }, [allProducts]);

    const handleDelete = (id) => {
        
        const updatedCart = cartItem.filter(product => product.id !== id);
        setCartItem(updatedCart);

        
        const storedProductList = getStoredProduct();
        const updatedStorage = storedProductList.filter(storedId => storedId !== id);
        localStorage.setItem("product-list", JSON.stringify(updatedStorage));
    };

    return (
        <div className="mt-24">
            {cartItem.length === 0 ? (
                <p className="text-center text-gray-500">No products in cart</p>
            ) : (
                cartItem.map((product, index) => (
                    <div
                        key={index} 
                        className="flex items-center mt-4 justify-center ml-40 p-4 w-full max-w-xl border rounded-lg shadow-sm"
                    >
                        <div className="flex items-center space-x-4">
                            <div>
                                <img
                                    src={product.photo}
                                    alt={product.device_name}
                                    className="w-20 h-16 rounded"
                                />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold">{product.device_name}</h2>
                                <p className="text-sm text-gray-500">{product.details}</p>
                                <p className="font-semibold mt-1">${product.price}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => handleDelete(product.id)}
                            className="text-red-500 hover:bg-red-100 p-2 rounded"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Dashboard;
