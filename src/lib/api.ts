// src/lib/api.ts
import { useAuth } from "./auth";

const API_BASE =
  (import.meta as any)?.env?.VITE_API_BASE ?? "https://welfordsystems.com/api";

export function useApi() {
  const { getAccessToken, signout } = useAuth();

  async function request(input: string, init: RequestInit = {}) {
    const headers = new Headers(init.headers || {});
    const token = await getAccessToken();
    if (token) headers.set("Authorization", `Bearer ${token}`);

    // Only set JSON content-type if caller didn't set it,
    // and if body is NOT FormData/Blob/ArrayBuffer/etc.
    const body = init.body as any;
    const isFormLike =
      typeof FormData !== "undefined" && body instanceof FormData;
    const hasContentType = !!headers.get("Content-Type");
    if (!hasContentType && body && !isFormLike) {
      headers.set("Content-Type", "application/json");
    }

    let res: Response;
    try {
      res = await fetch(`${API_BASE}${input}`, {
        ...init,
        headers,
        mode: "cors",
      });
    } catch (e: any) {
      throw new Error(e?.message || "Network error (CORS or wrong API_BASE?)");
    }

    if (!res.ok) {
      if (res.status === 401) {
        // token expired or invalid; sign out to bounce to login
        signout();
      }
      const text = await res.text().catch(() => "");
      throw new Error(text || `${res.status} ${res.statusText}`);
    }

    return res;
  }

  return {
    // JSON GET
    get: async <T>(url: string) =>
      (await request(url)).json() as Promise<T>,

    // Plain text GET (useful for health checks, small text responses)
    getText: async (url: string) => (await request(url)).text(),

    // Binary GET (e.g., file downloads)
    getBlob: async (url: string) => (await request(url)).blob(),

    // DELETE that resolves to void (handles 204 No Content)
    del: async (url: string): Promise<void> => {
      await request(url, { method: "DELETE" });
    },

    // JSON POST/PATCH/PUT helpers
    postJson: async <T>(url: string, body: any) =>
      (await request(url, {
        method: "POST",
        body: JSON.stringify(body),
      })).json() as Promise<T>,

    patchJson: async <T>(url: string, body: any) =>
      (await request(url, {
        method: "PATCH",
        body: JSON.stringify(body),
      })).json() as Promise<T>,

    putJson: async <T>(url: string, body: any) =>
      (await request(url, {
        method: "PUT",
        body: JSON.stringify(body),
      })).json() as Promise<T>,

    // FormData POST (skips JSON Content-Type)
    postForm: async <T>(url: string, form: FormData) =>
      (await request(url, { method: "POST", body: form })).json() as Promise<T>,

    // Escape hatch
    raw: request,
  };
}
