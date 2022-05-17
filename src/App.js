import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";

import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import Sales from "./pages/sales/Sales";
import Analytics from "./pages/analytics/Analytics";

function App() {
  const location = window.location.pathname;
  const Alert = () => {
    if (location !== "/admin_panel/login") {
      return <Sidebar />;
    } else {
      return "";
    }
  };
  return (
    <BrowserRouter>
      <Topbar />
      <div className={location !== "/admin_panel/login" ? "container" : ""}>
        <Alert />
        <Routes>
          <Route path="/admin_panel/" exact element={<Home />} />
          <Route path="/admin_panel/login" element={<Login />} />
          <Route path="/admin_panel/users" element={<UserList />} />
          <Route path="/admin_panel/user/:userId" element={<User />} />
          <Route path="/admin_panel/newuser" element={<NewUser />} />
          <Route path="/admin_panel/products" element={<ProductList />} />
          <Route path="/admin_panel/product/:productId" element={<Product />} />
          <Route path="/admin_panel/newproduct" element={<NewProduct />} />
          <Route path="/admin_panel/sales" element={<Sales />} />
          <Route path="/admin_panel/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
