"use client";
import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeader,
} from "@/components/ui/table";

type Props = {};

export default function ProductList({}: Props) {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Details</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Product 1</TableCell>
            <TableCell>Details</TableCell>
            <TableCell>100</TableCell>
            <TableCell>10</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
