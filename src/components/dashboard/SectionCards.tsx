// File: src/components/dashboard/SectionCards.tsx
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:px-6 xl:grid-cols-4">
      {/* Card 1: Total Revenue */}
      <Card className="bg-gradient-card border-dark-border-subtle text-dark-text-light shadow-glow-sm">
        <CardHeader>
          <CardDescription className="text-dark-text-muted">Total Revenue</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            $1,250.00
          </CardTitle>
          <Badge variant="outline" className="w-fit border-dark-border-subtle text-green-400 bg-transparent">
            <IconTrendingUp size={16} />
            +12.5%
          </Badge>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <IconTrendingUp className="size-4 text-green-400" />
          </div>
          <div className="text-dark-text-muted">
            Visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>

      {/* Card 2: New Customers */}
      <Card className="bg-gradient-card border-dark-border-subtle text-dark-text-light shadow-glow-sm">
        <CardHeader>
          <CardDescription className="text-dark-text-muted">New Customers</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            1,234
          </CardTitle>
          <Badge variant="outline" className="w-fit border-dark-border-subtle text-red-400 bg-transparent">
            <IconTrendingDown size={16} />
            -20%
          </Badge>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Decreasing this period <IconTrendingDown className="size-4 text-red-400" />
          </div>
          <div className="text-dark-text-muted">
            Acquisition needs attention
          </div>
        </CardFooter>
      </Card>

      {/* Card 3: Active Accounts */}
      <Card className="bg-gradient-card border-dark-border-subtle text-dark-text-light shadow-glow-sm">
        <CardHeader>
          <CardDescription className="text-dark-text-muted">Active Accounts</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            45,678
          </CardTitle>
          <Badge variant="outline" className="w-fit border-dark-border-subtle text-blue-400 bg-transparent">
            <IconTrendingUp size={16} />
            +5.2%
          </Badge>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Strong user retention <IconTrendingUp className="size-4 text-blue-400" />
          </div>
          <div className="text-dark-text-muted">
            Engagement exceed targets
          </div>
        </CardFooter>
      </Card>

      {/* Card 4: Growth Rate */}
      <Card className="bg-gradient-card border-dark-border-subtle text-dark-text-light shadow-glow-sm">
        <CardHeader>
          <CardDescription className="text-dark-text-muted">Growth Rate</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            4.5%
          </CardTitle>
          <Badge variant="outline" className="w-fit border-dark-border-subtle text-green-400 bg-transparent">
            <IconTrendingUp size={16} />
            +1.1%
          </Badge>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Steady performance <IconTrendingUp className="size-4 text-green-400" />
          </div>
          <div className="text-dark-text-muted">
            Meets growth projections
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}