import { httpClient } from "../httpClient";


export async function singout() {
  const { data } = await httpClient.post("/auth/singout");

  return data;
}
