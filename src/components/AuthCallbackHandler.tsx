import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/auth/AuthContext";

const AuthCallbackHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useAuth(); // Assuming useAuth has a way to update auth state

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");

    if (code) {
      // Exchange the code with your backend to get the JWT
      fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/google/callback?code=${code}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.access_token) {
            localStorage.setItem("welford_auth_token", data.access_token);
            // Manually set isAuthenticated to true after successful login
            // For this, we'd need to expose a setter from AuthContext or refactor useAuth a bit.
            // For now, a redirect should trigger a re-check in AuthContext.
            navigate("/admin/dashboard"); // Redirect to dashboard or desired page
          } else {
            // Handle error or token not found
            console.error("Authentication failed: No access token received");
            navigate("/login"); // Redirect to login on error
          }
        })
        .catch((error) => {
          console.error("Error during Google OAuth callback:", error);
          navigate("/login"); // Redirect to login on error
        });
    } else {
      // If no code is present, it's an invalid callback or direct access
      navigate("/login");
    }
  }, [location, navigate, login]);

  return <div>Loading...</div>; // Or a more elaborate loading screen
};

export default AuthCallbackHandler;
