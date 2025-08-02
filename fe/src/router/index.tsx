import { Routes, Route, BrowserRouter } from "react-router-dom";
import {Login} from '../view/pages/Login';
import { AuthGuard } from './AuthGuard';
import {Register} from '../view/pages/Register';
import { Shop } from '../view/pages/Shop';
// import { Dashboard } from "../view/pages/Dashboard";
// import { AuthLayout } from "../layouts/AuthLayout";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>
        <Route element={<AuthGuard isPrivate />}>
          <Route path="/" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
