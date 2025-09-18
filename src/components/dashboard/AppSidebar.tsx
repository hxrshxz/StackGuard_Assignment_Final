import * as React from "react";
import {
  IconDashboard, IconShield, IconEye, IconKey, IconUsers, IconBug, IconSettings,
  IconHelp, IconSearch, IconReport, IconAlertTriangle, IconLock, IconActivity
} from "@tabler/icons-react";
import { NavDocuments } from "@/components/dashboard/NavDocuments";
import { NavMain } from "@/components/dashboard/NavMain";
import { NavSecondary } from "@/components/dashboard/NavSecondary";
import { NavUser } from "@/components/dashboard/NavUser";
import { useAuth } from "@/context/AuthContext";
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarHeader,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useAuth();

  const data = {
    user: {
      name: user ? `${user.firstName} ${user.lastName}` : "Security Analyst",
      email: user ? user.email : "analyst@stackguard.io",
      avatar: "/avatars/shadcn.jpg", 
    },
    navMain: [
      { title: "Security Dashboard", url: "#", icon: IconDashboard, active: true }, 
      { title: "Threat Detection", url: "#", icon: IconEye },
      { title: "NHI Management", url: "#", icon: IconUsers }, 
      { title: "Vulnerability Scan", url: "#", icon: IconBug }, 
    ],
    navSecondary: [
      { title: "Settings", url: "#", icon: IconSettings },
      { title: "Help & Support", url: "#", icon: IconHelp },
      { title: "Search Threats", url: "#", icon: IconSearch },
    ],
    documents: [
      { name: "Security Reports", url: "#", icon: IconReport },
      { name: "Threat Intelligence", url: "#", icon: IconAlertTriangle },
      { name: "Compliance Docs", url: "#", icon: IconLock },
      { name: "Activity Logs", url: "#", icon: IconActivity },
    ],
  };

  return (
    <Sidebar collapsible="offcanvas" {...props} className="bg-gradient-sidebar border-r border-gray-800/50 shadow-elegant">
      <SidebarRail />
      <SidebarHeader className="border-b border-gray-800/50 bg-gradient-header">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5 hover:bg-gradient-button">
              <a href="#" className="flex items-center gap-2">
                {/* Logo placeholder */}
                <div className="size-6 bg-gradient-text rounded-md flex items-center justify-center text-black font-bold">SG</div>
                <span className="text-base font-semibold text-gradient">StackGuard</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-transparent">
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter className="border-t border-gray-800/50">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}