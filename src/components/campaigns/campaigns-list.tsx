"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { PencilIcon, SearchIcon } from "lucide-react";
import { campaigns } from "@prisma/client";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import searchCampaigns from "@features/camapaigns/services/searchCampaigns";

interface Props {
  page: number;
  campaignsData?: campaigns[];
  locale: string;
}

export default function CampaignList({
  page = 1,
  campaignsData,
  locale,
}: Props) {
  const t = useTranslations();
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, error } = useQuery({
    queryKey: ["campaigns", searchQuery],
    queryFn: () => searchCampaigns(searchQuery),
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`container mx-auto p-4 `}>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold dark:text-white">Campaigns</h1>
      </div>
      <form className="mb-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="text"
            placeholder="Search campaigns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />
          {/* <Button
            variant="outline"
            type="submit"
            className="dark:text-white dark:border-gray-600"
           
          >
            <SearchIcon className="h-4 w-4 mr-2" />
            Search
          </Button> */}
        </div>
      </form>
      <div className="rounded-md border overflow-x-auto dark:border-gray-700">
        <div className="min-w-[700px]">
          <Table>
            <TableHeader>
              <TableRow className="dark:border-gray-700">
                <TableHead className="w-[100px] dark:text-gray-300">
                  Logo
                </TableHead>
                <TableHead className="dark:text-gray-300">Name</TableHead>
                <TableHead className="dark:text-gray-300">
                  English Name
                </TableHead>
                <TableHead className="dark:text-gray-300">Status</TableHead>
                <TableHead
                  className={`${"rtl:text-left text-right"} dark:text-gray-300`}
                >
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {searchQuery ? (
                isLoading ? (
                  <TableRow className="text-center w-full">
                    <TableCell colSpan={5}>
                      <div className="flex items-center justify-center gap-2">
                        <Loader2 className="w-6 h-6 animate-spin" />
                        <span>Loading...</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : data.length > 0 ? (
                  data.map((campaign: any) => (
                    <TableRow
                      key={campaign.id}
                      className="dark:border-gray-700"
                    >
                      <TableCell>
                        <img
                          src={campaign.logourl || ""}
                          alt={`${campaign.name} logo`}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </TableCell>
                      <TableCell className="font-medium dark:text-white">
                        <Link
                          href={`/dashboard/campaigns/${campaign.id}`}
                          key={campaign.id}
                        >
                          {campaign.name}
                        </Link>
                      </TableCell>
                      <TableCell className="dark:text-gray-300">
                        {campaign.en_name}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            campaign.status === "A" ? "default" : "destructive"
                          }
                          className={
                            campaign.status === "A"
                              ? "bg-green-500 text-white hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800"
                              : ""
                          }
                        >
                          {campaign.status === "A" ? "Active" : "Suspended"}
                        </Badge>
                      </TableCell>
                      <TableCell className={"rtl:text-left text-right"}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="dark:text-white dark:border-gray-600"
                        >
                          <PencilIcon
                            className={`w-4 h-4 ${"rtl:ml-2 mr-2"}`}
                          />
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5}>
                      <span>No campaigns found</span>
                    </TableCell>
                  </TableRow>
                )
              ) : (
                campaignsData &&
                campaignsData.map((campaign) => (
                  <TableRow key={campaign.id} className="dark:border-gray-700">
                    <TableCell>
                      <img
                        src={campaign.logourl || ""}
                        alt={`${campaign.name} logo`}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </TableCell>
                    <TableCell className="font-medium dark:text-white">
                      <Link
                        href={`/dashboard/campaigns/${campaign.id}`}
                        key={campaign.id}
                      >
                        {campaign.name}
                      </Link>
                    </TableCell>
                    <TableCell className="dark:text-gray-300">
                      {campaign.en_name}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          campaign.status === "A" ? "default" : "destructive"
                        }
                        className={
                          campaign.status === "A"
                            ? "bg-green-500 text-white hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800"
                            : ""
                        }
                      >
                        {campaign.status === "A" ? "Active" : "Suspended"}
                      </Badge>
                    </TableCell>
                    <TableCell className={"rtl:text-left text-right"}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="dark:text-white dark:border-gray-600"
                      >
                        <PencilIcon className={`w-4 h-4 ${"rtl:ml-2 mr-2"}`} />
                        {t("Buttons.edit")}
                        {/* Edit */}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={5}>
                  <div className="flex gap-5 justify-end">
                    {page > 1 && (
                      <Link href={`/dashboard/campaigns?page=${page - 1}`}>
                        <Button>{t("Buttons.prev")}</Button>
                      </Link>
                    )}
                    <Link href={`/dashboard/campaigns?page=${page + 1}`}>
                      <Button>{t("Buttons.next")}</Button>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  );
}
