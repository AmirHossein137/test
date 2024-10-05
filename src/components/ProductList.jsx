import { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import Filters from "./Filters";

const ProductList = () => {
  const { products, updateList, handleProductDelete } = useAppContext();

  useEffect(() => {
    console.log(products);
  }, [updateList]);

  return (
    <div className="flex flex-col gap-3">
      <div>
        <Filters />
      </div>
      <h3 className="text-lg border-b border-gray-300 text-slate-900 font-semibold">
        ProductList
      </h3>
      <div className="flex flex-col gap-4 text-slate-700">
        {products?.map((product, index) => (
          <div key={index} className="flex items-center justify-between">
            <span>{product.name}</span>
            <div className="flex items-center gap-4">
              <span>{product.selected}</span>
              <span>{product.quantity}</span>
              <button
                className="btn btn-error btn-sm"
                onClick={() => handleProductDelete(product.name)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
