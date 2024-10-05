
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
  const [filters, setFilters] = useState({
    search: "",
    sort: "",
    category: "",
  });
  const [allProduct, setAllProduct] = useState([]);
  const [addCategory, setAddCategory] = useState({
    category: "",
    description: "",
  });

  const handleFilterChange = (e) => {
    const { target } = e;
    setFilters({
      ...filters,
      [target.name]: target.value,
    });
  };

  const filterItemsBySearch = allProduct.filter(
    (item) =>
      item.name
        .toLocaleLowerCase()
        .indexOf(filters.search.toLocaleLowerCase()) !== -1
  );

  function filteredProducts(allProduct, search, sort, category) {
    let product = allProduct;

    if (filters.search) {
      product = filterItemsBySearch;
    }
    if (filters.sort) {
      if (sort === "" || sort === "latest") {
        return product;
      } else {
        product = [].concat(product).reverse();
      }
    }

    if (filters.category) {
      product = product.filter(({ selected }) => category === selected);
    }

    return product;
  }

  const products = filteredProducts(
    allProduct,
    filters.search,
    filters.sort,
    filters.category
  );

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
        setAllProduct,
        handleProductDelete,
        products,
        filters,
        handleFilterChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
