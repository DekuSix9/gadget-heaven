import { useLoaderData, useParams } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams();  
    const data = useLoaderData();

    if (!data || data.length === 0) {
        return <p className="text-center text-red-500">No products available</p>;
    }

    const product = data.find(product => product.id === id);  

    if (!product) {
        return <p className="text-center text-red-500">Product not found</p>;
    }

    const { device_name, photo, details, price } = product;

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-3xl mx-auto p-6 flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3">
                <img className="w-full h-auto rounded-lg object-cover" src={photo} alt={device_name} />
            </div>
            <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-900">{device_name}</h2>
                <p className="text-lg text-gray-700 mt-1 font-semibold">Price: ${price}</p>
                <p className="mt-4 text-gray-600">{details}</p>
                <div className="mt-6">
                    <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
