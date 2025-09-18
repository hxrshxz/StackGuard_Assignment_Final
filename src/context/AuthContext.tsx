import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  isConfigured: boolean;
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => Promise<boolean>;
  configure: (publicKey: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isConfigured, setIsConfigured] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load stored auth state on mount
  useEffect(() => {
    console.log("Loading auth state from localStorage...");
    const savedAuth = localStorage.getItem("isAuthenticated");
    const savedConfig = localStorage.getItem("isConfigured");
    const savedUser = localStorage.getItem("user");

    console.log("Saved auth:", savedAuth);
    console.log("Saved config:", savedConfig);
    console.log("Saved user:", savedUser);

    if (savedAuth === "true") {
      setIsAuthenticated(true);
      console.log("Set authenticated to true");
    }
    if (savedConfig === "true") {
      setIsConfigured(true);
      console.log("Set configured to true");
    }
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        console.log("Set user data:", userData);
      } catch (error) {
        console.error("Error parsing saved user data:", error);
        localStorage.removeItem("user");
      }
    }

    setIsLoading(false);
    console.log("Auth context initialization complete");
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    if (email && password.length >= 6) {
      const userData = { email, firstName: "Harsh", lastName: "Kumar" };
      setIsAuthenticated(true);
      setUser(userData);
      // Reset configuration status on new login
      setIsConfigured(false);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(userData));
      // Remove previous configuration
      localStorage.removeItem("isConfigured");
      localStorage.removeItem("publicKey");
      return true;
    }
    return false;
  };

  const register = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<boolean> => {
    if (firstName && lastName && email && password.length >= 6) {
      const userData = { email, firstName, lastName };
      setIsAuthenticated(true);
      setUser(userData);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const configure = async (publicKey: string): Promise<boolean> => {
    // Validate public key (100-1000 characters)
    if (publicKey.length >= 100 && publicKey.length <= 1000) {
      setIsConfigured(true);
      localStorage.setItem("isConfigured", "true");
      localStorage.setItem("publicKey", publicKey);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsConfigured(false);
    setUser(null);

    ["isAuthenticated", "isConfigured", "user", "publicKey"].forEach((key) =>
      localStorage.removeItem(key)
    );
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isConfigured,
        user,
        isLoading,
        login,
        register,
        configure,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
