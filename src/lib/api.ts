// src/lib/api.ts
import { useAuth } from "@/auth/AuthContext";

const API_BASE = (import.meta as any)?.env?.VITE_API_BASE ?? "http://127.0.0.1:8000";

export function useApi() {
  const { getAccessToken } = useAuth();

  async function request(input: string, init?: RequestInit) {
    const token = await getAccessToken();
    const headers = new Headers(init?.headers || {});
    if (token) headers.set("Authorization", `Bearer ${token}`);
    const res = await fetch(`${API_BASE}${input}`, { ...init, headers });
    if (!res.ok) {
      const t = await res.text().catch(() => "");
      throw new Error(t || `${res.status} ${res.statusText}`);
    }
    return res;
  }

  return {
    get: async <T>(url: string) => (await request(url)).json() as Promise<T>,
    del: async (url: string) => (await request(url, { method: "DELETE" })).text(),
    postJson: async <T>(url: string, body: any) =>
      (await request(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })).json() as Promise<T>,
    patchJson: async <T>(url: string, body: any) =>
      (await request(url, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })).json() as Promise<T>,
    raw: request,
  };
}
