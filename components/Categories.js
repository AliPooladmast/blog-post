import { getCategories } from "../services";
import React, { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const categoriesRequest = async () => {
    const result = await getCategories();
    setCategories(result);
  };

  useEffect(() => {
    categoriesRequest();
  }, []);

  return <div>Categories</div>;
};

export default Categories;
