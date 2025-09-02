// src/pages/Login.tsx
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/layout";
import { useAuth } from "@/auth/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";

const Login = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/admin/dashboard", { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-md text-center">
          <Shield className="mx-auto mb-4 h-10 w-10 text-primary" />
          <h1 className="text-3xl font-bold mb-2">Admin Sign in</h1>
          <p className="text-muted-foreground mb-8">
            Use your Google account to continue.
          </p>
          <Button onClick={login} size="lg" className="w-full">Sign in with Google</Button>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
