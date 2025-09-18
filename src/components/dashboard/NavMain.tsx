import { IconShieldPlus, IconAlertTriangle, type Icon } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
  SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils"; 

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: Icon;
    active?: boolean; 
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="New Security Rule"
              className="bg-gradient-button text-white hover:bg-gradient-button-hover hover:text-white active:bg-gradient-button-hover active:text-white min-w-8 duration-200 ease-linear shadow-card"
            >
              <IconShieldPlus />
              <span>New Rule</span>
            </SidebarMenuButton>
            <Button
              size="icon"
              className="size-8 group-data-[collapsed=true]/sidebar:opacity-0 text-gray-300 hover:text-white hover:bg-gradient-button"
              variant="ghost"
            >
              <IconAlertTriangle />
              <span className="sr-only">Alerts</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                data-active={item.active}
                className={cn(
                  "text-gray-300 hover:text-white hover:bg-gradient-button transition-colors",
                  item.active && "bg-gradient-button text-white border-l-2 border-gray-400 shadow-elegant"
                )}
              >
                <a href={item.url} className="flex items-center gap-2 w-full">
                  {item.icon && <item.icon className="h-4 w-4" />}
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