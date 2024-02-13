import React from "react";
import Pagination from "@mui/material/Pagination";
import { useProduct } from "../../context/ProductContext";

export default function ProductPagination() {
  const { setPage, count } = useProduct();

  function handleChangePage(p, n) {
    setPage(n);
  }

  return (
    <Pagination onChange={handleChangePage} count={count} color="secondary" />
  );
}
