import { httpClient } from "../httpClient";

export async function me() {
    console.log("Chamando /users/me");
    const { data } = await httpClient.get("/users/me");
    console.log("Resposta /users/me:", data);
    return data;
}
