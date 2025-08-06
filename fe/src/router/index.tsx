import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "../view/pages/Login";
import { AuthGuard } from "./AuthGuard";
import { Register } from "../view/pages/Register";
import { Shop } from "../view/pages/Shop";
import { Cart } from "../view/pages/Cart";
import { ProductDetails } from "../view/pages/ProductDetails";
import { History } from '../view/pages/History';
import { ShopProvider } from '../view/shopContext';

export function Router() {
  return (
       <ShopProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<AuthGuard isPrivate />}>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
        </ShopProvider>
  );
}
