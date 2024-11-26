import React, { createContext, useState } from "react";
import { mockProducts } from "../assets/mockData";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const searchProducts = (searchTerm) => {
    const term = searchTerm.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  return (
    <ProductContext.Provider value={{ products, filteredProducts, setProducts, searchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
