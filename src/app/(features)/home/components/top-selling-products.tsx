import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";

type Props = {};

const products = [
  { name: "Product 1", price: 100, quantity: 10, payment: "Done" },
  { name: "Product 2", price: 200, quantity: 20, payment: "Pending" },
  { name: "Product 3", price: 300, quantity: 30, payment: "Done" },
];

export default function TopSellingProduct({}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Selling Products</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Input className="h-4 w-4" type="checkbox" />
              </TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Payment</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Input className="h-4 w-4" type="checkbox" />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>
                  <Badge
                    className={cn("h-8 px-3", {
                      "bg-green-200 text-green-800": product.payment === "Done",
                      "bg-yellow-200 text-yellow-800":
                        product.payment === "Pending",
                    })}
                  >
                    {product.payment}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
