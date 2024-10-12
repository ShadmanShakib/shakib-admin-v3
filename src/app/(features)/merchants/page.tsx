import React from "react";
import getMerchants from "./actions/get-merchants";
import MerchantList from "./components/merchants-list";

export default async function MerchantPage({
  searchParams,
}: {
  searchParams: { page: number };
}) {
  const page = searchParams.page || 1;
  const data = await getMerchants(page);
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold">Merchants </h1>
      <div className="">
        <MerchantList
          merchants={data.merchants}
          totalMerchants={data.totalMerchants}
        />
      </div>
    </div>
  );
}
