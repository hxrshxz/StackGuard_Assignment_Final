import { IconDotsVertical, IconLogout, IconUserCircle } from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { useAuth } from "@/context/AuthContext";

export function NavUser({ user }: { user: { name: string; email: string; avatar: string } }) {
  const { logout } = useAuth();
  
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size="lg" className="w-full text-white hover:bg-gradient-button transition-colors">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg bg-gradient-button text-white">{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left">
                <span className="truncate text-sm font-medium text-white">{user.name}</span>
                <span className="text-gray-400 truncate text-xs">{user.email}</span>
              </div>
              <IconDotsVertical className="ml-auto size-4 text-gray-400" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-gradient-card border-gray-600" align="end" sideOffset={10}>
            <DropdownMenuLabel className="text-gradient">{user.name}</DropdownMenuLabel>
            <DropdownMenuSeparator className="border-gray-700" />
            <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gradient-button">
              <IconUserCircle className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="border-gray-700" />
            <DropdownMenuItem onClick={logout} className="text-gray-400 hover:text-white hover:bg-gradient-button">
              <IconLogout className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}