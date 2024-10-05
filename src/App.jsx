import AddCategory from "./components/AddCategory";
import AddProduct from "./components/AddProduct";
import ProdcutList from "./components/ProductList";

function App() {
  return (
    <div className="bg-slate-100 w-full min-h-screen py-5">
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6">
            <AddCategory />
            <AddProduct />
          </div>
          <div className="col-span-6">
            <ProdcutList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
