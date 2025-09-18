import { type Icon } from "@tabler/icons-react";
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

export function NavDocuments({ items }: { items: { name: string; url: string; icon: Icon }[] }) {
  return (
    <SidebarGroup className="group-data-[collapsed=true]:hidden">
      <SidebarGroupLabel className="text-gray-400 font-semibold text-xs uppercase tracking-wide">Security Resources</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild className="text-gray-300 hover:text-white hover:bg-gradient-button transition-colors">
              <a href={item.url} className="flex items-center gap-2">
                <item.icon className="h-4 w-4" />
                <span className="font-medium">{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}