import CategoryItemComponent from "./components/category-item/CategoryItem.component";
import Home from "./pages/home/Home.component";
import { Routes, Route, Outlet } from "react-router-dom";

const App = () => {

  const Shop = () => {
    return (
      <h2>Shop component</h2>
    )
  }

  const Navigation = () => {
    return (
      <div>
        <div>
          <h2>Navigation component</h2>
          <Outlet></Outlet>
        </div>
      </div>

    )
  }

  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>

  );
}
export default App;
