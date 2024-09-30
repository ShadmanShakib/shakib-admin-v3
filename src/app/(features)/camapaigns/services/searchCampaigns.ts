import axios from "axios";
export default async function searchCampaigns(query: string) {
  const { data } = await axios.get(`/api/campaigns/search?query=${query}`);
  return data;
}
