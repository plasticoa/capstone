import Home from "./pages/home/Home.component";
import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.component";
import Signin from "./pages/signin/Signin.component";
const App = () => {

  const Shop = () => {
    return (
      <h2>Shop component</h2>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<Signin />} />
      </Route>
    </Routes>

  );
}
export default App;
