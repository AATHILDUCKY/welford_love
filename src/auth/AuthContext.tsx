// src/auth/AuthContext.tsx
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { jwtDecode } from "jwt-decode";

type AuthShape = {
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => void;
  getAccessToken: () => Promise<string | null>;
  accountEmail?: string;
  ready: boolean;
};

const AuthCtx = createContext<AuthShape>({
  isAuthenticated: false,
  login: async () => {},
  logout: () => {},
  getAccessToken: async () => null,
  accountEmail: undefined,
  ready: false,
});

const LOCAL_STORAGE_KEY = "welford_auth_token";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accountEmail, setAccountEmail] = useState<string | undefined>(undefined);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (token) {
      setIsAuthenticated(true);
      try {
        const decodedToken: { email: string } = jwtDecode(token);
        setAccountEmail(decodedToken.email);
      } catch (error) {
        console.error("Error decoding JWT:", error);
        // If token is invalid, log out the user
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        setIsAuthenticated(false);
        setAccountEmail(undefined);
      }
    }
    setReady(true);
  }, []);

  const login = async () => {
    // Redirect to backend for Google OAuth login
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/google/login`;
  };

  const logout = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setIsAuthenticated(false);
    setAccountEmail(undefined);
  };

  const getAccessToken = async () => {
    return localStorage.getItem(LOCAL_STORAGE_KEY);
  };

  const value: AuthShape = useMemo(() => {
    return {
      isAuthenticated,
      accountEmail,
      ready,
      login,
      logout,
      getAccessToken,
    };
  }, [isAuthenticated, accountEmail, ready]);

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
};

export const useAuth = () => useContext(AuthCtx);
