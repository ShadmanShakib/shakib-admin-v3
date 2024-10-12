"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { useSearchParams, useRouter } from "next/navigation";
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
import { Pencil } from "lucide-react";

type Props = {
  merchants: merchants[];
  totalMerchants: number;
};

export default function MerchantList({ merchants, totalMerchants }: Props) {
  const t = useTranslations();
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

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
              <TableCell>
                <Button className="gap-2">
                  <Pencil size={16} />
                  {t("Buttons.edit")}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Merchants: {totalMerchants}</TableCell>
            <TableCell colSpan={2} className="space-x-4 ">
              {page > 1 && (
                <Button
                  onClick={() => router.push(`/merchants?page=${page - 1}`)}
                >
                  {t("Buttons.prev")}
                </Button>
              )}
              <Button
                onClick={() => router.push(`/merchants?page=${page + 1}`)}
              >
                {t("Buttons.next")}
              </Button>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
