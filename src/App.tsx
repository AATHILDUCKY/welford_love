// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import React from "react";

import { AuthProvider, useAuth } from "@/lib/auth";

// Public pages (unchanged)
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IdentityAccessManagement from "./pages/solutions/IdentityAccessManagement";
import GRCConsultancy from "./pages/solutions/GRCConsultancy";
import CloudSecurity from "./pages/solutions/CloudSecurity";
import About from "./pages/company/About";
import Careers from "./pages/company/Careers";
import Blog from "./pages/resources/Blog";
import VideosAndDemos from "./pages/resources/VideosAndDemos";
import Documentation from "./pages/resources/Documentation";
import ProductsIAG from "./pages/ProductsIAG";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";

// Admin
import AdminDashboard from "./pages/admin/Dashboard";
import AdminLogin from "./pages/admin/Login";

const queryClient = new QueryClient();

/** Shows login at /admin, or redirects admins to /admin/dashboard */
function AdminSwitch() {
  const { user, ready } = useAuth();
  if (!ready) {
    return <div className="min-h-[60vh] flex items-center justify-center text-muted-foreground">Loading…</div>;
  }
  if (user?.is_admin) {
    return <Navigate to="/admin/dashboard" replace />;
  }
  return <AdminLogin />;
}

/** Protects nested routes so only admins can access */
function RequireAdmin() {
  const { user, ready } = useAuth();
  const location = useLocation();

  if (!ready) {
    return <div className="min-h-[60vh] flex items-center justify-center text-muted-foreground">Loading…</div>;
  }
  if (!user || !user.is_admin) {
    // bounce to /admin (login) and remember where we tried to go
    return <Navigate to="/admin" replace state={{ from: location.pathname }} />;
  }
  return <Outlet />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Solutions */}
            <Route path="/solutions/identity-access-management" element={<IdentityAccessManagement />} />
            <Route path="/solutions/grc-consultancy" element={<GRCConsultancy />} />
            <Route path="/solutions/cloud-security" element={<CloudSecurity />} />

            {/* Company */}
            <Route path="/company/about" element={<About />} />
            <Route path="/company/careers" element={<Careers />} />

            {/* Resources */}
            <Route path="/resources/blog" element={<Blog />} />
            <Route path="/resources/videos-demos" element={<VideosAndDemos />} />
            <Route path="/resources/documentation" element={<Documentation />} />

            {/* Products */}
            <Route path="/products/iag" element={<ProductsIAG />} />

            {/* Other */}
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<Demo />} />

            {/* Admin entry — if not authed, shows login; if authed, redirects to /admin/dashboard */}
            <Route path="/admin" element={<AdminSwitch />} />

            {/* Admin protected routes */}
            <Route element={<RequireAdmin />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              {/* Add more protected admin routes here as needed */}
            </Route>

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
