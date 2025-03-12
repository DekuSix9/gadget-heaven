import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
 

    useEffect(() => {
        fetch("Products.json")
            .then((res) => res.json())
            .then((data) => setAllProducts(data));
               
            
            
    }, []);

    

    return (
        <div className="container mx-auto p-6">
            <div className="grid md:grid-cols-3 gap-6">
                {allProducts.length === 0 ? (
                    <p className="text-center text-gray-500">No products available</p>
                ) : (
                    allProducts.map((product) => (
                        <div
                            key={product.id}
                            className="shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
                        >
                            <div className="w-full h-32 bg-gray-200 rounded-md flex items-center justify-center">
                                <img
                                    src={product.photo}
                                    alt={product.device_name}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>
                            <h2 className="mt-4 text-lg font-semibold">{product.device_name}</h2>
                            <p className="text-gray-600">Price: {product.price}</p>
                            <Link
                                to={`/${product.id}`}
                                className="mt-3 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
                            >
                                View Details
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AllProducts;





{/* <Link to={`/${product.id}/${encodeURIComponent(product.device_name)}`} className="mt-3 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
  View Details
</Link> */}
