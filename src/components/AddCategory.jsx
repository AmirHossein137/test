import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const AddCategory = () => {
  const [show, setShow] = useState(false);
  const { addCategory, setAddCategory, categoryList } = useAppContext();

  const handleChange = (e) => {
    const { target } = e;
    setAddCategory({
      ...addCategory,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addCategory.category.length > 1) {
      categoryList.push(addCategory.category);
      toast.success(`${addCategory.category} Added ...`);
    }

    setAddCategory({ category: "", description: "" });
    console.log(categoryList);
  };

  return (
    <>
      <button
        className="btn btn-active btn-primary text-white"
        onClick={() => setShow(true)}
      >
        Add Category
      </button>
      {show && (
        <div className="flex flex-col gap-3 mt-5">
          <h3 className="text-slate-900 font-semibold text-lg">
            Add New Category
          </h3>
          <form
            onSubmit={handleSubmit}
            className="w-full p-4 bg-white shadow-xl rounded-2xl flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3">
              <label className="text-slate-800 pl-3">Category Name :</label>
              <input
                type="text"
                placeholder="Enter Your Category Name..."
                name="category"
                value={addCategory.category}
                className="h-12 border border-gray-200 outline-none bg-transparent indent-3 rounded-lg text-black"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-slate-800 pl-3">Description :</label>
              <textarea
                className="bg-white border p-3 border-gray-200 rounded-xl outline-none text-black"
                rows={4}
                name="description"
                value={addCategory.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-6">
                <button
                  className="btn btn-error w-full text-white text-lg"
                  type="button"
                  onClick={() => setShow(false)}
                >
                  Cancel
                </button>
              </div>
              <div className="col-span-6">
                <button
                  className="btn btn-success w-full text-white text-lg"
                  type="submit"
                >
                  Add Category
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddCategory;
