"use server";
import { TOKEN_POST } from "@/functions/api";
import { cookies } from "next/headers";

export default async function login(formData: FormData) {
  const username = formData.get("username") as string | null;
  const password = formData.get("password") as string | null;
  console.log(username, password);
  console.log(formData);
  try {
    if (!username || !password) throw new Error("Preencha os dados.");
    const { url } = TOKEN_POST();
    console.log(url);
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) throw new Error("Senha ou usuário inválidos.");
    const data = await response.json();
    console.log(data);
    cookies().set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });
    return { data: null, ok: true, error: "" };
  } catch (error: any) {
    console.log("Aqui deu erro =======> ");
    console.log(error);
  }
}

// try {
//   if (!username || !password) throw new Error("Preencha os dados.");
//   const { url } = TOKEN_POST();
//   const response = await fetch(url, {
//     method: "POST",
//     body: formData,
//   });
//   if (!response.ok) throw new Error("Senha ou usuário inválidos.");
//   const data = await response.json();
//   cookies().set("token", data.token, {
//     httpOnly: true,
//     secure: true,
//     sameSite: "lax",
//     maxAge: 60 * 60 * 24,
//   });
//   return { data: null, ok: true, error: "" };
// } catch (error: unknown) {
//   return apiError(error);
// }
