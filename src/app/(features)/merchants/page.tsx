import React from "react";
import getMerchants from "./actions/get-merchants";
import MerchantList from "./components/merchants-list";

export default async function MerchantPage() {
  const data = await getMerchants();
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold">Merchants</h1>
      <div className="">
        <MerchantList
          merchants={data.merchants}
          totalMerchants={data.totalMerchants}
        />
      </div>
    </div>
  );
}
