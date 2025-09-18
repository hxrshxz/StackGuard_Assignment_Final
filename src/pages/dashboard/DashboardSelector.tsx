import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Palette, Zap, LogOut, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import DashboardNeo from "./Neo/DashboardNeo";
import DashboardSC from "./ShadCN/DashboardSC";

const DashboardSelector: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<"neo" | "shadcn">("neo");
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-14">
        <div className="flex items-center justify-between px-4 md:px-6 h-full">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-semibold">StackGuard Dashboard</h1>
            <Badge variant="outline" className="text-xs">
              Currently: {activeTheme === "neo" ? "Neo Brutalism" : "ShadCN UI"}
            </Badge>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">
                {user?.firstName} {user?.lastName}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button
                onClick={() => setActiveTheme("neo")}
                variant={activeTheme === "neo" ? "default" : "outline"}
                size="sm"
                className="flex items-center gap-2 transition-colors"
              >
                <Zap className="h-4 w-4" />
                <span>Neo Brutalism</span>
              </Button>

              <Button
                onClick={() => setActiveTheme("shadcn")}
                variant={activeTheme === "shadcn" ? "default" : "outline"}
                size="sm"
                className="flex items-center gap-2 transition-colors"
              >
                <Palette className="h-4 w-4" />
                <span>ShadCN</span>
              </Button>
            </div>

            <Button
              onClick={handleLogout}
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 text-destructive hover:text-destructive hover:bg-destructive/10 transition-colors"
              title="Logout"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden md:inline">Logout</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        {activeTheme === "neo" ? <DashboardNeo /> : <DashboardSC />}
      </div>
    </div>
  );
};

export default DashboardSelector;
