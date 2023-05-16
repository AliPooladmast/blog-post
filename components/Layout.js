import { createContext, useEffect, useState } from "react";
import Header from "./Header";
import { getCategories } from "@/services";

export const Context = createContext(null);

const Layout = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const categoriesRequest = async () => {
    const result = await getCategories();
    setCategories(result);
  };

  useEffect(() => {
    categoriesRequest();
  }, []);

  return (
    <Context.Provider value={categories}>
      <Header />
      {children}
    </Context.Provider>
  );
};

export default Layout;
