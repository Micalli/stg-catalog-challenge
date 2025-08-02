import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../app/contexts/hooks/useAuth";

interface AuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  //   const { singnedIn } = useAuth();
  const singnedIn = true;

  if (!singnedIn && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (singnedIn && !isPrivate) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}
