"use client";
import React from "react";
import { useTranslations } from "next-intl";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
  TableFooter,
} from "@/components/ui/table";
import { merchants } from "@prisma/client";
import { Button } from "@/components/ui/button";

type Props = {
  merchants: merchants[];
  totalMerchants: number;
};

export default function MerchantList({ merchants, totalMerchants }: Props) {
  const t = useTranslations();
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t("Campaigns.name")}</TableHead>

            <TableHead>{t("Common.email")}</TableHead>
            <TableHead className="text-center">{t("Common.phone")}</TableHead>
            <TableHead className="text-center">{t("Common.country")}</TableHead>
            <TableHead className="text-center">{t("Common.actions")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {merchants.map((merchant) => (
            <TableRow key={merchant.id}>
              <TableCell>
                {merchant.firstName} {merchant.lastName}
              </TableCell>

              <TableCell>{merchant.email}</TableCell>
              <TableCell className="text-center">{merchant.phone}</TableCell>
              <TableCell className="text-center">{merchant.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Merchants: {totalMerchants}</TableCell>
            <TableCell colSpan={2} className="space-x-4 ">
              <Button>{t("Buttons.prev")}</Button>
              <Button>{t("Buttons.next")}</Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
