import { useAppContext } from "../context/AppContext";

const Filters = () => {
  const { categoryList, filters, handleFilterChange } = useAppContext();

  return (
    <div className="flex flex-col gap-3 mb-5">
      <h3 className="text-lg border-b border-gray-300 text-slate-900 font-semibold">
        Filters
      </h3>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <label htmlFor="srch">Search</label>
          <input
            type="text"
            id="srch"
            name="search"
            value={filters.search}
            onChange={handleFilterChange}
            placeholder="Sarch Product ..."
            className="w-full text-black max-w-md h-12 bg-white border border-gray-200 outline-none rounded-lg indent-3"
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="sort">Sort</label>
          <select
            id="sort"
            value={filters.sort}
            name="sort"
            onChange={handleFilterChange}
            className="select select-bordered w-full max-w-md bg-white text-slate-950"
          >
            <option value="" selected>Select Sort</option>
            <option value="latest">latest</option>
            <option value="earliest">earliest</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="cat">Category</label>
          <select
            id="cat"
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="select select-bordered w-full max-w-md bg-white text-slate-950"
          >
            <option value="" selected>
              Select Category
            </option>
            {categoryList.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
