import { httpClient } from "../httpClient";

export interface SigninParams {
    email: string;
    password: string;
}

interface SigninRespose {
    accessToken: string;
}

export async function signin(params: SigninParams) {
  const { data } = await httpClient.post<SigninRespose>("/auth/singin", params);

  return data;
}
