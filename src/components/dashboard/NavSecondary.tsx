import * as React from "react";
import { type Icon } from "@tabler/icons-react";
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

export function NavSecondary({ items, ...props }: { items: { title: string; url: string; icon: Icon }[] } & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title} className="text-gray-400 hover:text-white hover:bg-gradient-button transition-colors">
                <a href={item.url} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  <span className="font-medium">{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}