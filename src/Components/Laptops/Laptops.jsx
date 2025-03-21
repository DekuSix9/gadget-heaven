import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Laptops = () => {
     const [laptops,setlaptops] = useState([]);
    
      useEffect(()=>{
            fetch('Laptops.json')
            .then(res=>res.json())
            .then(data=>setlaptops(data))
      },[])
    return (
        <div className="container mx-auto p-6">
      
    

      <div className="grid md:grid-cols-3 gap-6">
        {laptops.map((product) => (
          <div
            key={product.id}
            className=" shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
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
            <Link to={`/laptops/${product.id}`} className="mt-3 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Laptops;