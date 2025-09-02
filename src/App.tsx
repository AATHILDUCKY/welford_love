import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import { AuthProvider, useAuth } from "@/auth/AuthContext";
import React, { useEffect } from "react";

// Solution pages
import IdentityAccessManagement from "./pages/solutions/IdentityAccessManagement";
import GRCConsultancy from "./pages/solutions/GRCConsultancy";
import CloudSecurity from "./pages/solutions/CloudSecurity";

// Company pages
import About from "./pages/company/About";
import Careers from "./pages/company/Careers";

// Resource pages
import Blog from "./pages/resources/Blog";
import VideosAndDemos from "./pages/resources/VideosAndDemos";
import Documentation from "./pages/resources/Documentation";

// products
import ProductsIAG from "./pages/ProductsIAG";

// Other pages
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";

import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/admin/Dashboard";
import AuthCallbackHandler from "@/components/AuthCallbackHandler";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth/google/callback" element={<AuthCallbackHandler />} />
          
          {/* Solution Routes */}
          <Route path="/solutions/identity-access-management" element={<IdentityAccessManagement />} />
          <Route path="/solutions/grc-consultancy" element={<GRCConsultancy />} />
          <Route path="/solutions/cloud-security" element={<CloudSecurity />} />
          
          {/* Company Routes */}
          <Route path="/company/about" element={<About />} />
          <Route path="/company/careers" element={<Careers />} />
          
          {/* Resource Routes */}
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/videos-demos" element={<VideosAndDemos />} />
          <Route path="/resources/documentation" element={<Documentation />} />
          
          {/* Other Routes */}
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
          // In your App.tsx, make sure you have this route:
          <Route path="/products/iag" element={<ProductsIAG />} />


          <Route path="/login" element={<Login />} />

          {/* Protected admin routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
