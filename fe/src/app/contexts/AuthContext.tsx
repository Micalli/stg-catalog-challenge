import { createContext, useCallback, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { localStorageKeys } from "../config/localStorageKeys";
import { User } from "../entities/User";
import { userService } from "../service/usersSevice";
import { authService } from "../service/authService";
interface AuthContextValue {
  singnedIn: boolean;
  user: User | undefined;
  singnin(accessToken: string): void;
  singnout(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [singnedIn, setSingnedIn] = useState<boolean>(() => {
    const storeAccessToken = localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN
    );
    return !!storeAccessToken;
  });

  const { isFetching, isSuccess, data } = useQuery({
    queryKey: ["users", "me"],
    queryFn: () => userService.me(),
    enabled: singnedIn,
    // staleTime: Infinity,
  });

  const { mutateAsync: singOut } = useMutation({
    mutationFn: async () => {
      return authService.singout();
    },
  });

  const singnin = useCallback( (accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
    setSingnedIn(true);
  }, []);

  const singnout = useCallback(async () => {
    await singOut();
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    setSingnedIn(false);
  }, []);

  const contextValue = {
    singnedIn: isSuccess && singnedIn,
    singnin,
    singnout,
    user: {
      email: data?.user.email,
      id: data?.user.id,
      name: data?.user.user_metadata.name,
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {!isFetching && children}
    </AuthContext.Provider>
  );
}
