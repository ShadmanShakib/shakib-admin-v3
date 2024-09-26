import React from "react";
import getMessages from "@/app/(features)/messages/actions/get-messages";

export default async function Inbox() {
  const data = await getMessages();
  return <div>{JSON.stringify(data)}</div>;
}
