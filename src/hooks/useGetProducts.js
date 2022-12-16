import React from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const response = await axios.get(API);
      setProducts(response.data);
    }
    getData();
  },[]);

  return products;

};

export { useGetProducts };
