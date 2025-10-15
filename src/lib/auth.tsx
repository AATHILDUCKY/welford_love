import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type User = { id: number; username: string; is_admin: boolean; created_at: string; };

type AuthContextValue = {
  user: User | null;
  token: string | null;
  ready: boolean;
  signin: (username: string, password: string) => Promise<void>;
  signout: () => void;
  getAccessToken: () => Promise<string | null>;
  refreshMe: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);
const API_BASE = (import.meta as any)?.env?.VITE_API_BASE ?? "https://welfordsystems.com/api";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("access_token"));
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  const getAccessToken = useCallback(async () => token, [token]);

  const signout = useCallback(() => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("access_token");
  }, []);

  const refreshMe = useCallback(async () => {
    if (!token) { setUser(null); return; }
    try {
      const res = await fetch(`${API_BASE}/auth/me`, { headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error("me failed");
      setUser(await res.json());
    } catch { signout(); }
  }, [token, signout]);

  useEffect(() => { (async () => { await refreshMe(); setReady(true); })(); }, [refreshMe]);

  const signin = useCallback(async (username: string, password: string) => {
    const body = new URLSearchParams(); body.set("username", username); body.set("password", password);
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    if (!res.ok) throw new Error((await res.text().catch(() => "")) || "Login failed");
    const data = await res.json(); const t = data?.access_token as string | undefined;
    if (!t) throw new Error("No token returned");
    localStorage.setItem("access_token", t); setToken(t);

    const meRes = await fetch(`${API_BASE}/auth/me`, { headers: { Authorization: `Bearer ${t}` } });
    if (!meRes.ok) throw new Error("Could not fetch profile");
    const me = await meRes.json();
    if (!me.is_admin) { localStorage.removeItem("access_token"); setToken(null); setUser(null); throw new Error("Not authorized for admin"); }
    setUser(me);
  }, []);

  const value = useMemo(() => ({ user, token, ready, signin, signout, getAccessToken, refreshMe }), [user, token, ready, signin, signout, getAccessToken, refreshMe]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}
