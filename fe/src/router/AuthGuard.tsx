import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../app/contexts/hooks/useAuth";
import toast from "react-hot-toast";

interface AuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const { singnedIn } = useAuth();
  // const singnedIn = true;

  if (!singnedIn && isPrivate) {
    toast.error("Sua sessão expirou!");
    return <Navigate to="/login" replace />;
  }

  if (singnedIn && !isPrivate) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}
