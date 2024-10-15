import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {};

export default function Cart({}: Props) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Cart</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>$100.00</TableCell>
                <TableCell>2</TableCell>
                <TableCell>
                  <button>Remove</button>
                </TableCell>
                <TableCell>$200.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>$100.00</TableCell>
                <TableCell>2</TableCell>
                <TableCell>
                  <button>Remove</button>
                </TableCell>
                <TableCell>$200.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button>Checkout</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
