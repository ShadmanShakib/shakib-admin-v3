"use client";
import { Package } from "lucide-react";

import { TrendingUp } from "lucide-react";
import {
  CartesianGrid,
  LineChart,
  XAxis,
  Line,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A line chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const LineX = () => {
  return (
    <ResponsiveContainer width="100%" height={100}>
      <LineChart data={chartData}>
        <Line
          type="natural"
          dataKey="desktop"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default function NewOrders() {
  return (
    <Card className="w-[400px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">New Orders</CardTitle>
        <Package className="h-4 w-4 text-purple-500" />
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">$ 51,325</div>
        <p className="text-xs text-muted-foreground">14% since Last Month</p>
        <div className="mt-4 h-[80px] relative">
          <LineX />
        </div>
      </CardContent>
    </Card>
  );
}
