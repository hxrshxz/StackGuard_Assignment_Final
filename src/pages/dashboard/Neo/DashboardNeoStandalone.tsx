import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Zap, LogOut, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import DashboardNeo from "./DashboardNeo";

const DashboardNeoStandalone: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <div className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Selector
            </Button>
            <div className="h-6 w-px bg-border" />
            <h1 className="text-xl font-semibold">StackGuard Dashboard</h1>
            <Badge variant="default" className="flex items-center gap-1">
              <Zap className="h-3 w-3" />
              Neo Only
            </Badge>
          </div>

          <div className="flex items-center gap-3">
            {/* User Info */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">
                {user?.firstName} {user?.lastName}
              </span>
            </div>

            {/* Logout Button */}
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

      {/* Dashboard Content */}
      <DashboardNeo />
    </div>
  );
};

export default DashboardNeoStandalone;
