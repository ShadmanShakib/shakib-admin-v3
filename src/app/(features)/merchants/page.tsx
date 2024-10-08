import React from "react";
import getMerchants from "./actions/get-merchants";

export default async function MerchantPage() {
  const merchants = await getMerchants();
  return (
    <div>
      <pre>{JSON.stringify(merchants, null, 2)}</pre>
    </div>
  );
}
