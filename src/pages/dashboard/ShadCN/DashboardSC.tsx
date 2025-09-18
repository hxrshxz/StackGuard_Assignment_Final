import React from "react";
import "./styles/gradients.css"; // dashboard-only gradients
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { ChartAreaInteractive } from "@/components/dashboard/ChartAreaInteractive";
import { SiteHeader } from "@/components/dashboard/SiteHeader";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import ThreatSummary from "@/components/dashboard/ThreatSummary";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import { 
  Shield, 
  AlertTriangle, 
  TrendingUp as TrendingUpLucide, 
  TrendingDown as TrendingDownLucide, 
  Eye, 
  Key, 
  Server, 
  GitBranch,
  Activity,
  FileText,
  Users,
  Database
} from "lucide-react";

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  return (
    <div className="dark min-h-screen bg-gradient-dashboard">
      <SidebarProvider
        open={open}
        onOpenChange={setOpen}
        style={{
          "--sidebar-width": "16rem",
          "--header-height": "3.5rem",
        } as React.CSSProperties}
      >
        <AppSidebar variant="inset" />
        <SidebarInset className="min-h-screen bg-gradient-dashboard"> 
          <SiteHeader />
          <main className="flex-1 overflow-y-auto p-4 md:p-6"> 
            <div className="grid grid-cols-1 @container/main gap-6">
              
              {/* Security Metrics Cards - 5 Cards */}
              <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:px-6 xl:grid-cols-5">
                {/* Card 1: Exposed Secrets */}
                <Card className="bg-gradient-card border-gradient text-white shadow-elegant backdrop-blur-sm">
                  <CardHeader>
                    <CardDescription className="text-gray-400 flex items-center gap-2">
                      <Key className="h-4 w-4" />
                      Exposed Secrets
                    </CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums text-gradient @[250px]/card:text-3xl">
                      72
                    </CardTitle>
                    <Badge variant="outline" className="w-fit border-gray-600 text-gray-300 bg-gray-800/50">
                      <IconTrendingUp size={16} />
                      +3
                    </Badge>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium text-gray-200">
                      Critical security issue <AlertTriangle className="size-4 text-gray-400" />
                    </div>
                    <div className="text-gray-500">
                      Immediate attention required
                    </div>
                  </CardFooter>
                </Card>

                {/* Card 2: Zombie NHIs */}
                <Card className="bg-gradient-card border-gradient text-white shadow-elegant backdrop-blur-sm">
                  <CardHeader>
                    <CardDescription className="text-gray-400 flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Zombie NHIs
                    </CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums text-gradient @[250px]/card:text-3xl">
                      1,248
                    </CardTitle>
                    <Badge variant="outline" className="w-fit border-gray-600 text-gray-300 bg-gradient-button">
                      <IconTrendingDown size={16} />
                      -12
                    </Badge>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium text-gradient">
                      Cleanup progress <TrendingDownLucide className="size-4 text-gray-400" />
                    </div>
                    <div className="text-gray-500">
                      Inactive identities removed
                    </div>
                  </CardFooter>
                </Card>

                {/* Card 3: High-Risk Alerts */}
                <Card className="bg-gradient-card border-gradient text-white shadow-elegant backdrop-blur-sm">
                  <CardHeader>
                    <CardDescription className="text-gray-400 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      High-Risk Alerts
                    </CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums text-gradient @[250px]/card:text-3xl">
                      19
                    </CardTitle>
                    <Badge variant="outline" className="w-fit border-gray-600 text-gray-300 bg-gradient-button">
                      <IconTrendingUp size={16} />
                      +2
                    </Badge>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium text-gradient">
                      New threats detected <Eye className="size-4 text-gray-400" />
                    </div>
                    <div className="text-gray-500">
                      Requires investigation
                    </div>
                  </CardFooter>
                </Card>

                {/* Card 4: Compliance Score */}
                <Card className="bg-gradient-card border-gradient text-white shadow-elegant backdrop-blur-sm">
                  <CardHeader>
                    <CardDescription className="text-gray-400 flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Compliance Score
                    </CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums text-gradient @[250px]/card:text-3xl">
                      98%
                    </CardTitle>
                    <Badge variant="outline" className="w-fit border-gray-600 text-gray-300 bg-gradient-button">
                      <IconTrendingUp size={16} />
                      +2.5%
                    </Badge>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium text-gradient">
                      Excellent compliance <Shield className="size-4 text-gray-400" />
                    </div>
                    <div className="text-gray-500">
                      Above industry standards
                    </div>
                  </CardFooter>
                </Card>

                {/* Card 5: Attack Paths */}
                <Card className="bg-gradient-card border-gradient text-white shadow-elegant backdrop-blur-sm">
                  <CardHeader>
                    <CardDescription className="text-gray-400 flex items-center gap-2">
                      <GitBranch className="h-4 w-4" />
                      Attack Paths
                    </CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums text-gradient @[250px]/card:text-3xl">
                      315
                    </CardTitle>
                    <Badge variant="outline" className="w-fit border-gray-600 text-gray-300 bg-gradient-button">
                      <IconTrendingUp size={16} />
                      +15
                    </Badge>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium text-gradient">
                      Path analysis active <Activity className="size-4 text-gray-400" />
                    </div>
                    <div className="text-gray-500">
                      Continuous monitoring
                    </div>
                  </CardFooter>
                </Card>
              </div>

              {/* Chart and Recent Activity Section */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2">
                  <ChartAreaInteractive />
                  <div className="mt-6">
                    <ThreatSummary />
                  </div>
                </div>
                <RecentActivity />
              </div>
            </div>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}