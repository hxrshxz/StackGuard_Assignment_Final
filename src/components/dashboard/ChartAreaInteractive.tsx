import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"; // Make sure ToggleGroup is installed

const chartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150 }, { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 }, { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 }, { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 }, { date: "2024-04-08", desktop: 409, mobile: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110 }, { date: "2024-04-10", desktop: 261, mobile: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350 }, { date: "2024-04-12", desktop: 292, mobile: 210 },
  { date: "2024-04-13", desktop: 342, mobile: 380 },
  { date: "2024-04-14", desktop: 300, mobile: 250 }, { date: "2024-04-15", desktop: 280, mobile: 200 },
  { date: "2024-04-16", desktop: 350, mobile: 300 }, { date: "2024-04-17", desktop: 400, mobile: 320 },
  { date: "2024-04-18", desktop: 370, mobile: 290 }, { date: "2024-04-19", desktop: 330, mobile: 270 },
  { date: "2024-04-20", desktop: 390, mobile: 310 }, { date: "2024-04-21", desktop: 260, mobile: 190 },
  { date: "2024-04-22", desktop: 310, mobile: 240 }, { date: "2024-04-23", desktop: 290, mobile: 210 },
  { date: "2024-04-24", desktop: 360, mobile: 300 }, { date: "2024-04-25", desktop: 410, mobile: 330 },
  { date: "2024-04-26", desktop: 380, mobile: 300 }, { date: "2024-04-27", desktop: 340, mobile: 280 },
  { date: "2024-04-28", desktop: 420, mobile: 340 }, { date: "2024-04-29", desktop: 270, mobile: 200 },
  { date: "2024-04-30", desktop: 320, mobile: 250 },
];

const chartConfig = {
  desktop: { label: "Desktop", color: "hsl(0 0% 70%)" },
  mobile: { label: "Mobile", color: "hsl(0 0% 50%)" },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState("30d");

  const filteredData = chartData.slice(
    timeRange === "30d" ? -30 : timeRange === "7d" ? -7 : -90
  );

  return (
    <Card className="bg-gradient-card border-gradient text-white shadow-elegant backdrop-blur-sm">
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <CardTitle className="text-gradient">Total Visitors</CardTitle>
          <CardDescription className="text-gray-400">
            Total for the last 30 days
          </CardDescription>
        </div>
        <div>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex border-dark-border-subtle [&>button]:text-dark-text-light [&>button]:data-[state=on]:bg-dark-highlight [&>button]:data-[state=on]:text-dark-text-light"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 @[767px]/card:hidden border-gray-600 bg-gradient-button text-white"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 30 days" />
            </SelectTrigger>
            <SelectContent className="rounded-lg bg-gradient-card border-gray-600 text-white">
              {/* <SelectItem value="90d" className="rounded-md">
                Last 3 months
              </SelectItem> */}
              <SelectItem value="30d" className="rounded-md">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-md">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="rgb(var(--dark-border-subtle))" strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              stroke="rgb(var(--dark-text-muted))"
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                  className="bg-dark-bg-primary border-dark-border-subtle text-dark-text-light"
                />
              }
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}