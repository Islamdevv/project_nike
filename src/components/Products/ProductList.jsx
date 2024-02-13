import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { readProduct, data, currentPage } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div className="list">
      {data.length >= 1 ? (
        currentPage().map((el) => <ProductCard el={el} />)
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default ProductList;
