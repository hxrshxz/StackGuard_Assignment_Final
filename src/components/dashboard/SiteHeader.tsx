import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function SiteHeader() {
  return (
    <header className="flex h-[var(--header-height)] shrink-0 items-center gap-2 border-b border-gray-800/50 bg-gradient-header shadow-card backdrop-blur-sm">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1 text-white hover:bg-gradient-button" />
        <Separator orientation="vertical" className="mx-2 h-4 bg-gray-600" />
        <h1 className="text-base font-medium text-gradient">Dashboard</h1>
        <div className="ml-auto flex items-center gap-2">
          {/* Add header buttons here if needed */}
        </div>
      </div>
    </header>
  );
}