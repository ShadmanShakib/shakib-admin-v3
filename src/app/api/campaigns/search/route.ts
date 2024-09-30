import { NextResponse, NextRequest } from "next/server";
import searchCampaigns from "@/app/actions/campaigns/search";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("query");
  const data = await searchCampaigns(query || "");
  return NextResponse.json(data);
}
