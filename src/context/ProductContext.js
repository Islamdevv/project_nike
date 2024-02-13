import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const API_PRODUCTS = "http://localhost:3000/data";

  const [data, setData] = useState([]);
  const [oneProduct, setOneProduct] = useState({});

  async function addProduct(newProduct) {
    await axios.post(API_PRODUCTS, newProduct);
  }

  async function readProduct() {
    const { data } = await axios(API_PRODUCTS);
    setData(data);
  }

  async function deleteProduct(id) {
    await axios.delete(`${API_PRODUCTS}/${id}`);
    readProduct();
  }

  async function getOneProduct(id) {
    const { data } = await axios(`${API_PRODUCTS}/${id}`);
    setOneProduct(data);
    readProduct();
  }

  async function editProduct(id, editedProduct) {
    await axios.patch(`${API_PRODUCTS}/${id}`, editedProduct);
  }

  const [page, setPage] = useState(1);
  const itemsPage = 6;
  const count = Math.ceil(data.length / itemsPage);

  function currentPage() {
    const begin = (page - 1) * itemsPage;
    const end = begin + itemsPage;
    return data.slice(begin, end);
  }

  const values = {
    addProduct,
    readProduct,
    data,
    deleteProduct,
    getOneProduct,
    oneProduct,
    editProduct,
    setPage,
    currentPage,
    count,
    setData,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
