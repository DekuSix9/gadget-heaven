import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredProduct } from "../Utility/Utility";

const Dashboard = () => {
    const [cartItem, setCartItem] = useState([]); 
    const [showSuccess, setShowSuccess] = useState(false); 
    const allProducts = useLoaderData(); 

    useEffect(() => {
        const storedProductList = getStoredProduct();

        if (!storedProductList || storedProductList.length === 0) {
            setCartItem([]);
            return;
        }

       
        const cartWithQuantities = storedProductList.map(id => 
            allProducts.find(product => product?.id === id)
        ).filter(Boolean); 

        setCartItem(cartWithQuantities);
    }, [allProducts]); 

    const handleDelete = (id) => {
        const updatedCart = [...cartItem];
        const index = updatedCart.findIndex(product => product.id === id);

        if (index !== -1) {
            updatedCart.splice(index, 1);
        }

        setCartItem(updatedCart);

        const storedProductList = getStoredProduct();
        const storageIndex = storedProductList.indexOf(id);
        if (storageIndex !== -1) {
            storedProductList.splice(storageIndex, 1);
        }

        localStorage.setItem("product-list", JSON.stringify(storedProductList));
    };
    
    const handlePurchase = () => {
        setShowSuccess(true);
        setCartItem([]); 
        localStorage.removeItem("product-list");
    };

    const totalCost = cartItem.reduce((acc, product) => acc + (product?.price || 0), 0);

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
                            <img
                                src={product?.photo || "placeholder.jpg"}
                                alt={product?.device_name || "No Name"}
                                className="w-20 h-16 rounded"
                            />
                            <div>
                                <h2 className="text-lg font-semibold">{product?.device_name || "Unknown Device"}</h2>
                                <p className="text-sm text-gray-500">{product?.details || "No details available"}</p>
                                <p className="font-semibold mt-1">${product?.price || 0}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => handleDelete(product?.id)}
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
            <div className="flex justify-center mt-6">
                <div className="p-4 border rounded-lg shadow-md w-1/2 text-center">
                    <h2 className="text-xl font-semibold">Total Cost: ${totalCost.toFixed(2)}</h2>
                    <button 
                        onClick={handlePurchase}
                        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    >
                        Purchase
                    </button>
                </div>
            </div>
            {showSuccess && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-semibold text-green-500">Payment Successful!</h2>
                        <p className="mt-2 text-gray-600">Thank you for your purchase.</p>
                        <button 
                            onClick={() => setShowSuccess(false)}
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
