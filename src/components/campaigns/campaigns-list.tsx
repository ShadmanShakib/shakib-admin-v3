"use client";

import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { PencilIcon, SearchIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { campaigns } from "@prisma/client";

interface Props {
  page?: number;
  campaignsData?: campaigns[];
  locale: string;
}

export default function CampaignList({ page, campaignsData, locale }: Props) {
  const [campaigns, setCampaigns] = useState(campaignsData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isRTL, setIsRTL] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fetchCampaigns = async (query: string = "") => {
    setIsLoading(true);
    try {
      const url = `https://fast-mauve.vercel.app/campaigns/search?q=${encodeURIComponent(
        query
      )}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch campaigns");
      }
      const data = await response.json();
      setCampaigns(data.campaigns);
    } catch (err) {
      setError("An error occurred while fetching campaigns");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchCampaigns(searchQuery);
  };

  if (!mounted) return null;

  return (
    <div className={`container mx-auto p-4 `}>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold dark:text-white">Campaigns</h1>
      </div>

      <form onSubmit={handleSearch} className="mb-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="text"
            placeholder="Search campaigns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow dark:bg-gray-800 dark:text-white dark:border-gray-600"
          />
          <Button
            type="submit"
            variant="outline"
            className="dark:text-white dark:border-gray-600"
          >
            <SearchIcon className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </form>

      {isLoading ? (
        <div className="text-center p-4 dark:text-white">
          Loading campaigns...
        </div>
      ) : error ? (
        <div className="text-center p-4 text-red-500 dark:text-red-400">
          {error}
        </div>
      ) : (
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
                    className={`${
                      isRTL ? "text-left" : "text-right"
                    } dark:text-gray-300`}
                  >
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campaigns &&
                  campaigns.map((campaign) => (
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
                        {campaign.name}
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
                      <TableCell className={isRTL ? "text-left" : "text-right"}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="dark:text-white dark:border-gray-600"
                        >
                          <PencilIcon
                            className={`w-4 h-4 ${isRTL ? "ml-2" : "mr-2"}`}
                          />
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
}
