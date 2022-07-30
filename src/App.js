import CategoryItemComponent from "./components/category-item/CategoryItem.component";
import Home from "./pages/home/Home.component";
import { Routes, Route } from "react-router-dom";

const App = () => {

  const Shop = () => {
    return (
      <h2>Shop component</h2>
    )
  }

  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>

  );
}
export default App;
