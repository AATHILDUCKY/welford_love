import TopBar from "@/components/ui/top-bar";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

// import Navigation from "@/components/ui/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        {children}  {/* This should render your page content */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;