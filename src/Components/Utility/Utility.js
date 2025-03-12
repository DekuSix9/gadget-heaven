const getStoredProduct = () => {
    const storedProductStr = localStorage.getItem("product-list");
    return storedProductStr ? JSON.parse(storedProductStr) : []; 
};

const setStoredProduct = (id) => {
    const storedList = getStoredProduct();
    storedList.push(id); 
    localStorage.setItem("product-list", JSON.stringify(storedList)); 
};

export { setStoredProduct, getStoredProduct };
