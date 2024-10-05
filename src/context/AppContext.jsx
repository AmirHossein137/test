import { createContext, useContext, useState } from "react";

export const AppContext = createContext({});

export function useAppContext() {
  if (AppContext) {
    return useContext(AppContext);
  }
}

function AppContextProvider({ children }) {
  const [categoryList, setCategoryList] = useState([]);
  const [updateList, setUpdateList] = useState(false);
  const [allProduct, setAllProduct] = useState([]);
  const [addCategory, setAddCategory] = useState({
    category: "",
    description: "",
  });

  const handleProductDelete = (name) => {
    const deleted = allProduct.filter((elem) => elem.name !== name);
    setAllProduct(deleted);
  };

  console.log(allProduct);

  return (
    <AppContext.Provider
      value={{
        addCategory,
        setAddCategory,
        categoryList,
        allProduct,
        updateList,
        setUpdateList,
        handleProductDelete,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
