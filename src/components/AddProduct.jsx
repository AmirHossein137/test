import { useState } from "react";
import { useAppContext } from "../context/AppContext";

const AddProduct = () => {
  const { categoryList, allProduct, setUpdateList, updateList } =
    useAppContext();
  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    selected: "",
  });

  console.log(product.selected);

  const handleChange = (e) => {
    const { target } = e;
    setProduct({
      ...product,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProduct({ name: "", quantity: "", selected: "" });
    allProduct.push(product);
    setUpdateList(!updateList);
  };

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-slate-900 font-semibold text-lg">Add Product</h3>
      <form
        onSubmit={handleSubmit}
        className="w-full p-4 bg-white shadow-xl rounded-2xl flex flex-col gap-6"
      >
        <div className="flex items-center gap-3">
          <div className="w-1/2 flex flex-col gap-2">
            <label className="text-slate-800 pl-3">Product Name :</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="bg-transparent h-12 border border-gray-200 rounded-lg outline-none indent-3 text-black"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <label className="text-slate-800 pl-3">Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
              className="bg-transparent h-12 border border-gray-200 rounded-lg outline-none indent-3 text-black"
            />
          </div>
        </div>
        <select
          name="selected"
          value={product.selected}
          onChange={handleChange}
          className="select select-bordered w-full bg-white text-slate-950"
        >
          <option selected>Select Category</option>
          {categoryList.map((category, index) => (
            <>
              <option key={index} value={category}>
                {category}
              </option>
            </>
          ))}
        </select>
        <button className="btn btn-success text-white text-lg" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
