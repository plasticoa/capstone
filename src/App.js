import Home from "./pages/home/Home.component";
import { Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.component";
import Signin from "./pages/signin/Signin.component";
import Shop from "./pages/shop/Shop.component";

const App = () => {

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
