import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { Dashboard, Auth, Configuration } from "./pages";
import DashboardNeoStandalone from "./pages/dashboard/Neo/DashboardNeoStandalone";
import DashboardSCStandalone from "./pages/dashboard/ShadCN/DashboardSCStandalone";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    document.documentElement.classList.add('dark');
    
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    const routeMetadata: Record<
      string,
      { title: string; description: string }
    > = {
      "/": {
        title: "Dashboard - StackGuard",
        description: "Secure dashboard for StackGuard users",
      },
      "/dashboard/neo": {
        title: "Neo Dashboard - StackGuard",
        description:
          "StackGuard Neo-styled dashboard with advanced threat monitoring",
      },
      "/dashboard/shadcn": {
        title: "ShadCN Dashboard - StackGuard",
        description:
          "StackGuard ShadCN-styled dashboard with modern UI components",
      },
      "/auth": {
        title: "Authentication - StackGuard",
        description: "Sign in or create your StackGuard account",
      },
      "/configuration": {
        title: "Configuration - StackGuard",
        description: "Configure your StackGuard settings",
      },
    };

    const metadata = routeMetadata[pathname];
    if (!metadata) return;

    document.title = metadata.title;

    const metaDescriptionTag = document.querySelector(
      'head > meta[name="description"]'
    ) as HTMLMetaElement;

    if (metaDescriptionTag) {
      metaDescriptionTag.content = metadata.description;
    }
  }, [pathname]);

  return (
    <AuthProvider>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/configuration"
          element={
            <ProtectedRoute>
              <Configuration />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute requiresConfig={true}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* Direct access to specific dashboard variants */}
        <Route
          path="/dashboard/neo"
          element={
            <ProtectedRoute requiresConfig={true}>
              <DashboardNeoStandalone />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/shadcn"
          element={
            <ProtectedRoute requiresConfig={true}>
              <DashboardSCStandalone />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
